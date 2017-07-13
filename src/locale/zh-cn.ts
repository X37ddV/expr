import locale from "../lib/base/locale";

// 多语言 - 中文
// ----------

locale.defineLocale("zh-cn", {
    // context
    MSG_EC_FUNC_E: "只有实体对象才可以调用 {0} 方法",
    MSG_EC_FUNC_P: "{0} 没有名称为 {1} 的方法或参数不匹配",
    MSG_EC_PROP_E: "{0} 无法获取属性: {1}",
    MSG_EC_PROP_N: "属性不存在: {0}",
    MSG_EC_VARI_I: "参数索引不存在: {0}",
    MSG_EC_VARI_N: "参数不存在: {0}",
    // funtion
    MSG_EF_MODEL: "\"{0}\" 不是合法的匹配模式",
    MSG_EF_STR_TO_DATE: "\"{0}\" 无法被 \"{1}\" 格式化为日期时间",
    MSG_EF_STR_TO_NUM: "\"{0}\" 无法被转换为数字",
    // lexer
    MSG_EL_SYNTAX_ON: "{0} 不是合法的八进制数",
    MSG_EL_SYNTAX_S: "{0} 引号不匹配",
    MSG_EL_SYNTAX_UC: "{0} 不是合法的unicode字符",
    MSG_EL_SYNTAX_XN: "{0} 不是合法的十六进制数",
    // parser
    MSG_EP_EMPTY: "表达式不能为空",
    MSG_EP_LEXICAL_B: "{0} 无法作为表达式的开头",
    MSG_EP_LEXICAL_E: "{0} 无法作为表达式的结尾",
    MSG_EP_LEXICAL_L: "{0} 后不允许出现 {1}",
    MSG_EP_MATCH: "{0} 不匹配",
    MSG_EP_SYNTAX_A: "数组中不允许使用 {0} 操作符",
    MSG_EP_SYNTAX_C: "{0} 操作符必须存在于{}、[]、()中",
    MSG_EP_SYNTAX_D: "{0} 无法做属性访问操作",
    MSG_EP_SYNTAX_E: "{0} 前不允许表达式存在",
    MSG_EP_SYNTAX_M: "{0} 在不是函数参数列表时不允许出现\",\"分隔符",
    MSG_EP_SYNTAX_N: "该处 {0} 无意义",
    MSG_EP_SYNTAX_O: "对象书写格式不正确",
    MSG_EP_SYNTAX_P: "{0} 操作符必须存在于{}中",
    MSG_EP_SYNTAX_SUB: "[]用作下标访问时不允许出现 {0} 分隔符",
    MSG_EP_UNKNOWN: "无法识别 {0}",
    // list
    MSG_ES_PARSER: "作用于实体“{0}”上的表达式“{1}”解析出错：{2}",
    // type & value
    MSG_EX_ADD: "{0} 和 {1} 无法做加法运算",
    MSG_EX_AND: "{0} 和 {1} 无法做逻辑与运算",
    MSG_EX_AND_L: "{0} 无法做逻辑与运算的左运算数",
    MSG_EX_COMPARE_A: "{0} 和 {1} 无法做大于运算",
    MSG_EX_COMPARE_B: "{0} 和 {1} 无法做小于运算",
    MSG_EX_COMPARE_C: "{0} 和 {1} 无法做大于等于运算",
    MSG_EX_COMPARE_D: "{0} 和 {1} 无法做小于等于运算",
    MSG_EX_DIVIDE: "{0} 和 {1} 无法做除法运算",
    MSG_EX_DIVIDE_N: "{0} 不能作为除数使用",
    MSG_EX_DOT: "{0} 无法做属性访问操作",
    MSG_EX_EQUAL: "{0} 和 {1} 无法做相等运算",
    MSG_EX_EQUAL_N: "{0} 和 {1} 无法做不等运算",
    MSG_EX_FUNC_NULL: "null 不能调用 {0} 方法",
    MSG_EX_LN: "{0} 无法做自然对数运算",
    MSG_EX_LOG: "无法做以 {0} 为底 {1} 的对数运算",
    MSG_EX_MULTIPLY: "{0} 和 {1} 无法做乘法运算",
    MSG_EX_NEGATIVE: "{0} 无法做一元负数运算",
    MSG_EX_OR: "{0} 和 {1} 无法做逻辑或运算",
    MSG_EX_OR_L: "{0} 无法做逻辑或运算的左运算数",
    MSG_EX_POSITIVE: "{0} 无法做一元正数运算",
    MSG_EX_REMAINDER: "{0} 和 {1} 无法做余数运算",
    MSG_EX_REMAINDER_N: "{0} 不能作为除数使用",
    MSG_EX_ROUND: "做四舍五入运算时，保留小数位数不能为负数: {0}",
    MSG_EX_SUBSCRIPT: "{0} 无法做下标操作",
    MSG_EX_SUBSCRIPT_T: "下标必须为数字: {0}",
    MSG_EX_SUBSCRIPT_U: "{0} 下标越界: {1}",
    MSG_EX_SUBTRACT: "{0} 和 {1} 无法做减法运算",
    MSG_EX_TRUNC: "做截断运算时，保留小数位数不能为负数: {0}",
});
// 函数描述
locale.defineFunction("zh-cn", {
    "FieldDisplayName": { fn: "获取当前字段别名", p: [], r: "字段别名（显示名称）" },
    "FieldName": { fn: "获取当前字段唯一标识", p: [], r: "字段唯一标识" },
    "FieldValue": { fn: "获取当前字段值", p: [], r: "字段值" },
    "IIf": { fn: "条件判断函数，如果第一个参数为true，则获取第二个参数，否则获取第三个参数", p: ["条件值", "真值", "假值"], r: "第二个参数或第三个参数" },
    "IfNull": { fn: "空值判断函数，如果第一个参数为null，则获取第二个参数，否则获取第一个参数", p: ["值", "默认值"], r: "第一个参数或第二个参数" },
    "Now": { fn: "获取本地当前日期时间", p: [], r: "本地当前日期时间" },
    "Parent": { fn: "获取当前实体的父实体对象，如果当前为根则获取自己", p: [], r: "父实体对象" },
    "PropValue": { fn: "获取对象属性值", p: ["对象或数组(没有分隔符则获取数组第一个元素，有分隔符获取数组所有元素集合)", "属性名", "分隔符?"], r: "属性值" },
    "Random": { fn: "返回介于 0 ~ 1 之间的一个随机数", p: [], r: "数字" },
    "RecNo": { fn: "获取当前实体的索引号，没有记录返回-1", p: [], r: "索引号" },
    "Root": { fn: "获取实体根对象", p: [], r: "实体根对象" },
    "array.Average": { fn: "获取集合元素的平均值", p: ["表达式?"], r: "平均值" },
    "array.Count": { fn: "获取集合元素个数", p: [], r: "个数" },
    "array.Distinct": { fn: "获取集合中唯一元素的集合", p: ["表达式?"], r: "集合" },
    "array.Max": { fn: "获取集合元素的最大值", p: ["表达式?"], r: "最大值" },
    "array.Min": { fn: "获取集合元素的最小值", p: ["表达式?"], r: "最小值" },
    "array.Sum": { fn: "获取集合元素的合计值", p: ["表达式?"], r: "合计值" },
    "array.Where": { fn: "获取满足条件的元素集合", p: ["条件表达式"], r: "集合" },
    "boolean.ToString": { fn: "转换布尔类型为字符串", p: [], r: "字符串" },
    "date.DateOf": { fn: "获取 Date 对象的日期部分", p: [], r: "日期" },
    "date.DayOf": { fn: "从 Date 对象获取一个月中的某一天（1 ~ 31）", p: [], r: "日" },
    "date.DayOfWeek": { fn: "得到一周中的星期几（0 ~ 6）", p: [], r: "周" },
    "date.DaysBetween": { fn: "获取日期差", p: ["结束日期时间"], r: "日差" },
    "date.HourOf": { fn: "从 Date 对象获取一天中的第几个小时", p: [], r: "时" },
    "date.HoursBetween": { fn: "获取小时差", p: ["结束日期时间"], r: "时差" },
    "date.IncDay": { fn: "增加指定的天数", p: ["天数"], r: "日期时间" },
    "date.IncHour": { fn: "增加指定的小时数", p: ["小时数"], r: "日期时间" },
    "date.IncMinute": { fn: "增加指定的分钟数", p: ["分钟数"], r: "日期时间" },
    "date.IncMonth": { fn: "增加指定的月数", p: ["月数"], r: "日期时间" },
    "date.IncSecond": { fn: "增加指定的秒数", p: ["秒数"], r: "日期时间" },
    "date.IncWeek": { fn: "增加指定的周数", p: ["周数"], r: "日期时间" },
    "date.IncYear": { fn: "增加指定的年数", p: ["年数"], r: "日期时间" },
    "date.MilliSecondOf": { fn: "从 Date 对象获取毫秒", p: [], r: "毫秒" },
    "date.MilliSecondsBetween": { fn: "获取毫秒差", p: ["结束日期时间"], r: "毫秒差" },
    "date.MinuteOf": { fn: "从 Date 对象获取分钟（0 ~ 59）", p: [], r: "分" },
    "date.MinutesBetween": { fn: "获取分钟差", p: ["结束日期时间"], r: "分差" },
    "date.MonthOf": { fn: "从 Date 对象获取月份（1 ~ 12）", p: [], r: "月" },
    "date.MonthsBetween": { fn: "获取月份差", p: ["结束日期时间"], r: "月差" },
    "date.SecondOf": { fn: "从 Date 对象获取秒数（0 ~ 59）", p: [], r: "秒" },
    "date.SecondsBetween": { fn: "获取秒差", p: ["结束日期时间"], r: "秒差" },
    "date.ToString": { fn: "转换日期时间类型为字符串", p: ["日期时间格式?"], r: "字符串" },
    "date.WeekOf": { fn: "从 Date 对象获取一年中的第几周（1 ~ 53）", p: [], r: "周" },
    "date.WeeksBetween": { fn: "获取周差", p: ["结束日期时间"], r: "周差" },
    "date.YearOf": { fn: "从 Date 对象获取年份", p: [], r: "年" },
    "date.YearsBetween": { fn: "获取年差", p: ["结束日期时间"], r: "年差" },
    "number.Abs": { fn: "获取数的绝对值", p: [], r: "绝对值" },
    "number.Ceil": { fn: "对数进行向上取整", p: [], r: "数值" },
    "number.Cos": { fn: "获取数的余弦", p: [], r: "余弦" },
    "number.Exp": { fn: "获取 e 的指数", p: [], r: "指数" },
    "number.Floor": { fn: "对数进行向下取整", p: [], r: "数值" },
    "number.Ln": { fn: "获取数的自然对数（底为 e）", p: [], r: "自然对数" },
    "number.Log": { fn: "获取数的指定底数的对数", p: ["底数"], r: "对数" },
    "number.Power": { fn: "获取数的指定指数的次幂", p: ["指数"], r: "次幂" },
    "number.Round": { fn: "根据保留的小数位数对数四舍五入", p: ["保留小数位数"], r: "数值" },
    "number.Sin": { fn: "获取数的正弦", p: [], r: "正弦" },
    "number.Sqrt": { fn: "获取数的平方根", p: [], r: "平方根" },
    "number.Tan": { fn: "获取树的正切值", p: [], r: "正切值" },
    "number.ToRMB": { fn: "获取人民币大写", p: ["是否人民币(默认true)?", "是否大写(默认true)?"], r: "人民币大写" },
    "number.ToString": { fn: "转换数字类型为字符串", p: [], r: "字符串" },
    "number.Trunc": { fn: "根据保留的小数位数对数进行截断", p: ["保留小数位数"], r: "数值" },
    "object.Parent": { fn: "获取父实体对象，如果当前为根则获取自己", p: [], r: "父实体对象" },
    "object.RecNo": { fn: "获取当前实体的索引号，没有实体返回-1", p: [], r: "索引号" },
    "string.LeftString": { fn: "获取字符串的左子字符串，指定长度", p: ["长度"], r: "子字符串" },
    "string.Length": { fn: "获取字符串长度", p: [], r: "字符串长度" },
    "string.Lower": { fn: "转换字符串为小写", p: [], r: "小写字符串" },
    "string.Pos": { fn: "检索字符串，获取子字符串在字符串中的起始位置", p: ["子字符串"], r: "位置索引" },
    "string.Replace": { fn: "字符串替换", p: ["被搜索的子字符串", "用于替换的子字符串", "匹配模式?"], r: "替换后的新字符串" },
    "string.ReplaceReg": { fn: "正则替换", p: ["用于匹配子字符串的正则表达式", "用于替换的子字符串", "匹配模式?"], r: "替换后的新字符串" },
    "string.RightString": { fn: "获取字符串的右子字符串，指定长度", p: ["长度"], r: "子字符串" },
    "string.SubString": { fn: "获取字符串的子字符串，指定开始位置和长度", p: ["开始位置", "长度"], r: "子字符串" },
    "string.ToDate": { fn: "转换字符串类型为日期时间", p: ["日期时间格式?"], r: "日期时间" },
    "string.ToNumber": { fn: "转换字符串类型为数字", p: [], r: "数字" },
    "string.ToString": { fn: "转换字符串类型为字符串", p: [], r: "字符串" },
    "string.Trim": { fn: "去除字符串两端空格", p: [], r: "字符串" },
    "string.TrimLeft": { fn: "去除字符串左端空格", p: [], r: "字符串" },
    "string.TrimRight": { fn: "去除字符串右端空格", p: [], r: "字符串" },
    "string.Upper": { fn: "转换字符串为大写", p: [], r: "大写字符串" },
});
