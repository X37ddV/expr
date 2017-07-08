import { eachToken, getValueType, isIDENToken } from "./common";
import { IContext } from "./interface";
import Type from "./type";

// 表达式检查
// ----------

export default class Check {
    private context: IContext = null;
    private types = {};
    // 生成ExprType对象
    public genType(type: any, info?, data?, entity?, depends?, errorMsg?: string): Type {
        return new Type(this.context, type, info, data, entity, depends, errorMsg);
    }
    // 有错误时，生成对应的ExprType对象
    public genErrorType(errorMsg: string): Type {
        return this.genType(undefined, undefined, undefined, undefined, undefined, errorMsg);
    }
    // 根据token结点ID返回对应ExprType对象
    public getType(tokenId) {
        return this.types[tokenId];
    }
    // 设置某token结点ID对应的ExprType对象
    public setType(tokenId, t): Check {
        this.types[tokenId] = t;
        return this;
    }
    // 对表达式进行语法分析和依赖关系计算
    public check(expr: string, context: IContext) {
        this.context = context;
        let r;
        const p = this.context.getParserInfo(expr); /// 在context数据上下文中对expr进行语法分析
        if (p.errorMsg === "") { /// 表达式解析正确(语法正确，但是运算关系正确性还没验证如：1>2&&43会报错)
            const msg = this.doCheck(p.rootToken); /// 检查表达式运算关系正确性
            if (msg === "") {
                r = this.getType(p.rootToken.id); /// 返回根节点对应的ExprType对象
                r.tokens = p.tokens;
                r.rootToken = p.rootToken;
                const ds = [];
                const pushDepends = (d) => {
                    if (getValueType(d) === "array") {
                        for (const item of d) {
                            pushDepends(item);
                        }
                    } else {
                        let f = false;
                        for (const item of ds) {
                            f = item === d;
                            if (f) {
                                break;
                            }
                        }
                        if (!f) {
                            ds.push(d);
                        }
                    }
                };
                eachToken(r.rootToken, (token) => {
                    const tt = this.getType(token.id);
                    if (tt) {
                        if (tt.depends) {
                            pushDepends(tt.depends);
                        }
                        const e = tt.entity;
                        if (e) {
                            const pp = token.parent;
                            const pt = pp ? this.getType(pp.id) : null;
                            if (!pt || !pt.entity) {
                                pushDepends(e.fullName);
                            }
                        }
                    }
                    return true;
                }, this);
                r.dependencies = ds;
            } else { /// 运算关系出错
                r = this.genErrorType(msg);
            }
        } else { /// 解析过程中出错
            r = this.genErrorType(p.errorMsg);
        }
        return r;
    }
    // 检查表达式运算关系正确性
    public doCheck(rootToken): string {
        const t = rootToken;
        const p = t.parent;
        let msg = "";
        let l;
        let r; /// 语法树上的结点
        let tt = null;
        let lt;
        let rt; /// 语法树结点对应的ExprType对象
        if (t.childs) { /// 先检查该结点的所有子节点
            for (let i = 0; i < t.childs.length; i++) {
                msg = this.doCheck(t.childs[i]);
                if (msg !== "") { /// 子节点运算关系出错，直接返回错误信息，不再检查父节点
                    break;
                } else if (i === 0) {
                    l = t.childs[0];
                    lt = this.getType(l.id); /// 左运算数
                } else if (i === 1) {
                    r = t.childs[1];
                    rt = this.getType(r.id); /// 右运算数
                }
            }
        }
        if (msg === "") {
            switch (t.tokenType) {
                case "TK_STRING": /// 字符串结点
                    tt = this.genType("string", "string", t.tokenValue);
                    break;
                case "TK_NUMBER": /// 数字结点
                    tt = this.genType("number", "number", t.tokenValue);
                    break;
                case "TK_BOOL": /// 布尔结点
                    tt = this.genType("boolean", "boolean", t.tokenValue);
                    break;
                case "TK_NULL": /// NULL结点
                    tt = this.genType("null", "null", t.tokenValue);
                    break;
                case "TK_IDEN": /// 标识符结点
                    tt = this.genType("string", "string", t.tokenValue);
                    if (isIDENToken(t)) { /// 排除了函数名和对象属性的情况
                        tt = tt.getVariableType(null);
                    }
                    break;
                case "TK_UNARY": /// 单目结点
                    tt = lt.negative(t.tokenValue);
                    break;
                case "TK_NOT": /// !运算结点
                    tt = lt.not();
                    break;
                case "TK_MULTI": /// *结点
                    tt = lt.multiply(rt);
                    break;
                case "TK_DIV": /// /结点
                    tt = lt.divide(rt);
                    break;
                case "TK_MOD": /// %结点
                    tt = lt.remainder(rt);
                    break;
                case "TK_PLUS": /// +加法结点
                    tt = lt.add(rt);
                    break;
                case "TK_MINUS": /// -减法结点
                    tt = lt.subtract(rt);
                    break;
                case "TK_CO": /// 比较运算符结点，包括>,>=,<,<=
                case "TK_EO": /// 等于运算符结点，包括==,!=,
                    tt = lt.compare(rt, t.tokenValue);
                    break;
                case "TK_AND": /// &&结点
                    tt = lt.and(rt);
                    break;
                case "TK_OR": /// ||结点
                    tt = lt.or(rt);
                    break;
                case "TK_COLON": /// :结点
                    tt = lt.hashItem(rt); /// tt为键值对对象
                    break;
                case "TK_DOT": /// .结点
                    switch (r.tokenType) {
                        case "VTK_FUNCTION": /// 调用函数
                            tt = rt.getFunctionType(lt); /// 调用者为lt
                            break;
                        case "TK_IDEN": /// 访问属性
                            tt = rt.getVariableType(lt);
                            break;
                        default:
                            break;
                    }
                    break;
                case "VTK_COMMA": /// ,结点
                    tt = this.genType("array", [], []);
                    for (const item of t.childs) {
                        lt = this.getType(item.id);
                        tt.arrayPush(lt); /// lt为(1,2)或[x:1,y:2]中，的子节点
                    }
                    break;
                case "VTK_PAREN": /// ()结点
                    if (t.childs.length === 0) { /// 如：fun()
                        tt = (p && p.tokenType === "TK_IDEN") ?
                            this.genType("array", [], []) :
                            this.genType("undefined");
                    } else {
                        tt = (p && p.tokenType === "TK_IDEN" && l.tokenType !== "VTK_COMMA") ?
                            this.genType("array", [], []).arrayPush(lt) : /// 如：fun(2)
                            lt; /// 如：fun(1,2,3) 或 2+((4))
                    }
                    break;
                case "VTK_ARRAY": /// []结点
                    tt = this.genType("array", [], []);
                    if (t.childs.length > 0) {
                        if (l.tokenType === "VTK_COMMA") {
                            tt.arrayConcat(lt);
                        } else {
                            tt.arrayPush(lt);
                        }
                    }
                    break;
                case "VTK_OBJECT": /// {}结点
                    tt = this.genType("object", {}, {});
                    if (t.childs.length > 0) {
                        if (l.tokenType === "VTK_COMMA") {
                            tt.objectSetProperties(lt); /// 如：{x:1,y:2}
                        } else {
                            tt.objectSetProperty(lt); /// 如：{x:1}
                        }
                    }
                    break;
                case "VTK_SUBSCRIPT": /// a[n]结点
                    tt = lt.subscript(rt);
                    break;
                case "VTK_FUNCTION": /// Fn()结点
                    tt = (p && p.tokenType === "TK_DOT" && p.childs[0] !== t) ?
                        lt.hashItem(rt) : /// 有显式调用者
                        lt.hashItem(rt).getFunctionType(null); /// 没有显式调用者
                    break;
                default:
                    break;
            }
            msg = tt.errorMsg;
            if (msg === "") {
                this.setType(t.id, tt); /// 设置某token结点ID对应的ExprType对象
            }
        }
        return msg;
    }
}
