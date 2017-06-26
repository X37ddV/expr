import Calc from "./base/calc";
import Check from "./base/check";
import { format, getValueType, merger } from "./base/common";
import Context from "./base/context";
import locale from "./base/locale";
import ExprCurrent from "./current";

export default class ExprContext extends Context {
    private exprContext: ExprCurrent = new ExprCurrent(); // 计算环境堆栈
    private pageContext = { $C: {} };              // 页面上下文
    private dataContext;                           // 数据上下文
    private contextVariables = [];                 // 用于存储环境变量
    private data;                                  // 全部数据
    private functions = {};                        // 函数列表
    private fieldName;
    private fieldDisplayName;
    private fieldValue;
    public setDataCursor(cursor) {
        this.exprContext.setDataCursor(cursor);
    }
    public setPageContext(ctx) {
        this.pageContext.$C = ctx;
    }
    public setDataContext(ctx) {
        this.dataContext = ctx;
    }
    public setData(d) {
        this.data = d;
    }
    public addFunction(func) {
        let gs;
        gs = {};
        gs[""] = func._ || {};
        gs.array = func.array || {};
        gs.boolean = func.boolean || {};
        gs.date = func.date || {};
        gs.number = func.number || {};
        gs.object = func.object || {};
        gs.string = func.string || {};
        for (const g in gs) {
            if (gs.hasOwnProperty(g)) {
                const group = gs[g];
                for (const n in group) {
                    if (group.hasOwnProperty(n)) {
                        const fullName = g ? g + "." + n : n;
                        group[n].getLocale = ((key) => () => locale.getFunction()[key])(fullName);
                    }
                }
            }
        }
        return merger(this.functions, gs);
    }
    public getFunction() {
        return this.functions;
    }
    public doGetIfNullName() {
        return "IfNull";
    }
    public doGetIIfName() {
        return "IIf";
    }
    public doGetFunctionType(name, source, paramType, paramData) {
        /// <summary>得到函数source.name(paramValue)执行结果的ExprType对象</summary>
        /// <param name="name" type="String">函数名</param>
        /// <param name="source">函数调用者</param>
        /// <param name="paramType" type="Array">各个实参类型组成的数组</param>
        /// <param name="paramValue" type="Array">实参数组</param>
        let r;
        const t = (source !== null) ? // 调用者类型，如"string","number","array","object"
            (source.entity ? source.entity.type : source.type) : // 有显式调用者
            ""; // 无显式调用者，全局函数
        const ft = this.getFuncType(t, name, paramType); // 类型t的name函数
        if (ft === null) {
            r = this.genErrorType(format(locale.getLocale().MSG_EC_FUNC_T, t, name));
        } else {
            let depends = [];
            if (ft.p) {
                const pd = paramData;
                for (let i = 0; i < ft.p.length; i++) { // 参数中含有子表达式，先求出子表达式的依赖关系
                    if (ft.p[i] === "expr" && paramType[i] === "string" && getValueType(pd[i]) === "string") {
                        const dr = (source && source.entity) ?
                            this.calcEntityDependencies(pd[i], source.entity.fullName) :
                            this.calcEntityDependencies(pd[i]);
                        if (dr.errorMsg === "") {
                            depends = depends.concat(dr.dependencies);
                        } else {
                            r = this.genErrorType(dr.errorMsg);
                            break;
                        }
                    }
                }
            }
            if (!r) {
                let entity = null;
                let type;
                switch (ft.e) {
                    case "root":
                        entity = "";
                        type = "object";
                        break;
                    case "parent":
                        if (source === null) { // Paren()
                            entity = this.getParentName(this.exprContext.getEntityName());
                            type = "object";
                        } else if (source.entity) { // Root().E1[0].Parent()
                            entity = this.getParentName(source.entity.fullName);
                            type = "object";
                        } else { // {x:1}.Parent()
                            r = this.genErrorType(format(locale.getLocale().MSG_EC_FUNC_E, "Parent"));
                        }
                        break;
                    case "data":
                    case "value":
                        let n = null;
                        if (source === null) {
                            n = this.exprContext.getEntityName();
                        } else if (source.entity) {
                            n = source.entity.fullName;
                        }
                        if (n !== null) {
                            if (ft.e === "data") { // 返回值为实体数据
                                entity = n;
                            }
                            depends.push(n);
                        }
                        break;
                    default:
                        break;
                }
                if (!r) {
                    if (entity !== null) {
                        entity = this.genEntityInfo(entity, type);
                    }
                    if (depends.length === 0) {
                        depends = null;
                    }
                    r = this.genType(ft.r, ft.r, undefined, entity, depends); // 函数返回的ExprType对象
                }
            }
        }
        return r;
    }
    public doGetFunctionValue(name, source, paramValue) {
        /// <summary>得到函数source.name(paramValue)执行结果</summary>
        /// <param name="name" type="String">函数名</param>
        /// <param name="source">函数调用者</param>
        /// <param name="paramValue" type="Array">实参数组</param>
        const t = (source !== null) ? // 调用者类型，如"string","number","array","object"
            (source.entity ? source.entity.type : source.type) : // 有显式调用者
            ""; // 无显式调用者，全局函数
        const p = [source].concat(paramValue);  // 实参数组
        const pt = []; // 各个实参类型组成的数组
        for (const item of paramValue) {
            pt.push(getValueType(item));
        }
        const f = this.getFunc(t, name, pt); // 类型t的name函数
        const r = f ?
            f.fn.apply(this, [this].concat(p)) :
            this.genErrorValue(format(locale.getLocale().MSG_EC_FUNC_P, t, name)); // 没有该函数或参数不匹配
        return r;
    }
    public doGetVariableType(name, source) {
        let r;
        let pIndex;
        pIndex = 0;
        if (source === null && name.split("")[0] === "$") {
            pIndex = name.substr(1);
            if (pIndex === "C") { // name为$C
                r = this.genType(getValueType(this.pageContext.$C));
            } else {
                pIndex = Number(pIndex);
                if (!isNaN(pIndex)) { // name为$0,$1,$2...
                    if (this.exprContext.isValid(pIndex)) {
                        name = ""; // 为了区分合法的$0,$1...与一般属性名a,b...，它们的处理方式不一样
                    } else { // 参数不存在
                        r = this.genErrorType(format(locale.getLocale().MSG_EC_VARI_N, name));
                    }
                } else { // 参数索引不存在
                    r = this.genErrorType(format(locale.getLocale().MSG_EC_VARI_I, name));
                }
            }
        }
        if (!r) {
            if (this.exprContext.isEntityData(pIndex)) {
                let entity;
                let type;
                if (source === null) {
                    entity = this.genEntityInfo(this.getPropertyName(this.exprContext.getEntityName(pIndex), name));
                    if (entity) {
                        type = entity.type;
                    } else {
                        r = this.genErrorType(format(locale.getLocale().MSG_EC_PROP_N, name));
                    }
                } else {
                    if (source.entity) {
                        entity = this.genEntityInfo(this.getPropertyName(source.entity.fullName, name));
                        if (entity) {
                            type = entity.type;
                        } else if (source.entity.type === "object" && source.entity.field !== "") {
                            type = "undefined";
                        } else {
                            r = this.genErrorType(format(locale.getLocale().MSG_EC_PROP_N, name));
                        }
                    } else {
                        entity = null;
                        type = "undefined";
                    }
                }
                if (!r) {
                    r = this.genType(type, type, name, entity);
                }
            } else {
                r = this.genType();
            }
        }
        return r;
    }
    public doGetVariableValue(name, source) {
        /// <summary>得到对象source的name属性值</summary>
        let r;
        let pIndex;
        pIndex = 0;
        if (source === null && name.split("")[0] === "$") {
            pIndex = name.substr(1);
            if (pIndex === "C") { // name为$C
                r = this.genValue(this.pageContext.$C);
            } else {
                pIndex = Number(pIndex);
                if (!isNaN(pIndex)) { // name为$0,$1,$2...
                    if (this.exprContext.isValid(pIndex)) {
                        name = ""; // 为了区分合法的$0,$1...与一般属性名a,b...，它们的处理方式不一样
                    } else { // 参数不存在
                        r = this.genErrorValue(format(locale.getLocale().MSG_EC_VARI_N, name));
                    }
                } else { // 参数索引不存在
                    r = this.genErrorValue(format(locale.getLocale().MSG_EC_VARI_I, name));
                }
            }
        }
        if (!r) {
            let value; // 包含了name等属性的js对象
            if (this.exprContext.isEntityData(pIndex)) { // 当前表达式处于实体数据环境
                let entity;
                let parentObj;
                if (source === null) { // P1 a $0
                    entity = this.genEntityInfo(this.getPropertyName(this.exprContext.getEntityName(pIndex), name));
                    if (!entity) {
                        r = this.genErrorValue(format(locale.getLocale().MSG_EC_PROP_N, name));
                    } else {
                        value = (entity.field !== "" || name === "") ?
                            this.getEntityData(entity.name, pIndex) : // name为当前信息默认实体E1的属性，如：P1 或name==$0,$1...
                            this.getEntityData(this.getParentName(entity.name), pIndex); // name为当前信息默认实体E1的子实体,Entity1
                    }
                    parentObj = null;
                } else {
                    value = source.toValue();
                    if (source.entity && !(source.entity.type === "object" && source.entity.field !== "")) {// Root().E1
                        entity = this.genEntityInfo(this.getPropertyName(source.entity.fullName, name));
                        if (!entity) {
                            r = this.genErrorValue(format(locale.getLocale().MSG_EC_PROP_N, name));
                        } else if (entity.field === "") { // name为子实体字段
                            parentObj = source;
                        }
                    } else { // {x:1,y:2}.x ，访问不存在的属性是不会报错
                        entity = null;
                    }
                }
                if (!r) {
                    if (value) {
                        // source==null时，$0,$1...被视为特殊的访问标记，并不是取对象属性，而是取整个对象
                        if (!(source === null && name === "")) {
                            value = value[name];
                        }
                        if (value === undefined) { // 数据中不包含name属性值，但上下文中包含name的类型定义
                            value = null;
                            if (entity) { // 给value赋值为entity.type类型的默认值
                                if (entity.type === "object") {
                                    value = {};
                                } else if (entity.type === "array") {
                                    value = [];
                                }
                            }
                        }
                        r = this.genValue(value, null, entity, "", parentObj);
                        if (r && r.type === "array" && r.entity) {
                            r.entity.map = [];
                            for (let i = 0; i < value.length; i++) {
                                r.entity.map.push(i); // map存放该实体数组有效的访问下标
                            }
                        }
                    } else {
                        r = this.genErrorValue(format(locale.getLocale().MSG_EC_PROP_E, value, name));
                    }
                }
            } else { // 当前表达式处于普通数据环境
                value = (source === null) ?
                    this.getData(pIndex) :
                    value = source.toValue();
                if (!(source === null && name === "")) {
                    switch (getValueType(value)) {
                        case "object":
                        case "array":
                        case "string":
                            value = value[name];
                            break;
                        default: // 无法获取属性
                            r = this.genErrorValue(format(locale.getLocale().MSG_EC_PROP_E, value, name));
                    }
                }
                if (!r) {
                    r = this.genValue(value);
                }
            }
        }
        return r;
    }
    public doGetEntityType(source) {
        const e = this.genEntityInfo(source.entity, "object");
        const t = this.genType("object", "object", undefined, e, [e.fullName]);
        return t;
    }
    public doGetEntityValue(source, index) {
        /// <summary>从实体数组source中取出第index条实体记录</summary>
        const v = source.toValue()[index];
        const e = this.genEntityInfo(source.entity, "object");
        e.recNo = source.entity.map[index];
        const parentObj = source.parentObj;
        const r = this.genValue(v, getValueType(v), e, "", parentObj);
        return r;
    }
    public genEntityInfo(fullName, type?) {
        /// <summary>得到实体信息，null表示该实体不存在</summary>
        /// <param name="fullName" type="String">实体全名称</param>
        /// <param name="type" type="String">提前确定实体类型</param>
        if (getValueType(fullName) === "object") {
            fullName = fullName.fullName;
        }
        const name = [];
        const field = [];
        let dataType;
        if (fullName !== "") {
            const p = fullName.split(".");
            let x = p[0]; // "E1"
            const c = this.dataContext;
            let t = c[x]; // dataContext["E1"]
            if (t) {
                name.push(x);
                for (let i = 1; i < p.length; i++) {
                    x = p[i];
                    if (t.childs && t.childs[x] && field.length === 0) { // x为t的子实体，如：E1.Entity1
                        name.push(x);
                        t = t.childs[x];
                    } else { // x为t的属性，如：E1.P1
                        let f = field.join(".");
                        if (f !== "") {
                            f += ".";
                        }
                        f += x; // 实体出现"x.y"形式的属性名
                        if (t.fields && t.fields[f]) {
                            field.push(x);
                            dataType = t.fields[f].type;
                        } else { // 无法识别x，如：E1.a
                            break;
                        }
                    }
                }
            }
        }
        let r = {
            field: field.join("."),
            fullName: (fullName),
            name: name.join("."),
            recNo: -1,
            type: dataType,
        };
        if (r.name === r.fullName) { // 该fullName指向实体数据
            r.type = "array";
        } else if (r.name + "." + r.field !== r.fullName) { // 该fullName中有无法识别的部分
            r = null;
        }
        if (r && type) { // 提前确定的实体类型
            r.type = type;
        }
        return r;
    }
    public getRootValue() {
        /// <summary>得到data封装而成的ExprValue对象</summary>
        const entity = this.genEntityInfo("", "object");
        entity.recNo = 0;
        return this.genValue(this.data, "object", entity, "");
    }
    public getParentValue(source) {
        /// <summary>得到当前实体的父实体封装而成的ExprValue对象</summary>
        let r;
        if (this.exprContext.isEntityData()) {
            let entity;
            if (source === null) { // Parent()
                entity = this.exprContext.getEntityName();
            } else if (source.entity && source.entity.field === "") {
                if (source.parentObj) { // Root().Parent() , Entity1[1].NewEntity1[2].Parent()
                    r = source.parentObj;
                } else { // Root().E1.Sum("Entity1[0].Parent().ID")
                    entity = source.entity.fullName;
                }
            } else { // {x:1}.Parent()
                r = this.genErrorValue(format(locale.getLocale().MSG_EC_FUNC_E, "Parent"));
            }
            if (!r) {
                entity = this.genEntityInfo(this.getParentName(entity), "object");
                entity.recNo = this.exprContext.getEntityDataCursor(entity.name);
                const value = this.getEntityData(entity.name); // 取父实体对象
                r = this.genValue(value, "", entity);
            }
        } else {
            r = this.genValue(null);
        }
        return r;
    }
    public getEntityData(entityName, index?) {
        /// <summary>得到实体全名称entityName数组的第index个实体对象</summary>
        let d = this.data;
        if (entityName !== "") {
            const p = entityName.split(".");
            const cp = [];
            for (const prop of p) {
                cp.push(prop);
                d = d[prop]; // data[E1],得到实体数组
                const cursor = this.exprContext.getEntityDataCursor(cp.join("."), index);
                d = d[cursor]; // 得到实体数组中第cursor条实体记录
                if (d === undefined) {
                    break;
                }
            }
        }
        return d;
    }
    public getData(index) {
        /// <summary>得到当前信息的第0条记录的params属性的第index条记录的数据</summary>
        return this.exprContext.getData(index);
    }
    public getParentName(name) {
        /// <summary>获取父名称</summary>
        /// <param name="name" type="String">名称</param>
        /// <returns type="String"></returns>
        const p = name.split(".");
        let r;
        if (p.length > 0) {
            p.pop();
            r = p.join(".");
        } else {
            r = "";
        }
        return r;
    }
    public getPropertyName(name, prop) {
        /// <summary>获取实体属性全名称</summary>
        /// <param name="name" type="String">实体名</param>
        /// <param name="prop" type="String">属性名</param>
        return (name && prop) ?
            (name + "." + prop) :
            (name ? name : prop);
    }
    public getRecNo(source) {
        /// <summary>获取当前实体的索引号，没有实体返回-1</summary>
        let r;
        if (this.exprContext.isEntityData()) {
            let entity;
            if (source === null) { // RecNo()
                entity = this.exprContext.getEntityName();
                const value = this.exprContext.getEntityDataCursor(entity);
                r = this.genValue(value);
            } else {
                r = (source.entity && source.entity.field === "") ?
                    this.genValue(source.entity.recNo) : // Root().E1[0].Entity1[3].RecNo()
                    this.genErrorValue(format(locale.getLocale().MSG_EC_FUNC_E, "RecNo")); // {x:1}.RecNo()
            }
        } else {
            r = this.genValue(-1);
        }
        return r;
    }
    public setFieldName(value) { this.fieldName = value; }
    public getFieldName() { return this.fieldName || ""; }
    public setFieldDisplayName(value) { this.fieldDisplayName = value; }
    public getFieldDisplayName() { return this.fieldDisplayName || ""; }
    public setFieldValue(value) { this.fieldValue = value; }
    public getFieldValue() { return this.fieldValue || null; }
    public findParams(ps, p) {
        /// <summary>检测参数类型数组是否匹配</summary>
        /// <param name="t" type="string">类型</param>
        /// <param name="ps" type="Array">形参的数组，尾部带?表示可选参数</param>
        /// <param name="p" type="Array">当前调用的实参数组</param>
        let r = [];
        const pt = [];
        let pl = ps.length;
        for (let i = 0; i < ps.length; i++) {
            let x = ps[i];
            if (x.indexOf("?") === x.length - 1) {
                x = x.replace("?", "");
                pl--;
            }
            pt.push(x);
            if (i < p.length) {
                r.push(x);
            }
        }
        let b = p.length >= pl && p.length <= pt.length;
        if (b) {
            for (let j = 0; j < r.length; j++) { // 参数类型比较
                b = r[j] === "undefined" || p[j] === "undefined" || p[j] === "null" ||
                r[j] === p[j] || r[j] === "expr" && p[j] === "string" || r[j] === "array" &&
                r[j] === getValueType(p[j]) || r[j] === "object" && r[j] === getValueType(p[j]);
                if (!b) {
                    break;
                }
            }
        }
        if (!b) {
            r = null;
        }
        return r;
    }
    public getFunc(type, name, params) {
        /// <summary>找到参数个数和类型都匹配的函数</summary>
        /// <param name="type" type="String">调用者类型，如"string","number"</param>
        /// <param name="name" type="String">函数名</param>
        /// <param name="params" type="Array">实参类型数组</param>
        let r;
        if (type === "undefined") {
            let f;
            const fList = [];
            for (const i in this.functions) {
                if (this.functions.hasOwnProperty(i)) {
                    f = this.functions[i][name];
                    if (f && this.findParams(f.p, params) !== null) {
                        fList.push(f);
                    }
                }
            }
            r = (fList.length > 1) ? fList :
                ((fList.length === 1) ? fList[0] : null);
        } else {
            r = this.functions[type][name];
            if (!r || !r.fn || this.findParams(r.p, params) === null) {
                r = null;
            }
        }

        return r;
    }
    public getFuncType(type, name, params) {
        /// <summary>得到参数个数和类型都匹配的函数的返回值类型</summary>
        /// <param name="type" type="String">调用者类型，如"string","number"</param>
        /// <param name="name" type="String">函数名</param>
        /// <param name="params" type="Array">实参类型数组</param>
        let r = null;
        const fn = this.getFunc(type, name, params);
        if (getValueType(fn) === "array") {
            let t = "";
            for (const item of fn) {
                if (r === null) {
                    t = item.r;
                } else if (item.r !== type) {
                    t = "undefined";
                    break;
                }
            }
            if (t !== "") {
                r = {
                    r: t,
                };
            }
        } else if (fn !== null) {
            r = {
                e: fn.e,
                p: this.findParams(fn.p, params),
                r: fn.r,
            };
        }
        return r;
    }
    public getContextVariableValue(key) {
        let r;
        const v = this.contextVariables;
        if (v.length > 0) {
            r = v[v.length - 1][key];
        }
        if (r === undefined) {
            r = null;
        }
        return this.genValue(r);
    }
    public pushContextVariables(v) {
        this.contextVariables.push(v);
    }
    public popContextVariables() {
        this.contextVariables.pop();
    }
    public _calcExpr(expr, curr) {
        /// <summary>计算表达式expr的值</summary>
        if (curr.length > 0) {
            this.exprContext.push(curr);
        }

        const e = new Calc();
        const r = e.calc(expr, this); // 调用计算器对象对表达式进行分析和计算

        if (curr.length > 0) {
            this.exprContext.pop();
        }
        return r;
    }
    public calcEntityExpr(expr, entityName, cursor) {
        /// <summary>在实体计算环境下计算表达式expr的值</summary>
        const c = [];
        let i = 1;
        while (i < arguments.length) {
            c.push({
                current: arguments[i],
                cursor: arguments[i + 1],
                isEntityData: true,
            });
            i += 2;
        }
        return this._calcExpr(expr, c);
    }
    public calcDataExpr(expr, data) {
        /// <summary>在数据计算环境下计算表达式expr的值</summary>
        const c = [];
        let i = 1;
        while (i < arguments.length) {
            c.push({
                current: arguments[i],
                isEntityData: false,
            });
            i++;
        }
        return this._calcExpr(expr, c);
    }
    public calcDependencies(expr, curr) {
        /// <summary>计算表达式expr的依赖关系</summary>
        if (curr.length > 0) {
            this.exprContext.push(curr);
        }

        const p = new Check();
        const r = p.check(expr, this);

        if (curr.length > 0) {
            this.exprContext.pop();
        }
        return r;
    }
    public calcEntityDependencies(expr, entityName?) {
        /// <summary>在实体计算环境下计算表达式expr的依赖关系</summary>
        const c = [];
        let i = 1;
        while (i < arguments.length) {
            c.push({
                current: arguments[i],
                isEntityData: true,
            });
            i++;
        }
        return this.calcDependencies(expr, c);
    }
    public calcDataDependencies(expr) {
        /// <summary>在数据计算环境下计算表达式expr的依赖关系</summary>
        const c = [];
        let i = 1;
        while (i < arguments.length) {
            c.push({
                isEntityData: false,
            });
            i++;
        }
        return this.calcDependencies(expr, c);
    }
    public pushEntityCurrent(entityName, cursor) {
        /// <summary>向栈顶添加新的计算环境</summary>
        this.exprContext.push([{
            current: entityName,
            cursor: (cursor),
            isEntityData: true,
        }]);
    }
    public popEntityCurrent() {
        /// <summary>删除栈顶的计算环境</summary>
        this.exprContext.pop();
    }
}
