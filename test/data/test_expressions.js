﻿Date.prototype.toJSON = function() {
	var r = moment(this).format("YYYY-MM-DDTHH:mm:ss");
    return r;
}
if (!window.dateTime) {
    window.dateTime = new Date();
}
var d1 = moment("1999-12-31T23:59:59").format();
var d2 = moment("1999-12-31T00:00:00").format();
var year = dateTime.getFullYear();
var time1 = dateTime.toLocaleDateString();
var time2 = dateTime.toLocaleTimeString();
var date1 = dateTime.getDate();
var date2 = date1 < 10 ? "0" + date1 : date1;
var mon1 = dateTime.getMonth() + 1;
var mon2 = mon1 < 10 ? "0" + mon1 : mon1;
var hour1 = dateTime.getHours();
var hour2 = hour1 < 10 ? "0" + hour1 : hour1;
var min1 = dateTime.getMinutes();
var min2 = min1 < 10 ? "0" + min1 : min1;
var s1 = dateTime.getSeconds();
var s2 = s1 < 10 ? "0" + s1 : s1;
var ss1 = dateTime.getMilliseconds();
var ss2 = ss1;
if (ss2 < 10) {
    ss2 = "00" + ss2;
} else if (ss2 < 100) {
    ss2 = "0" + ss2;
}
var datetime1 = year + "-" + mon2 + "-" + date2 + "T00:00:00";
var datetime2 = year + "-" + mon2 + "-" + date2 + "T" + hour2 + ":" + min2 + ":" + s2;// + "." + ss2 + "Z";
var cmpOE1_0 = '{"ID":11,"P1":"E1的第1条数据","P2":12345.678,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"Entity1":[{"ID":101,"P1":"E1[0].Entity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"NewEntity1":[{"ID":101,"P1":"E1[0].Entity1[1].NewEntity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1[1].NewEntity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":103,"P1":"E1[0].Entity1[1].NewEntity1第3条数据","P2":3.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}]},{"ID":103,"P1":"E1[0].Entity1第3条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}],"Entity2":[{"ID":201,"P1":"E1[0].Entity2第1条数据","P2":12.23},{"ID":202,"P1":"E1[0].Entity2第2条数据","P2":8.01}]}';
var cmpOE1_1 = '{"ID":12,"P1":"E1的第2条数据","P2":12345.678,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[3,"vxcvxc",{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"Entity1":[{"ID":101,"P1":"E1[1].Entity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[1].Entity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}]}';
var cmpOAE1Entity1 = '{"ID":101,"P1":"E1[0].Entity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"NewEntity1":[{"ID":101,"P1":"E1[0].Entity1[1].NewEntity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1[1].NewEntity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":103,"P1":"E1[0].Entity1[1].NewEntity1第3条数据","P2":3.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}]},{"ID":103,"P1":"E1[0].Entity1第3条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}';
var cmpOE1Entity1_0 = '{"ID":101,"P1":"E1[0].Entity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}';
var cmpAE1 = '[' + cmpOE1_0 + ',' + cmpOE1_1 + ']';
var cmpAE1Entity1 = '[' + cmpOAE1Entity1 + ']';
var cmpOE2 = '{"ID":21,"P1":"E2的第1条数据","P2":12345.678,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"1999-12-31T23:59:59","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"Entity1":[{"ID":201,"P1":"E2[0].Entity1的第1条数据","P2":12.23},{"ID":202,"P1":"E2[0].Entity1的第2条数据","P2":8.01},{"ID":203,"P1":"E2[0].Entity1的第3条数据","P2":12.23},{"ID":204,"P1":"E2[0].Entity1的第4条数据","P2":12.23},{"ID":205,"P1":"E2[0].Entity1的第5条数据","P2":12.23},{"ID":206,"P1":"E2[0].Entity1的第6条数据","P2":12.23},{"ID":207,"P1":"E2[0].Entity1的第7条数据","P2":12.23},{"ID":208,"P1":"E2[0].Entity1的第8条数据","P2":12.23}]}';
var cmpOAE2Entity1 = '{"ID":201,"P1":"E2[0].Entity1的第1条数据","P2":12.23},{"ID":202,"P1":"E2[0].Entity1的第2条数据","P2":8.01},{"ID":203,"P1":"E2[0].Entity1的第3条数据","P2":12.23},{"ID":204,"P1":"E2[0].Entity1的第4条数据","P2":12.23},{"ID":205,"P1":"E2[0].Entity1的第5条数据","P2":12.23},{"ID":206,"P1":"E2[0].Entity1的第6条数据","P2":12.23},{"ID":207,"P1":"E2[0].Entity1的第7条数据","P2":12.23},{"ID":208,"P1":"E2[0].Entity1的第8条数据","P2":12.23}';
var cmpAE2 = '[' + cmpOE2 + ']';
var cmpAE2Entity1 = '[' + cmpOAE2Entity1 + ']';
var cmpORoot = '{"E1":[' + cmpOE1_0 + ',' + cmpOE1_1 + '],"E2":[' + cmpOE2 + ']}';

var exprDataCalc = {
    title: "DataCalc基于实体",
    exprs: [
        ['$C.userId + ""', '"admin"'],
    //子实体、实体，单条数据
        ['Entity1.ID', 'undefined', 'array 无法做属性访问操作', 'E1.Entity1.ID'], // TODO: 计算错误？
        ['Root().E1[0]', cmpOE1_0, '', 'E1'],
        ['Root()["E1"]', cmpAE1, ''], // TODO: 无法获取正确依赖
        ['Entity1[0]', cmpOE1Entity1_0, '', 'E1.Entity1'],
        ['Entity1[0].Parent()', cmpOE1_0, '', 'E1.Entity1|E1'],
        ['+Entity1[0].Parent()', 'undefined', 'object 无法做一元正数运算'],
        ['-Entity1[0].Parent()', 'undefined', 'object 无法做一元负数运算'],
        ['!Entity1[0].Parent()', 'false', '', 'E1.Entity1|E1'],
        ['!!Entity1[0].Parent()', 'true', '', 'E1.Entity1|E1'],
        ['Entity1[0]*Entity1[0].Parent()', 'undefined', 'object 和 object 无法做乘法运算'],
        ['Entity1[0]/Entity1[0].Parent()', 'undefined', 'object 和 object 无法做除法运算'],
        ['Entity1[0]%Entity1[0].Parent()', 'undefined', 'object 和 object 无法做余数运算'],
        ['Entity1[0].Parent()/Entity1', 'undefined', 'object 和 array 无法做除法运算'],
        ['Entity1[0].Parent()%Entity1', 'undefined', 'object 和 array 无法做余数运算'],
        ['Entity1[0]+Entity1[0].Parent()', 'undefined', 'object 和 object 无法做加法运算'],
        ['Entity1[0]-Entity1[0].Parent()', 'undefined', 'object 和 object 无法做减法运算'],
        ['Entity1[0]>Entity1[0].Parent()', 'undefined', 'object 和 object 无法做大于运算'],
        ['Entity1[0]>=Entity1[0].Parent()', 'undefined', 'object 和 object 无法做大于等于运算'],
        ['Entity1[0]<Entity1[0].Parent()', 'undefined', 'object 和 object 无法做小于运算'],
        ['Entity1[0]<=Entity1[0].Parent()', 'undefined', 'object 和 object 无法做小于等于运算'],
        ['Entity1[0]==Entity1[0].Parent()', 'false', '', 'E1.Entity1|E1'],
        ['Entity1[0]==Entity1[0]', 'true', '', 'E1.Entity1'],
        ['Root().E1[0].ID==11', 'true', '', 'E1|E1.ID'],
        ['Root().E1[0].P1=="E1的第1条数据"', 'true', '', 'E1|E1.P1'],
        ['Root().E1[0].P2==12345.678', 'true', '', 'E1|E1.P2'],
        ['Root().E1[0].P3=={name:"item1", alias: { en: "Item1", zh_CN: "项目1", zh_TW: "項目1"} }', 'true', '', 'E1|E1.P3'],
        ['Root().E1[0].P5=="' + datetime2 + '"', 'undefined', 'date 和 string 无法做相等运算'],
        ['Root().E1[0].P5.DateOf() == Now().DateOf()', 'true', '', 'E1|E1.P5'],
        ['Root().E1[0].P5', '"' + datetime2 + '"', '', 'E1|E1.P5'],
        ['Root().E1[0].P6==true', 'true', '', 'E1|E1.P6'],
        ['Root().E1[0].PN1==null', 'true', '', 'E1|E1.PN1'],
        ['Root().E1[0].PU1==null', 'true', '', 'E1|E1.PU1'],
        ['Root().E1[0].PU1', 'null', '', 'E1|E1.PU1'],
        ['Entity1[0]!=Entity1[0].Parent()', 'true', '', 'E1.Entity1|E1'],
        ['Entity1[0]!=Entity1[0]', 'false', '', 'E1.Entity1'],
        ['Entity1[0]&&Entity1[0].Parent()', 'undefined', 'object 和 object 无法做逻辑与运算'],
        ['Entity1[0]||Entity1[0].Parent()', 'undefined', 'object 无法做逻辑或运算的左运算数', '', 'object 和 object 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{Entity1[0]:Entity1[0].Parent()}', 'undefined', '] 后不允许出现 :'],
        ['{a:Entity1[0],b:Entity1[0].Parent(),c:Entity1[0].Parent()}', '{"a":' + cmpOE1Entity1_0 + ',"b":' + cmpOE1_0 + ',"c":' + cmpOE1_0 + '}', '', 'E1.Entity1|E1'],
        ['\'Entity1[0].Parent()\'', '"Entity1[0].Parent()"'],
        ['\'Entity1[0]&&Entity1[0].Parent()\'', '"Entity1[0]&&Entity1[0].Parent()"'],
        ['Entity1[0].ToString()', 'undefined', 'object 没有名称为 ToString 的方法或参数不匹配'],
        ['Entity1[0].Parent().ToString()', 'undefined', 'object 没有名称为 ToString 的方法或参数不匹配'],
        ['IfNull(Entity1[0])', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IfNull(Entity1[0].Parent())', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IIf(Entity1[0], Entity1[0].Parent())', 'undefined', '没有名称为 IIf 的方法或参数不匹配'],
        ['Entity1[0].Parent().Parent()', cmpORoot, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Root().E1[1].Entity1[0].Parent()', cmpOE1_1, '', 'E1|E1.Entity1'],
        ['Root().E1[0].Parent()', cmpORoot, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Root().E1[0].Parent().Parent().Parent()', cmpORoot, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Root().E1[0].Parent().E1', cmpAE1, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Root().E1[0].Parent().E1[0]', cmpOE1_0, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Parent().E2[0].Entity1[0].Parent()', cmpOE2, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Parent().E2[0].RecNo()', '0', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Parent().E2[0].Entity1[7].RecNo()', '7', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Parent().E2[0].Entity1.Where("RecNo()==3")[0].ID', '204', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['{"ID":101,"P1":30,"P2":12.95}.RecNo()', 'undefined', '只有实体对象才可以调用 RecNo 方法'], // TODO: 错误信息不一致
        ['Root().E1[RecNo()].P1', '"E1的第1条数据"', '', 'E1|E1.P1'],
        ['Entity1[0].Parent().RecNo()', '0', '', 'E1.Entity1|E1'],
    //
        ['Parent().E1[0].ID + Parent().E2[0].ID', '32', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E1[0].Entity1[2].ID', '103', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E2[0].Entity1[2].P2', '12.23', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E1[0].Entity1[2].ID + Parent().E2[0].Entity1[2].P2', '115.23', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E1[0].Entity1[2].ID - Parent().E2[0].Entity1[2].P2', '90.77', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E1[0].Entity1[2].ID * Parent().E2[0].Entity1[2].P2', '1259.69', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Parent().E1[0].Entity1[2].ID / Parent().E2[0].Entity1[2].P2', '8.421913327882256', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
    //子实体、实体，多条数据
        ['Root().E1', cmpAE1, '', 'E1'],
        ['Entity1', cmpAE1Entity1, '', 'E1.Entity1'],
        ['Root().E2', cmpAE2, '', 'E2'],
        ['Entity2[0].Parent().Parent().E2[0].Entity1', cmpAE2Entity1, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Root().E2', cmpAE2, '', 'E2'],
        ['!Root().E2', 'false', '', 'E2'],
        ['!!Root().E2', 'true', '', 'E2'],
        ['+Root().E2', 'undefined', 'array 无法做一元正数运算'],
        ['-Root().E2', 'undefined', 'array 无法做一元负数运算'],
        ['Entity2[0].Parent().Parent().E2[0].Entity1*Root().E2', 'undefined', 'array 和 array 无法做乘法运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1/Root().E2', 'undefined', 'array 和 array 无法做除法运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1%Root().E2', 'undefined', 'array 和 array 无法做余数运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Root().E2/Entity1', 'undefined', 'array 和 array 无法做除法运算'],
        ['Root().E2%Entity1', 'undefined', 'array 和 array 无法做余数运算'],
        ['Entity2[0].Parent().Parent().E2[0].Entity1+Root().E2', '[' + cmpOAE2Entity1 + ',' + cmpOE2 + ']', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1+Entity2[0].Parent().Parent().E2[0].Entity1', '[' + cmpOAE2Entity1 + ',' + cmpOAE2Entity1 + ']', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1-Root().E2', cmpAE2Entity1, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1-Entity2[0].Parent().Parent().E2[0].Entity1', '[]', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1-[{"ID":202,"P1":"E2[0].Entity1的第2条数据","P2":8.01},{"ID":203,"P1":"E2[0].Entity1的第3条数据","P2":12.23},{"ID":204,"P1":"E2[0].Entity1的第4条数据","P2":12.23},{"ID":205,"P1":"E2[0].Entity1的第5条数据","P2":12.23},{"ID":206,"P1":"E2[0].Entity1的第6条数据","P2":12.23},{"ID":207,"P1":"E2[0].Entity1的第7条数据","P2":12.23}]', '[{"ID":201,"P1":"E2[0].Entity1的第1条数据","P2":12.23},{"ID":208,"P1":"E2[0].Entity1的第8条数据","P2":12.23}]', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1>Root().E2', 'undefined', 'array 和 array 无法做大于运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1>=Root().E2', 'undefined', 'array 和 array 无法做大于等于运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1<Root().E2', 'undefined', 'array 和 array 无法做小于运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1<=Root().E2', 'undefined', 'array 和 array 无法做小于等于运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1==Root().E2', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1==Entity2[0].Parent().Parent().E2[0].Entity1', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1!=Root().E2', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1!=Entity2[0].Parent().Parent().E2[0].Entity1', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1&&Root().E2', 'undefined', 'array 和 array 无法做逻辑与运算', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Entity2[0].Parent().Parent().E2[0].Entity1||Root().E2', 'undefined', 'array 无法做逻辑或运算的左运算数', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['{Entity2[0].Parent().Parent().E2[0].Entity1:Root().E2}', 'undefined', ': 前不允许表达式存在', '', ': 前不允许表达式存在'],
        ['{a:Entity2[0].Parent().Parent().E2[0].Entity1,b:Root().E2,c:Root().E2}', '{"a":' + cmpAE2Entity1 + ',"b":' + cmpAE2 + ',"c":' + cmpAE2 + '}', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['\'Root().E2\'', '"Root().E2"', ''],
        ['\'Entity2[0].Parent().Parent().E2[0].Entity1&&Root().E2\'', '"Entity2[0].Parent().Parent().E2[0].Entity1&&Root().E2"', ''],
        ['Entity2[0].Parent().Parent().E2[0].Entity1.ToString()', 'undefined', 'array 没有名称为 ToString 的方法或参数不匹配', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['Root().E2.ToString()', 'undefined', 'array 没有名称为 ToString 的方法或参数不匹配'],
        ['IfNull(null,Entity2[0].Parent().Parent().E2[0].Entity1)', cmpAE2Entity1, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['IfNull(Root().E2,Entity2[0].Parent().Parent().E2[0].Entity1)', cmpAE2, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['IIf(true,Entity2[0].Parent().Parent().E2[0].Entity1, Root().E2)', cmpAE2Entity1, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['IIf(false,Entity2[0].Parent().Parent().E2[0].Entity1, Root().E2)', cmpAE2, '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常],
        ['ID.Parent()', 'undefined', 'number 没有名称为 Parent 的方法或参数不匹配'],
        ['Entity1.Parent()', 'undefined', 'array 没有名称为 Parent 的方法或参数不匹配'],
        ['Entity1.Count()', '3', '', 'E1.Entity1'],
        ['Root().E1.Count("PN1")', 'undefined', 'array 没有名称为 Count 的方法或参数不匹配'],
        ['Entity1.Average("ID")', '102', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Entity1.Average("ID").ToString()', '"102"', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Entity1.Average("P2")', '2.283333333333333', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity1.Average("ID")+""', 'undefined', 'number 和 string 无法做加法运算', 'E1.Entity1|E1.Entity1.ID'], // TODO: 需要确认是否为运行时错误
        ['Entity1.Average("ID")+Entity1.Min("ID")', '203', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Root().E1.Average("P1")', 'undefined', 'string 和 number 无法做除法运算', 'E1|E1.P1'], // TODO: 需要确认是否为运行时错误
        ['Root().E1.Average("PN1")', '0', '', 'E1|E1.PN1'],
        ['Root().E1.Average("PU1")', '0', '', 'E1|E1.PU1'],
        ['Entity1.Sum("P1")', '"E1[0].Entity1第1条数据E1[0].Entity1第2条数据E1[0].Entity1第3条数据"', '', 'E1.Entity1|E1.Entity1.P1'],
        ['Root().E1.Sum("P1")', '"E1的第1条数据E1的第2条数据"', '', 'E1|E1.P1'],
        ['Root().E1.Sum("PN1")', 'null', '', 'E1|E1.PN1'],
        ['Root().E1.Sum("PU1")', 'null', '', 'E1|E1.PU1'],
        ['Root().E1[0].Entity1.Sum()', 'undefined', 'object 和 object 无法做加法运算', 'E1|E1.Entity1'], // TODO: 需要确认是否为运行时错误
        ['Entity1.Sum("P2")', '6.85', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity2.Sum("P2")', '20.24', '', 'E1.Entity2|E1.Entity2.P2'],
        ['Entity2.Sum("ID")', '403', '', 'E1.Entity2|E1.Entity2.ID'],
        ['Entity1.Sum("ID")', '306', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Root().E1.Sum("Entity1[0].Parent().ID")', '23', '', 'E1|E1.Entity1|E1.ID'],
        ['Entity1.Max("ID")', '103', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Entity1.Max("$0.ID")', '103', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Entity1.Max()', 'undefined', 'object 和 object 无法做大于运算', 'E1.Entity1'], // TODO: 需要确认是否为运行时错误
        ['Entity1.Min("Parent().Parent().E1[0].Entity1[2].ID + Parent().Parent().E2[0].Entity1[2].P2")', '115.23', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['Entity1.Min("ID + P1")', 'undefined', 'number 和 string 无法做加法运算', 'E1.Entity1|E1.Entity1.ID|E1.Entity1.P1'], // TODO: 需要确认是否为运行时错误
        ['Entity1.Min("ID + Root().E2[0].Entity1[0].P2")', '113.23', '', 'E1.Entity1|E1.Entity1.ID|E2|E2.Entity1|E2.Entity1.P2'],
        ['Entity1.Min("Root().E1[0].Entity1[2].ID")', '103', '', 'E1.Entity1|E1|E1.Entity1.ID'],
        ['Entity1.Min("ID")', '101', '', 'E1.Entity1|E1.Entity1.ID'],
        ['Entity1.Min()', 'undefined', 'object 和 object 无法做小于运算', 'E1.Entity1'], // TODO: 需要确认是否为运行时错误
        ['Entity1.Where()', 'undefined', 'array 没有名称为 Where 的方法或参数不匹配', '', 'array 没有名称为 Where 的方法或参数不匹配'],
        ['Entity1.Where("ID")', cmpAE1Entity1, '', 'E1.Entity1.ID|E1.Entity1'],
        ['Root().E1[1].Entity1.Where("ID!=102")[0].Parent()', cmpOE1_1, '', 'E1|E1.Entity1.ID|E1.Entity1'],
        ['Root().E1[1].Entity1.Distinct()[0].Parent()', cmpOE1_1, '', 'E1|E1.Entity1'],
        ['Entity1.Where("ID>102")', '[{"ID":103,"P1":"E1[0].Entity1第3条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}]', '', 'E1.Entity1.ID|E1.Entity1'],
        ['Entity1.Distinct("P2")', '[{"ID":101,"P1":"E1[0].Entity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null,"NewEntity1":[{"ID":101,"P1":"E1[0].Entity1[1].NewEntity1第1条数据","P2":1.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":102,"P1":"E1[0].Entity1[1].NewEntity1第2条数据","P2":2.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null},{"ID":103,"P1":"E1[0].Entity1[1].NewEntity1第3条数据","P2":3.95,"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"P4":[1,2,{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}],"P5":"' + datetime2 + '","P6":true,"PN1":null,"PN2":null,"PN3":null,"PN4":null,"PN5":null,"PN6":null}]}]', '', 'E1.Entity1.P2|E1.Entity1'],
        ['Entity1.Count()+Entity1.Average("ID").ToString()+Entity1.Sum("P1")+Entity1.Max("ID").ToString()+Entity1.Min("ID").ToString()', 'undefined', 'number 和 string 无法做加法运算', 'E1.Entity1|E1.Entity1.ID|E1.Entity1.P1'], //: 需要确认是否为运行时错误
        ['PropValue(P3, "alias")', '{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}', '', 'E1.P3'],
        ['PropValue([{name:1},{name:2}], "name", "|")', '"1|2"']
    ]
};
var exprOperator = {
    title: "Operator",
    exprs: [
        ['-(2-1)', '-1'],
        ['1*(-(2-1))', '-1'],
        ['1/(+(2-1))', '1'],
        ['1--(2-1)', '2'],
        ['-1--(2-1)', '0'],
        ['1-+(2-1)', '0'],
        ['1>2', 'false'],
        ['1<2', 'true'],
        ['-1>=-2', 'true'],
        ['-1<=-2', 'false'],
        ['1*(-(2-1))>-(1--(2-1))', 'true'],
        ['1/(+(2-1))<1--(2-1)', 'true'],
        ['1*(-(2-1))<=-(1--(2-1))', 'false'],
        ['1/(+(2-1))>=1--(2-1)', 'false'],
        ['-1+1*(-(2-1))!=-(1--(2-1))', 'false'],
        ['1/(+(2-1))==1--(2-1)', 'false'],

        ['-1+1*(-(2-1))!=-1--(2-1)', 'true'],
        ['1+1/(+(2-1))<=1-2-1', 'false'],
        ['+(1+1/(+(2-1))<=1-2-1)', 'undefined', 'boolean 无法做一元正数运算'],
        ['-(1+1/(+(2-1))<=1-2-1)', 'undefined', 'boolean 无法做一元负数运算'],
		['!(1+1/(+(2-1))<=1-2-1)', 'true'],
        ['!!(1+1/(+(2-1))<=1-2-1)', 'false'],
        ['-1+1*(-(2-1))!=-1--(2-1)*1+1/(+(2-1))<=1-2-1', 'undefined', 'number 和 boolean 无法做不等运算'],
        ['-1+1*(-(2-1))!=-1--(2-1)==(1+1/(+(2-1))<=1-2-1)', 'false'],
        ['-1+1*(-(2-1))!=-1--(2-1)==(-1+1*(-(2-1))!=-1--(2-1))', 'true'],
        ['-1+1*(-(2-1))!=-1--(2-1)!=(1+1/(+(2-1))<=1-2-1)', 'true'],
        ['1+1/(+(2-1))<=1-2-1!=(1+1/(+(2-1))<=1-2-1)', 'false'],
        ['-1+1*(-(2-1))!=-1--(2-1)&&1+1/(+(2-1))<=1-2-1', 'false'],
        ['-1+1*(-(2-1))!=-1--(2-1)&&-1+1*(-(2-1))!=-1--(2-1)', 'true'],
        ['1+1/(+(2-1))<=1-2-1&&1+1/(+(2-1))<=1-2-1', 'false'],
        ['-1+1*(-(2-1))!=-1--(2-1)||1+1/(+(2-1))<=1-2-1', 'true'],
        ['-1+1*(-(2-1))!=-1--(2-1)|| -1+1*(-(2-1))!=-1--(2-1)', 'true'],
        ['1+1/(+(2-1))<=1-2-1 || 1+1/(+(2-1))<=1-2-1', 'false'],
        ['[-1+1*(-(2-1))!=-1--(2-1),1+1/(+(2-1))<=1-2-1]', '[true,false]'],
        ['{(-1+1*(-(2-1))!=-1--(2-1)):(1+1/(+(2-1))<=1-2-1)}', 'undefined', '{ 后不允许出现 ('],
        ['{a:(-1+1*(-(2-1))!=-1--(2-1)),b:(1+1/(+(2-1))<=1-2-1)}', '{"a":true,"b":false}'],
        ['{a:-1+1*(-(2-1))!=-1--(2-1),b:1+1/(+(2-1))<=1-2-1,c:1+1/(+(2-1))<=1-2-1}', '{"a":true,"b":false,"c":false}'],
        ['\'(1+1/(+(2-1))<=1-2-1)\'', '"(1+1/(+(2-1))<=1-2-1)"'],
        ['\'(-1+1*(-(2-1))!=-1--(2-1))&&(1+1/(+(2-1))<=1-2-1)\'', '"(-1+1*(-(2-1))!=-1--(2-1))&&(1+1/(+(2-1))<=1-2-1)"'],
        ['(-1+1*(-(2-1))!=-1--(2-1)).ToString()', '"true"'],

        ['1+1', '2'],
        ['1-1', '0'],
        ['1*1', '1'],
        ['1/1', '1'],
        ['1%1', '0'],
        ['1.1+1.2', '2.3'],
        ['1.2-1.2', '0'],
        ['1.1*1.1', '1.21'],
        ['1.1/2.1', '0.5238095238095238'],
        ['1.1%1.2', '1.1'],
        ['"1" + 1', 'undefined', 'string 和 number 无法做加法运算'],
        ['[1,2] + [1,3]', '[1,2,1,3]'],
        ['[1,2] + []', '[1,2]'],
        ['[1,2] - [1,3]', '[2]'],
        ['[1,2,3] - ["1",3]', '[1,2]'],
        ['[1,2,3] + ["1",3]', '[1,2,3,"1",3]'],
        ['"asdf" + "d"', '"asdfd"'],
        ['-1*-2.2', '2.2'],
        ['1*-(2-1)', '-1'],
    //符号使用异常
        ['1**(2-1)', 'undefined', '* 后不允许出现 *'],
        ['-123<0<123', 'undefined', 'boolean 和 number 无法做小于运算'],
        ['[a:1,b:"2",c:true,e:{a:[4,5,6],b:null}]', 'undefined', '数组中不允许使用 : 操作符'],
        ['true\'false', 'undefined', '\'false 引号不匹配'],
        ['P6\'Root().E2[0].P6', 'undefined', '\'Root().E2[0].P6 引号不匹配'],
        ['P6\'Root().E2[0].P6\'', 'undefined', 'P6 后不允许出现 \'Root().E2[0].P6\''],
        ['P6+\'Root().E2[0].P6', 'undefined', '\'Root().E2[0].P6 引号不匹配'],
        ['P6+\'Root().E2[0].P6\'', 'undefined', 'boolean 和 string 无法做加法运算'],
        ['\'Root().E2[0].P6\'+P6', 'undefined', 'string 和 boolean 无法做加法运算'],
        ['123+\'Root().E2[0].P6', 'undefined', '\'Root().E2[0].P6 引号不匹配'],
        ['123+\'Root().E2[0].P6\'', 'undefined', 'number 和 string 无法做加法运算'],
        ['P6.ToString()+\'Root().E2[0].P6\'', '"trueRoot().E2[0].P6"', '', 'E1.P6'],
        ['\'P6.ToString()\'+\'Root().E2[0].P6', 'undefined', '\'Root().E2[0].P6 引号不匹配'],
        ['true&false', 'undefined', '无法识别 &'],
        ['true|false', 'undefined', '无法识别 |'],
        ['\'false', 'undefined', '\'false 引号不匹配'],
        ['(2', 'undefined', '( 不匹配'],
        ['[2', 'undefined', '[ 不匹配'],
        ['{2', 'undefined', '{ 不匹配'],
        ['"2', 'undefined', '"2 引号不匹配'],
        ['\'true:~!@#$%^&*()_+{}:"|<>?/.,\\][=-false\'', '"true:~!@#$%^&*()_+{}:\\"|<>?/.,][=-false"'],
        ['\'true\\\'false\'', '"true\'false"'],
        ['\'true\'false\'', 'undefined', '\'true\' 后不允许出现 false'],
        ['\'true\'+123+\'false\'', 'undefined', 'string 和 number 无法做加法运算'],
        ['\'P6:Root().E2[0].P6', 'undefined', '\'P6:Root().E2[0].P6 引号不匹配'],
        ['true:false', 'undefined', ': 操作符必须存在于{}中'],
        ['true:false:false', 'undefined', ': 操作符必须存在于{}中'],
        ['P6:Root().E2[0].P6', 'undefined', ': 操作符必须存在于{}中'],
        ['true,false', 'undefined', ', 操作符必须存在于{}、[]、()中'],
    ]
};
var exprString = {
    title: "String",
    exprs: [
        ['"123"', '"123"'],
        ['"ab\u5230ee\x35re\155t"', '"ab到ee5remt"'],
        ['"ab\\u52n0ee\x35re\155t"', 'undefined', '\\u52n0 不是合法的unicode字符'],
        ['"1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'"', '"1a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-false\'"'],
        ['+"123"', 'undefined', 'string 无法做一元正数运算'],
        ['-"123"', 'undefined', 'string 无法做一元负数运算'],
        ['!"123"', 'false'],
        ['!!"123"', 'true'],
        ['"123"*"123"', 'undefined', 'string 和 string 无法做乘法运算'],
        ['"123"/"123"', 'undefined', 'string 和 string 无法做除法运算'],
        ['"123"%"123"', 'undefined', 'string 和 string 无法做余数运算'],
        ['"123"/"123"', 'undefined', 'string 和 string 无法做除法运算'],
        ['"123"%"123"', 'undefined', 'string 和 string 无法做余数运算'],
        ['"123"+"123"+"1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'"', '"1231231a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-false\'"'],
        ['"123"+"123"', '"123123"'],
        ['0+"00"+0+"00"+0', 'undefined', 'number 和 string 无法做加法运算'],
        ['null+"00"+null+"00"+null', '"0000"'],
        ['"123"-"123"', 'undefined', 'string 和 string 无法做减法运算'],
        ['"123">"123"', 'false'],
        ['"123">="123"', 'true'],
        ['"123"<"123"', 'false'],
        ['"123"<="123"', 'true'],
        ['"123">"1234"', 'false'],
        ['"123"<"1234"', 'true'],
        ['"123"=="1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'"', 'false'],
        ['"123"=="123"', 'true'],
        ['"123"==123', 'undefined', 'string 和 number 无法做相等运算'],
        ['"123"!="1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'"', 'true'],
        ['"123"!="123"', 'false'],
        ['"123"&&"123"', 'undefined', 'string 和 string 无法做逻辑与运算'],
        ['"123"||"123"', 'undefined', 'string 无法做逻辑或运算的左运算数', '', 'string 和 string 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{"123":"123"}', '{"123":"123"}'],
        ['{a:"123",b:"123",c:"1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'"}', '{"a":"123","b":"123","c":"1a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-false\'"}'],
        ['\'"123"\'', '"\\"123\\""'],
        ['"123".ToString()', '"123"'],
        ['IfNull(null,"123")', '"123"'],
        ['IfNull("1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'","123")', '"1a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-false\'"'],
        ['IIf(true,"1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-false\'", "123")', '"1a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-false\'"'],
        ['IIf(false,"123", "123")', '"123"'],
        ['"123".ToNumber()', '123'],
        ['"00123".ToNumber()', '123'],
        ['"0.123".ToNumber()', '0.123'],
        ['"123.0.123".ToNumber()', 'undefined', '"123.0.123" 无法被转换为数字'],
        ['"123.".ToNumber()', '123'],
        ['".123".ToNumber()', '0.123'],
        ['"123,123".ToNumber()', 'undefined', '"123,123" 无法被转换为数字'],
        ['"123/123".ToNumber()', 'undefined', '"123/123" 无法被转换为数字'],
        ['"123/".ToNumber()', 'undefined', '"123/" 无法被转换为数字'],
        ['"123 ".ToNumber()', '123'],
        ['"12 3 ".ToNumber()', 'undefined', '"12 3 " 无法被转换为数字'],
        ['"123asdf".ToNumber()', 'undefined', '"123asdf" 无法被转换为数字'],
        ['"asdf".Length()', '4'],
        ['"1a和".Length()', '3'],
        ['" \\" \' ".Length()', '5'],
        ['"~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-\'".Length()', '29'],
        ['" as DF ".Upper()', '" AS DF "'],
        ['" as DF 1a和~!@#$%^&*()_+{}:\\"|<>?/.,\\][=-\'".Lower()', '" as df 1a和~!@#$%^&*()_+{}:\\"|<>?/.,][=-\'"'],
        ['" as df ".Trim()', '"as df"'],
        ['"asdf".Trim()', '"asdf"'],
        ['" as df ".TrimLeft()', '"as df "'],
        ['" as df ".TrimRight()', '" as df"'],
        ['" as df ".Pos("s")', '2'], //从0开始
        ['" as df ".Pos("p")', '-1'],
        ['"asdf ".SubString(0,1)', '"a"'],
        ['" as df ".SubString(1,3)', '"as "'],
        ['"asdf".SubString(1,0)', '""'],
        ['"asdf".SubString(1,-1)', '""'],
        ['"asdf".SubString(-1,-1)', '""'],
        ['"asdf".SubString(-1,0)', '""'],
        ['"asdf".SubString(0,-1)', '""'],
        ['"asdf".SubString(1,5)', '"sdf"'],
        ['"asdf".SubString(5,1)', '""'],
        ['"asdf".SubString(-1,3)', '"f"'], //ie8为"asd"，ie9为"f"
        ['" as df ".Trim().SubString(1,2)', '"s "'],
        ['" as df ".LeftString(3)', '" as"'],
        ['"asdf".LeftString(-3)', '""'],
        ['"asdf".LeftString(5)', '"asdf"'],
        ['" as df ".RightString(1)', '" "'],
        ['"asdf".RightString(-3)', '""'],
        ['"asdf".RightString(5)', '"asdf"'],
    //实体
        ['P1', '"E1的第1条数据"', '', 'E1.P1'],
        ['Parent().E2[0].P1', '"E2的第1条数据"', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['+P1', 'undefined', 'string 无法做一元正数运算'],
        ['-P1', 'undefined', 'string 无法做一元负数运算'],
        ['!P1', 'false', '', 'E1.P1'],
        ['!!P1', 'true', '', 'E1.P1'],
        ['P1*P1', 'undefined', 'string 和 string 无法做乘法运算'],
        ['P1/P1', 'undefined', 'string 和 string 无法做除法运算'],
        ['P1%P1', 'undefined', 'string 和 string 无法做余数运算'],
        ['P1/P1', 'undefined', 'string 和 string 无法做除法运算'],
        ['P1+P1+Parent().E2[0].P1', '"E1的第1条数据E1的第1条数据E2的第1条数据"', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P1+"P1"', '"E1的第1条数据P1"', '', 'E1.P1'],
        ['P1-P1', 'undefined', 'string 和 string 无法做减法运算'],
        ['P1>P1', 'false', '', 'E1.P1'],
        ['P1>=P1', 'true', '', 'E1.P1'],
        ['P1<P1', 'false', '', 'E1.P1'],
        ['P1<=P1', 'true', '', 'E1.P1'],
        ['P1>"1234"', 'true', '', 'E1.P1'],
        ['P1<"1234"', 'false', '', 'E1.P1'],
        ['P1==Parent().E2[0].P1', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P1==P1', 'true', '', 'E1.P1'],
        ['P1!=Parent().E2[0].P1', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P1!=P1', 'false', '', 'E1.P1'],
        ['P1&&P1', 'undefined', 'string 和 string 无法做逻辑与运算'],
        ['P1||P1', 'undefined', 'string 无法做逻辑或运算的左运算数', '', 'string 和 string 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{P1:P1}', '{"P1":"E1的第1条数据"}', '', 'E1.P1'],
        ['{a:P1,b:P1,c:Parent().E2[0].P1}', '{"a":"E1的第1条数据","b":"E1的第1条数据","c":"E2的第1条数据"}', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['\'P1\'', '"P1"'],
        ['P1.ToString()', '"E1的第1条数据"', '', 'E1.P1'],
        ['Root().E1.Sum("PU1").ToString()', 'undefined', 'null 不能调用 ToString 方法', 'E1|E1.PU1'], // TODO: 需要确认是否为运行时错误
        ['IfNull(null,P1)', '"E1的第1条数据"', '', 'E1.P1'],
        ['IfNull(Parent().E2[0].P1,P1)', '"E2的第1条数据"', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['IIf(true,Parent().E2[0].P1, P1)', '"E2的第1条数据"', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['IIf(false,P1, P1)', '"E1的第1条数据"', '', 'E1.P1'],
        ['P1.ToNumber()', 'undefined', '"E1的第1条数据" 无法被转换为数字', 'E1.P1'], // TODO: 需要确认是否为运行时错误
        ['P5.ToNumber()', 'undefined', 'date 没有名称为 ToNumber 的方法或参数不匹配'],
        ['P1.Length()', '8', '', 'E1.P1'],
        ['P1.Upper()', '"E1的第1条数据"', '', 'E1.P1'],
        ['P1.Lower()', '"e1的第1条数据"', '', 'E1.P1'],
        ['P1.Trim()', '"E1的第1条数据"', '', 'E1.P1'],
        ['P1.TrimLeft()', '"E1的第1条数据"', '', 'E1.P1'],
        ['P1.TrimRight()', '"E1的第1条数据"', '', 'E1.P1'],
        ['P1.Pos("s")', '-1', '', 'E1.P1'],
        ['P1.Pos("1")', '1', '', 'E1.P1'],
        ['P1.SubString(1,2)', '"1的"', '', 'E1.P1'],
        ['P1.SubString(1,0)', '""', '', 'E1.P1'],
        ['P1.SubString(1,-1)', '""', '', 'E1.P1'],
        ['P1.SubString(3,10)', '"第1条数据"', '', 'E1.P1'],
        ['P1.SubString(10,3)', '""', '', 'E1.P1'],
        ['P1.SubString(-1,3)', '"据"', '', 'E1.P1'],
        ['P1.LeftString(3)', '"E1的"', '', 'E1.P1'],
        ['P1.RightString(1)', '"据"', '', 'E1.P1'],
        ['"a\\\\d+kka\\\\D+kka\\\\d+".Replace("a\\\\d+","m")', '"mkka\\\\D+kkm"'], // 字符串替换，默认：全部替换，区分大小写
        ['"a\\\\d+kka\\\\D+kka\\\\d+".Replace("a\\\\d+","m","gi")', '"mkkmkkm"'], // 字符串替换，全部替换，不区分大小写
        ['"a\\\\d+kka\\\\D+kka\\\\d+".Replace("a\\\\D+", "m", "i")', '"mkka\\\\D+kka\\\\d+"'], // 字符串替换，只替换第一个，不区分大小写
        ['"a\\\\d+kka\\\\D+kka\\\\d+".Replace("a\\\\D+","m","")', '"a\\\\d+kkmkka\\\\d+"'], // 字符串替换，只替换第一个，区分大小写

        ['"a\\\\d+kA12ka86".ReplaceReg("a\\\\d+","m")', '"a\\\\d+kA12km"'], // 正则替换：全部替换，区分大小写
        ['"a\\\\d+kA12ka86".ReplaceReg("a\\\\d+","m","gi")', '"a\\\\d+kmkm"'], // 正则替换：全部替换，不区分大小写
        ['"a\\\\d+kA12ka86".ReplaceReg("a\\\\d+", "m", "i")', '"a\\\\d+kmka86"'], // 正则替换：只替换第一个，不区分大小写
        ['"a\\\\d+kA12ka86".ReplaceReg("a\\\\d+", "m", "")', '"a\\\\\d+kA12km"'], // 正则替换：只替换第一个，区分大小写
        ['"\\n\\t\\f\\b\\r\\u5230\\111\\xae"', '"\\n\\t\\f\\b\\r到I®"'],
        ['"\\1"', 'undefined', '\\1" 不是合法的八进制数'],
        ['"\\0"', 'undefined', '\\0" 不是合法的八进制数'],
        ['"\\x1"', 'undefined', '\\x1" 不是合法的十六进制数']
    ]
};
var exprNumber = {
    title: "Number",
    exprs: [
        ['123.499', '123.499'],
        ['0', '0'],
        ['123.', 'undefined', '. 无法作为表达式的结尾'],
        ['.123', 'undefined', '. 无法作为表达式的开头'],
        ['+123.499', '123.499'],
        ['-123.499', '-123.499'],
        ['-0', '0'],
        ['!123.499', 'false'],
        ['!!123.499', 'true'],
        ['123.499*123.499', '15252.003001'],
        ['123.499/123.499', '1'],
        ['123.499%123.499', '0'],
        ['0/123.499', '0'],
        ['1%123.499', '1'],
        ['123.499/0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['123.499%0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['123.499+123.499+0', '246.998'],
        ['123.499+123.499499', '246.998499'],
        ['123.499-123.499', '0'],
        ['123.499-123.498', '0.001'],
        ['123.498-123.499', '-0.001'],
        ['123.499>123.499', 'false'],
        ['123.4999>123.499', 'true'],
        ['123.499>=123.499', 'true'],
        ['123.499<123.499', 'false'],
        ['123.499<=123.499', 'true'],
        ['123.499>1234', 'false'],
        ['123.499<1234', 'true'],
        ['123.499==0', 'false'],
        ['123.499==123.499', 'true'],
        ['123.499!=0', 'true'],
        ['123.499!=123.499', 'false'],
        ['123.499&&123.499', 'undefined', 'number 和 number 无法做逻辑与运算'],
        ['123.499||123.499', 'undefined', 'number 无法做逻辑或运算的左运算数', '', 'number 和 number 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['[123.499,123.499,0]', '[123.499,123.499,0]'],
        ['{123.499:123.499}', '{"123.499":123.499}'],
        ['{a:123.499,b:123.499,c:0}', '{"a":123.499,"b":123.499,"c":0}'],
        ['\'123.499\'', '"123.499"'],
        ['123.499.ToString()', '"123.499"'],
        ['IfNull(null,123.499)', '123.499'],
        ['IfNull(0,123.499)', '0'],
        ['IIf(true,0, 123.499)', '0'],
        ['IIf(false,0, 123.499)', '123.499'],

        ['(1,2,3)', 'undefined', '() 在不是函数参数列表时不允许出现","分隔符'],
        ['(-123.499)*123.499', '-15252.003001'],
        ['(-123.499)/(-123.499)', '1'],
        ['(-123)%123.499', '-123'],
        ['0/(-123.499)', '0'],
        ['1%(-123.499)', '1'],
        ['(-123.499)/0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['(-123.499)%0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['(-123.499)+(-123.499)+0', '-246.998'],
        ['(-123.499)+123.499499', '0.000499'],
        ['(-123.499)-(-123.499)', '0'],
        ['(-123.499)-123.498', '-246.997'],
        ['123.498-(-123.499)', '246.997'],
        ['0>-123.499', 'true'],
        ['123.499>(-123.499)', 'true'],
        ['(-123.4999)>(-123.499)', 'false'],
        ['(-123.499)>=(-123.499)', 'true'],
        ['(-123.499)<(-123.499)', 'false'],
        ['(-123.499)<=(-123.499)', 'true'],
        ['-123.499<0', 'true'],
        ['(-123.499)>123', 'false'],
        ['(-123.499)<123', 'true'],
        ['(-123.499)==0', 'false'],
        ['-123.499==-123.499', 'true'],
        ['(-123.499)!=123.499', 'true'],
        ['(-123.499)!=(-123.499)', 'false'],
        ['(-123.499)&&(-123.499)', 'undefined', 'number 和 number 无法做逻辑与运算'],
        ['(-123.499)||(-123.499)', 'undefined', 'number 无法做逻辑或运算的左运算数', '', 'number 和 number 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['[(-123.499),(-123.499),0]', '[-123.499,-123.499,0]'],
        ['[123.499,-123.499,0]', '[123.499,-123.499,0]'],
        ['{(-123.499):(-123.499)}', 'undefined', '{ 后不允许出现 ('],
        ['{3*(-123.499)*3:(-123.499)}', 'undefined', ': 前不允许表达式存在'],
        ['{a:-123.499,b:(-123.499),c:0}', '{"a":-123.499,"b":-123.499,"c":0}'],
        ['\'(-123.499)\'', '"(-123.499)"'],
        ['(-123.499).ToString()', '"-123.499"'],
        ['IfNull(null,(-123.499))', '-123.499'],
        ['IfNull(0,-123.499)', '0'],
        ['IIf(true,0, (-123.499))', '0'],
        ['IIf(false,0, -123.499)', '-123.499'],

        ['123.45.ToString()', '"123.45"'],
        ['12345.ToRMB()', '"壹万贰仟叁佰肆拾伍元整"'], //叁拼写错误
        ['678.9.ToRMB()', '"陆佰柒拾捌元玖角"'], //分后整可以不写
        ['912345.678.ToRMB()', '"玖拾壹万贰仟叁佰肆拾伍元陆角柒分捌厘"'],
        ['12345.6789.ToRMB()', '"壹万贰仟叁佰肆拾伍元陆角柒分捌厘玖"'], //取整？不取，直接显示
        ['(-12345).ToRMB()', '"负壹万贰仟叁佰肆拾伍元整"'], //叁拼写错误
        ['123.45.Abs()', '123.45'],
        ['0.Abs()', '0'],
        ['(-123.45).Abs()', '123.45'],
        ['123.Ceil()', '123'],
        ['123.45.Ceil()', '124'],
        ['(-123.45).Ceil()', '-123'],
        ['123.Floor()', '123'],
        ['123.45.Floor()', '123'],
        ['(-123.45).Floor()', '-124'],
        ['(60*3.1415926535898/180).Cos()', '0.49999999999999806'],
        ['0.Cos()', '1'],
        ['(30*3.1415926535898/180).Sin()', '0.500000000000001'],
        ['0.Sin()', '0'],
        ['(45*3.1415926535898/180).Tan()', '1.0000000000000033'],
        ['0.Tan()', '0'],
        ['123.45.Exp()', '4.10822093109669e+53'],
        ['1.Exp()', '2.718281828459045'],
        ['0.Exp()', '1'],
        ['123.45.Ln()', '4.8158362157911885'],
        ['2.Exp().Ln()', '2'],
        ['123.45.Sqrt()', '11.110805551354051'],
        ['4.Sqrt()', '2'],
        ['123.45.Log(2)', '6.947783026255419'],
        ['100.Log(10)', '2'],
        ['100.Log(1)', 'undefined', '无法做以 1 为底 100 的对数运算'], //
        ['100.Log(-10)', 'undefined', '无法做以 -10 为底 100 的对数运算'],
        ['123.45.Power(2)', '15239.9025'],
        ['2.Power(10)', '1024'],
        ['2.Power(1)', '2'],
        ['2.Power(0)', '1'],
        ['4.Power(0.5)', '2'],
        ['2.Power(-1)', '0.5'],
        ['123.45.Trunc(1)', '123.4'],
        ['123.01.Trunc(1)', '123'],
        ['(-123.45).Trunc(1)', '-123.4'],
        ['123.01.Trunc(2)', '123.01'],
        ['123.Trunc(1)', '123'], //
        ['123.Trunc(0)', '123'], //
        ['123.45.Trunc(0)', '123'],
        ['123.45.Trunc(-1)', 'undefined', '做截断运算时，保留小数位数不能为负数: -1'], //
        ['123.45.Trunc(3)', '123.45'],
        ['123.455.Round(2)', '123.46'],
        ['123.454.Round(2)', '123.45'],
        ['123.995.Round(2)', '124'],
        ['(-123.455).Round(2)', '-123.46'],
        ['123.995.Round(3)', '123.995'],
        ['123.Round(2)', '123'],
        ['123.555.Round(0)', '124'],
        ['123.Round(0)', '123'],
        ['123.555.Round(-1)', 'undefined', '做四舍五入运算时，保留小数位数不能为负数: -1'], //120?undefined
    //实体
        ['P2', '12345.678', '', 'E1.P2'],
        ['Entity1[0].P1', '"E1[0].Entity1第1条数据"', '', 'E1.Entity1|E1.Entity1.P1'],
        ['Entity1[0].P1.', 'undefined', '. 无法作为表达式的结尾'],
        ['Entity1[0].P1.456', 'undefined', '. 后不允许出现 456'],
        ['.Entity1[0].P1', 'undefined', '. 无法作为表达式的开头'],
        ['+P2', '12345.678', '', 'E1.P2'],
        ['-P2', '-12345.678', '', 'E1.P2'],
        ['!P2', 'false', '', 'E1.P2'],
        ['!!P2', 'true', '', 'E1.P2'],
        ['P2*P2', '152415765.279684', '', 'E1.P2'],
        ['P2/Entity1[0].P2', '6331.116923076923', '', 'E1.P2|E1.Entity1|E1.Entity1.P2'],
        ['P2%Entity1[0].P2', '0.228', '', 'E1.P2|E1.Entity1|E1.Entity1.P2'],
        ['0/P2', '0', '', 'E1.P2'],
        ['1%P2', '1', '', 'E1.P2'],
        ['P2/0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['P2%0', 'undefined', '0 不能作为除数使用', '', 'number 不能作为除数使用'], // TODO: 校验结构错误不合理
        ['P2+P2+0', '24691.356', '', 'E1.P2'],
        ['P2-P2', '0', '', 'E1.P2'],
        ['P2-Entity1[0].P2', '12343.728', '', 'E1.P2|E1.Entity1|E1.Entity1.P2'],
        ['Entity1[0].P2-P2', '-12343.728', '', 'E1.Entity1|E1.Entity1.P2|E1.P2'],
        ['P2>Parent().E2[0].P2', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2>=Parent().E2[0].P2', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2<Parent().E2[0].P2', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2<=Parent().E2[0].P2', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2>Entity1[0].P2', 'true', '', 'E1.P2|E1.Entity1|E1.Entity1.P2'],
        ['P2<Entity1[0].P2', 'false', '', 'E1.P2|E1.Entity1|E1.Entity1.P2'],
        ['P2==0', 'false', '', 'E1.P2'],
        ['P2==Parent().E2[0].P2', 'true', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2!=0', 'true', '', 'E1.P2'],
        ['P2!=Parent().E2[0].P2', 'false', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['P2&&P2', 'undefined', 'number 和 number 无法做逻辑与运算'],
        ['P2||P2', 'undefined', 'number 无法做逻辑或运算的左运算数', '', 'number 和 number 无法做逻辑或运算'],  // TODO: 错误信息不一致
        ['[P2,-P2,Parent().E2[0].P2,0]', '[12345.678,-12345.678,12345.678,0]', '', '', '根实体对象不能调用 Parent 方法'], // TODO: 检查出错，计算正常
        ['{P2:P2}', '{"P2":12345.678}', '', 'E1.P2'],
        ['{a:P2,b:P2,c:0}', '{"a":12345.678,"b":12345.678,"c":0}', '', 'E1.P2'],
        ['\'P2\'', '"P2"'],
        ['"P2".ToString()', '"P2"'],
        ['P2.ToString()', '"12345.678"', '', 'E1.P2'],
        ['IfNull(null,P2)', '12345.678', '', 'E1.P2'],
        ['IfNull(0,P2)', '0', '', 'E1.P2'],
        ['IIf(true,0, P2)', '0', '', 'E1.P2'],
        ['IIf(false,0, P2)', '12345.678', '', 'E1.P2'],

        ['Entity1[0].P1.45.ToString()', 'undefined', '. 后不允许出现 45'],
        ['Entity1[0].P2.ToRMB()', '"壹元玖角伍分"', '', 'E1.Entity1|E1.Entity1.P2'],
        ['P2.ToRMB()', '"壹万贰仟叁佰肆拾伍元陆角柒分捌厘"', '', 'E1.P2'],
        ['(-Entity1[0].P2).ToRMB()', '"负壹元玖角伍分"', '', 'E1.Entity1|E1.Entity1.P2'],
        ['P2.Abs()', '12345.678', '', 'E1.P2'],
        ['(-P2).Abs()', '12345.678', '', 'E1.P2'],
        ['P2.Ceil()', '12346', '', 'E1.P2'],
        ['(-P2).Ceil()', '-12345', '', 'E1.P2'],
        ['P2.Floor()', '12345', '', 'E1.P2'],
        ['(-P2).Floor()', '-12346', '', 'E1.P2'],
        ['Entity1[0].P2.Tan()-Entity1[0].P2.Sin()/Entity1[0].P2.Cos()<=-4.6276*10.Power(-11)', 'false', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity1[0].P2.Cos().Power(2)+Entity1[0].P2.Sin().Power(2)', '1', '', 'E1.Entity1|E1.Entity1.P2'],
        ['P2.Exp()', 'null', '', 'E1.P2'],

        ['Entity1[0].P2.Ln().Trunc(15)', '0.667829372575655', '', 'E1.Entity1|E1.Entity1.P2'],
        ['2.Exp().Ln()', '2'],
        ['Entity1[0].P2.Sqrt()', '1.396424004376894', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity1[0].P2.Log(2)', '0.963474123974886', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity1[0].P2.Power(2)', '3.8025', '', 'E1.Entity1|E1.Entity1.P2'],

        ['P2.Trunc(1)', '12345.6', '', 'E1.P2'],
        ['Entity1[0].P2.Trunc(1)', '1.9', '', 'E1.Entity1|E1.Entity1.P2'],
        ['(-P2).Trunc(1)', '-12345.6', '', 'E1.P2'],
        ['P2.Trunc(0)', '12345', '', 'E1.P2'], //
        ['Entity1[0].P2.Trunc(0)', '1', '', 'E1.Entity1|E1.Entity1.P2'],
        ['Entity1[0].P2.Trunc(-1)', 'undefined', '做截断运算时，保留小数位数不能为负数: -1', 'E1.Entity1|E1.Entity1.P2'], // TODO: 需要确认是否为运行时错误
        ['Entity1[0].P2.Trunc(3)', '1.95', '', 'E1.Entity1|E1.Entity1.P2'],
        ['P2.Round(2)', '12345.68', '', 'E1.P2'],
        ['Entity1[0].P2.Round(2)', '1.95', '', 'E1.Entity1|E1.Entity1.P2'],
        ['(-P2).Round(2)', '-12345.68', '', 'E1.P2'],
        ['P2.Round(3)', '12345.678', '', 'E1.P2'],
        ['P2.Round(0)', '12346', '', 'E1.P2'],
        ['Entity1[0].P2.Round(0)', '2', '', 'E1.Entity1|E1.Entity1.P2'],
        ['P2.Round(-1)', 'undefined', '做四舍五入运算时，保留小数位数不能为负数: -1', 'E1.P2'], // TODO: 需要确认是否为运行时错误
        ['0.ToRMB()', '"零元整"'],
        ['1000000000.0000000.ToRMB(false, false)', '"十亿"'],
        ['0.1.ToRMB(false, false)', '"零点一"'],
        ['0.1.ToRMB(true, false)', '"一角"'],
        ['0.1.ToRMB(true, true)', '"壹角"'],
        ['0.1.ToRMB(false, true)', '"零点壹"'],
        ['100002345.ToRMB()', '"壹亿零贰仟叁佰肆拾伍元整"'],
        ['123.ToRMB(false, false)', '"一百二十三"'],
        ['00002010.00100.ToRMB()', '"贰仟零壹拾元零壹厘"']
    ]
};
var exprDate = {
    title: "Date",
    exprs: [
        ['"2000-01-01 00:00:00".ToDate().MonthsBetween("2000-01-01 00:00:00".ToDate().IncMonth(1))', '1'],
        ['"2000-02-01 00:00:00".ToDate().MonthsBetween("2000-02-01 00:00:00".ToDate().IncMonth(1))', '1'],
        ['"1999-12-31".ToDate()', '"1999-12-31T00:00:00"'],
        ['"1999-12-32".ToDate()', 'undefined', '"1999-12-32" 无法被转换为数字'],
        ['"1999-99-31".ToDate()', 'undefined', '"1999-99-31" 无法被转换为数字'],
        ['"12".ToDate("H")', '"' + year + '-' + mon2 + '-' + date2 + 'T12:00:00"'],
        ['"1999-12-31".ToDate().', 'undefined', '. 无法作为表达式的结尾'],
        ['."1999-12-31".ToDate()', 'undefined', '. 无法作为表达式的开头'],
        ['+"1999-12-31".ToDate()', 'undefined', 'date 无法做一元正数运算'],
        ['-"1999-12-31".ToDate()', 'undefined', 'date 无法做一元负数运算'],
        ['!"1999-12-31".ToDate()', 'false'],
        ['!!"1999-12-31".ToDate()', 'true'],
        ['"1999-12-31".ToDate()*"1999-12-31".ToDate()', 'undefined', 'date 和 date 无法做乘法运算'],
        ['"1999-12-31".ToDate()/"1999-12-31".ToDate()', 'undefined', 'date 和 date 无法做除法运算'],
        ['"1999-12-31".ToDate()%"1999-12-31".ToDate()', 'undefined', 'date 和 date 无法做余数运算'],
        ['"1999-12-31".ToDate()*1', 'undefined', 'date 和 number 无法做乘法运算'],
        ['"1999-12-31".ToDate()/1', 'undefined', 'date 和 number 无法做除法运算'],
        ['"1999-12-31".ToDate()%1', 'undefined', 'date 和 number 无法做余数运算'],
        ['"1999-12-31".ToDate()+"1999-12-31".ToDate()+0', 'undefined', 'date 和 date 无法做加法运算'],
        ['"1999-12-31".ToDate()+3', 'undefined', 'date 和 number 无法做加法运算'],
        ['"1999-12-31".ToDate()-"1999-12-31".ToDate()', 'undefined', 'date 和 date 无法做减法运算'],
        ['"1999-12-31".ToDate()-3', 'undefined', 'date 和 number 无法做减法运算'],
        ['"1999-12-31".ToDate()>"1999-12-31".ToDate()', 'false'],
        ['"1999-12-31".ToDate()>"1999-12-30".ToDate()', 'true'],
        ['"1999-12-31".ToDate()>="1999-12-31".ToDate()', 'true'],
        ['"1999-12-31".ToDate()<"1999-12-31".ToDate()', 'false'],
        ['"1999-12-31".ToDate()<="1999-12-31".ToDate()', 'true'],
        ['"1999-12-31".ToDate()>1234', 'undefined', 'date 和 number 无法做大于运算'],
        ['"1999-12-31".ToDate()<1234', 'undefined', 'date 和 number 无法做小于运算'],
        ['"1999-12-31".ToDate()==0', 'undefined', 'date 和 number 无法做相等运算'],
        ['"1999-12-31".ToDate()=="1999-12-31".ToDate()', 'true'],
        ['"1999-12-31".ToDate()!=0', 'undefined', 'date 和 number 无法做不等运算'],
        ['"1999-12-31".ToDate()!="1999-12-31".ToDate()', 'false'],
        ['"1999-12-31".ToDate()&&"1999-12-31".ToDate()', 'undefined', 'date 和 date 无法做逻辑与运算'],
        ['"1999-12-31".ToDate()||"1999-12-31".ToDate()', 'undefined', 'date 无法做逻辑或运算的左运算数', '', 'date 和 date 无法做逻辑或运算'],
        ['["1999-12-31".ToDate(),"1999-12-31".ToDate(),0]', '["1999-12-31T00:00:00","1999-12-31T00:00:00",0]'],
        ['{"1999-12-31".ToDate():"1999-12-31".ToDate()}', 'undefined', ') 后不允许出现 :'],
        ['{a:"1999-12-31".ToDate(),b:"1999-12-31".ToDate(),c:0}', '{"a":"1999-12-31T00:00:00","b":"1999-12-31T00:00:00","c":0}'],
        ['\'"1999-12-31".ToDate()\'', '"\\"1999-12-31\\".ToDate()"'],
        ['"1999-12-31".ToDate().ToString()', '"' + d2 + '"'],
        ['"1999-12-31".ToDate().ToString("")', '"' + d2 + '"'],
        ['IfNull(null,"1999-12-31".ToDate())', '"1999-12-31T00:00:00"'],
        ['IfNull("12".ToDate("D"),"1999-12-31".ToDate())', '"' + year + '-' + mon2 + '-12T00:00:00"'],
        ['IIf(true,"12".ToDate("D"), "1999-12-31".ToDate())', '"' + year + '-' + mon2 + '-12T00:00:00"'],
        ['IIf(false,"12".ToDate("D"), "1999-12-31".ToDate())', '"1999-12-31T00:00:00"'],


        ['"1999-12-31 12:59:59".ToDate().DateOf()', '"1999-12-31T00:00:00"'],

        ['"1999-12-31 12:59:59".ToDate().IncDay(1)', '"2000-01-01T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncHour(24)', '"2000-01-01T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncHour(0.5)', '"1999-12-31T13:29:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncHour(0)', '"1999-12-31T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncHour(-1)', '"1999-12-31T11:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncHour(-24)', '"1999-12-30T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncMinute(1)', '"1999-12-31T13:00:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncSecond(60)', '"1999-12-31T13:00:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncWeek(1)', '"2000-01-07T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncMonth(1)', '"2000-01-31T12:59:59"'],
        ['"1999-01-01 00:00:00".ToDate().IncMonth(1)', '"1999-02-01T00:00:00"'],
        ['"1999-02-01 00:00:00".ToDate().IncMonth(1)', '"1999-03-01T00:00:00"'],
        ['"1999-12-31 12:59:59".ToDate().IncYear(1)', '"2000-12-31T12:59:59"'],
        ['"1999-01-01 00:00:00".ToDate().IncYear(1)', '"2000-01-01T00:00:00"'],
        ['"2000-01-01 00:00:00".ToDate().IncYear(1)', '"2001-01-01T00:00:00"'],
        ['"2000-02-29 00:00:00".ToDate().IncYear(1)', '"2001-02-28T00:00:00"'],
        ['"1999-12-31 12:59:59".ToDate().IncDay(0.5)', '"2000-01-01T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncMinute(0.5)', '"1999-12-31T13:00:29"'],
        ['"1999-12-31 12:59:59".ToDate().IncSecond(0.5)', '"1999-12-31T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncWeek(0.5)', '"2000-01-04T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncMonth(0.5)', '"2000-01-31T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().IncYear(0.5)', '"2000-06-30T12:59:59"'],
        ['"1999-12-31 12:59:59".ToDate().DayOf()', '31'],
        ['"1999-12-31 12:59:59".ToDate().DayOfWeek()', '5'],
        ['"1999-12-31 12:59:59".ToDate().HourOf()', '12'],
        ['"1999-12-31 12:59:59".ToDate().MilliSecondOf()', '0'],
        ['"1999-12-31 12:59:59".ToDate().MinuteOf()', '59'],
        ['"1999-12-31 12:59:59".ToDate().MonthOf()', '12'],
        ['"1999-12-31 12:59:59".ToDate().SecondOf()', '59'],
        ['"1999-12-31 12:59:59".ToDate().WeekOf()', '1'],
        ['"2000-01-01 12:59:59".ToDate().WeekOf()', '1'],
        ['"1999-12-31 12:59:59".ToDate().YearOf()', '1999'],
        ['Now().DaysBetween(Now().IncDay(5))', '5'],
        ['"1999-12-31 12:59:59".ToDate().DaysBetween("1999-12-31 12:59:59".ToDate())', '0'],
        ['"1999-12-31 12:59:59".ToDate().DaysBetween("1999-12-31 23:59:59".ToDate())', '0'],
        ['"1999-12-31 00:00:00".ToDate().DaysBetween("1999-12-31 12:00:00".ToDate())', '0'],
        ['"1999-12-31 00:00:00".ToDate().DaysBetween("1999-12-31 23:59:59".ToDate())', '0'],
        ['"1999-12-31 00:00:01".ToDate().DaysBetween("2000-01-01 00:00:00".ToDate())', '0'],
        ['"1999-12-31 00:00:00".ToDate().DaysBetween("2000-01-01 11:59:59".ToDate())', '1'],
        ['"2000-01-01 11:59:59".ToDate().DaysBetween("1999-12-31 00:00:00".ToDate())', '-1'],
        ['Now().HoursBetween(Now().IncHour(6))', '6'],
        ['"1999-12-31 12:59:59".ToDate().HoursBetween("2017-07-05 15:22:59".ToDate().IncHour(6))', '153512'],

        ['"1999-12-31 00:00:00".ToDate().MilliSecondsBetween("1999-12-31 00:00:00".ToDate().IncSecond(60))', '60000'],
        ['"1999-12-31 12:59:59".ToDate().MilliSecondsBetween("1999-12-31 12:59:59".ToDate())', '0'],
        ['Now().MinutesBetween(Now().IncMinute(1))', '1'],
        ['"1999-12-31 00:00:00".ToDate().MinutesBetween("1999-12-31 00:00:59".ToDate())', '0'],
        ['Now().SecondsBetween(Now().IncSecond(60))', '60'],
        ['"1999-12-31 23:59:59".ToDate().SecondsBetween("2000-01-01 00:00:00".ToDate())', '1'],
        ['Now().WeeksBetween(Now().IncWeek(2))', '2'],
        ['"2000-01-01 00:00:00".ToDate().WeeksBetween("2000-01-06 00:00:00".ToDate())', '0'],
    //['Now().MonthsBetween(Now().IncMonth(1))', '1'], //30.4375
        ['"2000-01-01 00:00:00".ToDate().MonthsBetween("2000-01-01 00:00:00".ToDate().IncMonth(1))', '1'], //30.4375
        ['"2000-02-01 00:00:00".ToDate().MonthsBetween("2000-02-01 00:00:00".ToDate().IncMonth(1))', '1'],
        ['"2000-01-01 00:00:00".ToDate().MonthsBetween("2000-01-30 00:00:00".ToDate())', '0'],
        ['"2000-01-01 00:00:00".ToDate().MonthsBetween("2000-01-31 23:59:59".ToDate())', '0'],
        ['"2000-02-01 00:00:00".ToDate().MonthsBetween("2000-03-01 00:00:00".ToDate())', '1'],
    //['Now().YearsBetween(Now().IncYear(2))', '2'], //365.25
        ['"2000-01-01 00:00:00".ToDate().YearsBetween("2000-01-01 00:00:00".ToDate().IncYear(1))', '1'],
        ['"1999-01-01 00:00:00".ToDate().YearsBetween("1999-01-01 00:00:00".ToDate().IncYear(1))', '1'],
        ['"2000-01-01 00:00:00".ToDate().YearsBetween("2000-12-31 23:59:59".ToDate())', '0'],
        ['"1999-01-01 00:00:00".ToDate().YearsBetween("1999-12-31 23:59:59".ToDate())', '0'],
        ['"1999-01-01 00:00:00".ToDate().YearsBetween("2000-01-01 00:00:00".ToDate())', '1'],
    //实体
        ['Root().E2[0].P5.', 'undefined', '. 无法作为表达式的结尾'],
        ['.Root().E2[0].P5', 'undefined', '. 无法作为表达式的开头'],
        ['+Root().E2[0].P5', 'undefined', 'date 无法做一元正数运算'],
        ['-Root().E2[0].P5', 'undefined', 'date 无法做一元负数运算'],
        ['!Root().E2[0].P5', 'false', '', 'E2|E2.P5'],
        ['!!Root().E2[0].P5', 'true', '', 'E2|E2.P5'],
        ['Root().E2[0].P5*Root().E2[0].P5', 'undefined', 'date 和 date 无法做乘法运算'],
        ['Root().E2[0].P5/Root().E2[0].P5', 'undefined', 'date 和 date 无法做除法运算'],
        ['Root().E2[0].P5%Root().E2[0].P5', 'undefined', 'date 和 date 无法做余数运算'],
        ['Root().E2[0].P5*1', 'undefined', 'date 和 number 无法做乘法运算'],
        ['Root().E2[0].P5/1', 'undefined', 'date 和 number 无法做除法运算'],
        ['Root().E2[0].P5%1', 'undefined', 'date 和 number 无法做余数运算'],
        ['Root().E2[0].P5+Root().E2[0].P5+0', 'undefined', 'date 和 date 无法做加法运算'],
        ['Root().E2[0].P5+3', 'undefined', 'date 和 number 无法做加法运算'],
        ['Root().E2[0].P5-Root().E2[0].P5', 'undefined', 'date 和 date 无法做减法运算'],
        ['Root().E2[0].P5-3', 'undefined', 'date 和 number 无法做减法运算'],
        ['Root().E2[0].P5>Root().E2[0].P5', 'false', '', 'E2|E2.P5'],
        ['Root().E2[0].P5>"1999-12-30".ToDate()', 'true', '', 'E2|E2.P5'],
        ['Root().E2[0].P5>=Root().E2[0].P5', 'true', '', 'E2|E2.P5'],
        ['Root().E2[0].P5<Root().E2[0].P5', 'false', '', 'E2|E2.P5'],
        ['Root().E2[0].P5<=Root().E2[0].P5', 'true', '', 'E2|E2.P5'],
        ['Root().E2[0].P5>1234', 'undefined', 'date 和 number 无法做大于运算'],
        ['Root().E2[0].P5<1234', 'undefined', 'date 和 number 无法做小于运算'],
        ['Root().E2[0].P5==0', 'undefined', 'date 和 number 无法做相等运算'],
        ['Root().E2[0].P5==Root().E2[0].P5', 'true', '', 'E2|E2.P5'],
        ['Root().E2[0].P5!=0', 'undefined', 'date 和 number 无法做不等运算'],
        ['Root().E2[0].P5!=Root().E2[0].P5', 'false', '', 'E2|E2.P5'],
        ['Root().E2[0].P5&&Root().E2[0].P5', 'undefined', 'date 和 date 无法做逻辑与运算'],
        ['Root().E2[0].P5||Root().E2[0].P5', 'undefined', 'date 无法做逻辑或运算的左运算数', '', 'date 和 date 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['[Root().E2[0].P5,Root().E2[0].P5,0]', '["1999-12-31T23:59:59","1999-12-31T23:59:59",0]', '', 'E2|E2.P5'],
        ['{Root().E2[0].P5:Root().E2[0].P5}', 'undefined', ': 前不允许表达式存在'],
        ['{a:Root().E2[0].P5,b:Root().E2[0].P5,c:0}', '{"a":"1999-12-31T23:59:59","b":"1999-12-31T23:59:59","c":0}', '', 'E2|E2.P5'],
        ['\'Root().E2[0].P5\'', '"Root().E2[0].P5"'],
        ['Root().E2[0].P5.ToString()', '"' + d1 + '"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.ToString("")', '"' + d1 + '"', '', 'E2|E2.P5'],
        ['IfNull(null,Root().E2[0].P5)', '"1999-12-31T23:59:59"', '', 'E2|E2.P5'],
        ['IfNull("12",Root().E2[0].P5)', '"12"', '', 'E2|E2.P5'],
        ['IIf(true,"12", Root().E2[0].P5)', '"12"', '', 'E2|E2.P5'],
        ['IIf(false,"12".ToDate("d"), Root().E2[0].P5)', '"1999-12-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.DateOf()', '"1999-12-31T00:00:00"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncDay(1)', '"2000-01-01T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncHour(24)', '"2000-01-01T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncHour(0.5)', '"2000-01-01T00:29:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncHour(0)', '"1999-12-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncHour(-1)', '"1999-12-31T22:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncHour(-24)', '"1999-12-30T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncMinute(1)', '"2000-01-01T00:00:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncSecond(1)', '"2000-01-01T00:00:00"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncWeek(1)', '"2000-01-07T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncMonth(1)', '"2000-01-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncYear(1)', '"2000-12-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncDay(0.5)', '"2000-01-01T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncMinute(0.5)', '"2000-01-01T00:00:29"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncSecond(0.5)', '"1999-12-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncWeek(0.5)', '"2000-01-04T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncMonth(0.5)', '"2000-01-31T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.IncYear(0.5)', '"2000-06-30T23:59:59"', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.DayOf()', '31', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.DayOfWeek()', '5', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.HourOf()', '23', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MilliSecondOf()', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MinuteOf()', '59', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MonthOf()', '12', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.SecondOf()', '59', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.WeekOf()', '1', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.YearOf()', '1999', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.DaysBetween("2000-01-01T23:59:59".ToDate())', '1', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.DaysBetween("2000-01-01T00:00:00".ToDate())', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.HoursBetween("2000-01-01T00:59:59".ToDate())', '1', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.HoursBetween("2000-01-01T00:59:00".ToDate())', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MilliSecondsBetween("2000-01-01T00:00:00".ToDate())', '1000', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MinutesBetween("2000-01-01T00:00:59".ToDate())', '1', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MinutesBetween("2000-01-01T00:00:58".ToDate())', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.MonthsBetween("2000-01-01T00:00:58".ToDate())', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.SecondsBetween("2000-01-01T00:00:00".ToDate())', '1', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.WeeksBetween("2000-01-07T23:59:58".ToDate())', '0', '', 'E2|E2.P5'],
        ['Root().E2[0].P5.YearsBetween("2000-01-01T00:00:00".ToDate())', '0', '', 'E2|E2.P5'],

    ]
};
var exprBoolean = {
    title: "基于boolean",
    exprs: [
    //普通
        ['true', 'true'],
        ['false', 'false'],
        ['+false', 'undefined', 'boolean 无法做一元正数运算'],
        ['-false', 'undefined', 'boolean 无法做一元负数运算'],
        ['!false', 'true'],
        ['!!false', 'false'],
        ['true*false', 'undefined', 'boolean 和 boolean 无法做乘法运算'],
        ['true/false', 'undefined', 'boolean 和 boolean 无法做除法运算'],
        ['true%false', 'undefined', 'boolean 和 boolean 无法做余数运算'],
        ['false/true', 'undefined', 'boolean 和 boolean 无法做除法运算'],
        ['false%true', 'undefined', 'boolean 和 boolean 无法做余数运算'],
        ['true+false', 'undefined', 'boolean 和 boolean 无法做加法运算'],
        ['true-false', 'undefined', 'boolean 和 boolean 无法做减法运算'],
        ['true>false', 'undefined', 'boolean 和 boolean 无法做大于运算'],
        ['true>=false', 'undefined', 'boolean 和 boolean 无法做大于等于运算'],
        ['true<false', 'undefined', 'boolean 和 boolean 无法做小于运算'],
        ['true<=false', 'undefined', 'boolean 和 boolean 无法做小于等于运算'],
        ['true==false', 'false'],
        ['true==true', 'true'],
        ['true!=false', 'true'],
        ['false!=false', 'false'],
        ['true&&false', 'false'],
        ['true && true', 'true'],
        ['false && false', 'false'],
        ['true||false', 'true'],
        ['true || true', 'true'],
        ['false || false', 'false'],
        ['{true:false}', '{"true":false}'],
        ['{a:true,b:false}', '{"a":true,"b":false}'],
        ['{a:true,b:false,c:false}', '{"a":true,"b":false,"c":false}'],
        ['\'false\'', '"false"'],
        ['\'true&&false\'', '"true&&false"'],
        ['true.ToString()', '"true"'],
        ['false.ToString()', '"false"'],
        ['IfNull(null,true)', 'true'],
        ['IfNull(false,true)', 'false'],
        ['IIf(true,true,false)', 'true'],
        ['IIf(false,true,false)', 'false'],
    //实体字段
        ['P6', 'true', '', 'E1.P6'],
        ['Root().E2[0].P6', 'true', '', 'E2|E2.P6'],
        ['+Root().E2[0].P6', 'undefined', 'boolean 无法做一元正数运算'],
        ['-Root().E2[0].P6', 'undefined', 'boolean 无法做一元负数运算'],
        ['!Root().E2[0].P6', 'false', '', 'E2|E2.P6'],
        ['!!Root().E2[0].P6', 'true', '', 'E2|E2.P6'],
        ['P6*Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做乘法运算'],
        ['P6/Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做除法运算'],
        ['P6%Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做余数运算'],
        ['Root().E2[0].P6/P6', 'undefined', 'boolean 和 boolean 无法做除法运算'],
        ['Root().E2[0].P6%P6', 'undefined', 'boolean 和 boolean 无法做余数运算'],
        ['P6+Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做加法运算'],
        ['P6-Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做减法运算'],
        ['P6>Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做大于运算'],
        ['P6>=Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做大于等于运算'],
        ['P6<Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做小于运算'],
        ['P6<=Root().E2[0].P6', 'undefined', 'boolean 和 boolean 无法做小于等于运算'],
        ['P6==Root().E2[0].P6', 'true', '', 'E1.P6|E2|E2.P6'],
        ['P6!=Root().E2[0].P6', 'false', '', 'E1.P6|E2|E2.P6'],
        ['P6&&Root().E2[0].P6', 'true', '', 'E1.P6|E2|E2.P6'],
        ['P6&&!Root().E2[0].P6', 'false', '', 'E1.P6|E2|E2.P6'],
        ['!P6&&!Root().E2[0].P6', 'false', '', 'E1.P6|E2|E2.P6'],
        ['P6||Root().E2[0].P6', 'true', '', 'E1.P6|E2|E2.P6'],
        ['!P6||Root().E2[0].P6', 'true', '', 'E1.P6|E2|E2.P6'],
        ['!P6||!Root().E2[0].P6', 'false', '', 'E1.P6|E2|E2.P6'],
        ['{P6:Root().E2[0].P6}', '{"P6":true}', '', 'E2|E2.P6'],
        ['{a:P6,b:Root().E2[0].P6}', '{"a":true,"b":true}', '', 'E1.P6|E2|E2.P6'],
        ['\'P6||Root().E2[0].P6\'', '"P6||Root().E2[0].P6"'],
        ['P6.ToString()', '"true"', '', 'E1.P6'],
        ['Root().E2[0].P6.ToString()', '"true"', '', 'E2|E2.P6']
    ]
};
var exprObject = {
    title: "基于object",
    exprs: [
    //普通
        ['{a:1,b:2,c:3}', '{"a":1,"b":2,"c":3}'],
        ['{a:"1",b:"2",c:"3"}', '{"a":"1","b":"2","c":"3"}'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', '{"a":1,"b":"2","c":true,"e":{"a":[4,5,6],"b":null}}'],
        ['{d:Now().DateOf()}', '{"d":"' + year + '-' + mon2 + '-' + date2 + 'T00:00:00"}'],
        ['{a:1,b:"2",c:true,d:Now().DateOf(),e:{a:[4,5,6],b:null}}', '{"a":1,"b":"2","c":true,"d":"' + datetime1 + '","e":{"a":[4,5,6],"b":null}}'],
        ['+{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 无法做一元正数运算'],
        ['-{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 无法做一元负数运算'],
        ['!{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'false'],
        ['!!{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'true'],
        ['{d:Now()}*{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做乘法运算'],
        ['{d:Now()}/{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做除法运算'],
        ['{d:Now()}%{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做余数运算'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}/{d:Now()}', 'undefined', 'object 和 object 无法做除法运算'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}%{d:Now()}', 'undefined', 'object 和 object 无法做余数运算'],
        ['{d:Now()}+{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做加法运算'],
        ['{d:Now()}-{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做减法运算'],
        ['{d:Now()}>{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做大于运算'],
        ['{d:Now()}>={a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做大于等于运算'],
        ['{d:Now()}<{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做小于运算'],
        ['{d:Now()}<={a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做小于等于运算'],
        ['{d:Now()}=={a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'false'],
        ['{d:Now().DateOf()}=={d:Now().DateOf()}', 'true'],
        ['{d:Now()}!={a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'true'],
        ['{d:Now().DateOf()}!={d:Now().DateOf()}', 'false'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}!={a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'false'],
        ['{d:Now()}&&{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做逻辑与运算'],
        ['{d:Now()} && {d:Now()}', 'undefined', 'object 和 object 无法做逻辑与运算'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}} && {a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 和 object 无法做逻辑与运算'],
        ['{d:Now()}||{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 无法做逻辑或运算的左运算数', '', 'object 和 object 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{d:Now()} || {d:Now()}', 'undefined', 'object 无法做逻辑或运算的左运算数', '', 'object 和 object 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}} || {a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}', 'undefined', 'object 无法做逻辑或运算的左运算数', '', 'object 和 object 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{{d:Now()}:{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}}', 'undefined', '{ 后不允许出现 {'],
        ['{a:{d:Now().DateOf()},b:{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}}', '{"a":{"d":"' + datetime1 + '"},"b":{"a":1,"b":"2","c":true,"e":{"a":[4,5,6],"b":null}}}'],
        ['{a:{d:Now().DateOf()},b:{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}},c:{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}}', '{"a":{"d":"' + year + '-' + mon2 + '-' + date2 + 'T00:00:00"},"b":{"a":1,"b":"2","c":true,"e":{"a":[4,5,6],"b":null}},"c":{"a":1,"b":"2","c":true,"e":{"a":[4,5,6],"b":null}}}'],
        ['\'{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}\'', '"{a:1,b:\\"2\\",c:true,e:{a:[4,5,6],b:null}}"'],
        ['\'{d:Now()}&&{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}\'', '"{d:Now()}&&{a:1,b:\\"2\\",c:true,e:{a:[4,5,6],b:null}}"'],
        ['{d:Now()}.ToString()', 'undefined', 'object 没有名称为 ToString 的方法或参数不匹配'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}.ToString()', 'undefined', 'object 没有名称为 ToString 的方法或参数不匹配'],
        ['IfNull(null,{d:Now().DateOf()})', '{"d":"' + datetime1 + '"}'],
        ['IfNull({a:1,b:"2",c:true,e:{a:[4,5,6],b:null}},{d:Now().DateOf()})', '{"a":1,"b":"2","c":true,"e":{"a":[4,5,6],"b":null}}'],
        ['IIf(true,{d:Now().DateOf()}, {a:1,b:"2",c:true,e:{a:[4,5,6],b:null}})', '{"d":"' + datetime1 + '"}'],
        ['{a:1,b:"2",c:true,e:{a:[4,5,6],b:null}}.Parent()', 'undefined', '只有实体对象才可以调用 Parent 方法'],
        ['{name:"item1", alias: { en: "Item1", zh_CN: "项目1", zh_TW: "項目1"} }.name', '"item1"'],
        ['{name:"item1", alias: { en: "Item1", zh_CN: "项目1", zh_TW: "項目1"} }.alias.zh_CN', '"项目1"', '', '', 'undefined 无法做属性访问操作'], // TODO: 计算正常，检查出错
        ['{x:23,"$0":"nbgnbv"}["$0"]', '"nbgnbv"'],
        ['{x:23,"$0":"nbgnbv"}[""]', 'null'],
        ['{x:1}.$C', 'null'],
        ['{a:[[11]]}=={a:[[11]]}', 'true'],
        ['{a:[[11]]}=={a:[[11]]} && {a:[11]}=={b:[22]}', 'false'],
        ['{a: 1*1, x}', 'undefined', '对象书写格式不正确'],
    //实体字段
        ['P3', '{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}', '', 'E1.P3'],
        ['Root().E2[0].P3', '{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}', '', 'E2|E2.P3'],
        ['+Root().E2[0].P3', 'undefined', 'object 无法做一元正数运算'],
        ['-Root().E2[0].P3', 'undefined', 'object 无法做一元负数运算'],
        ['!Root().E2[0].P3', 'false', '', 'E2|E2.P3'],
        ['!!Root().E2[0].P3', 'true', '', 'E2|E2.P3'],
        ['P3*Root().E2[0].P3', 'undefined', 'object 和 object 无法做乘法运算'],
        ['P3/Root().E2[0].P3', 'undefined', 'object 和 object 无法做除法运算'],
        ['P3%Root().E2[0].P3', 'undefined', 'object 和 object 无法做余数运算'],
        ['Root().E2[0].P3/P3', 'undefined', 'object 和 object 无法做除法运算'],
        ['Root().E2[0].P3%P3', 'undefined', 'object 和 object 无法做余数运算'],
        ['P3+Root().E2[0].P3', 'undefined', 'object 和 object 无法做加法运算'],
        ['P3-Root().E2[0].P3', 'undefined', 'object 和 object 无法做减法运算'],
        ['P3>Root().E2[0].P3', 'undefined', 'object 和 object 无法做大于运算'],
        ['P3>=Root().E2[0].P3', 'undefined', 'object 和 object 无法做大于等于运算'],
        ['P3<Root().E2[0].P3', 'undefined', 'object 和 object 无法做小于运算'],
        ['P3<=Root().E2[0].P3', 'undefined', 'object 和 object 无法做小于等于运算'],
        ['P3==Root().E2[0].P3', 'true', '', 'E1.P3|E2|E2.P3'],
        ['P3!=Root().E2[0].P3', 'false', '', 'E1.P3|E2|E2.P3'],
        ['P3&&Root().E2[0].P3', 'undefined', 'object 和 object 无法做逻辑与运算'],
        ['P3||Root().E2[0].P3', 'undefined', 'object 无法做逻辑或运算的左运算数', '', 'object 和 object 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{P3:Root().E2[0].P3}', '{"P3":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}}', '', 'E2|E2.P3'],
        ['{a:P3,b:Root().E2[0].P3}', '{"a":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}},"b":{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}}', '', 'E1.P3|E2|E2.P3'],
        ['\'P3||Root().E2[0].P3\'', '"P3||Root().E2[0].P3"'],
        ['Root().E2[0].P3.ToString()', 'undefined', 'object 没有名称为 ToString 的方法或参数不匹配'],
        ['IfNull(null,P3)', '{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}', '', 'E1.P3'],
        ['IIf(true,P3, Root().E2[0].P3)', '{"name":"item1","alias":{"en":"Item1","zh_CN":"项目1","zh_TW":"項目1"}}', '', 'E1.P3|E2|E2.P3'],
        ['Root().E2[0].P3.Parent()', 'undefined', '只有实体对象才可以调用 Parent 方法', 'E2'], // TODO: 运行时错误？
        ['P3.name', '"item1"', '', 'E1.P3'],
        ['P3.alias.zh_CN', '"项目1"', '', 'E1.P3'],
    ]
};
var exprArray = {
    title: "基于array",
    exprs: [
        ['[23, 45, 6, 32][2, 4, 5]', 'undefined', '[]用作下标访问时不允许出现 , 分隔符'],
        ['[]', '[]'],
        ['["1","2","3"]', '["1","2","3"]'],
        ['[1,2,3.3]', '[1,2,3.3]'],
        ['[-1,2,3.3]', '[-1,2,3.3]'],
        ['[+1,2,3.3]', '[1,2,3.3]'],
        ['[!1,2,3.3]', '[false,2,3.3]'],
        ['[1,"2",true,{a:[4,5,6],b:null},[4,5,6],null]', '[1,"2",true,{"a":[4,5,6],"b":null},[4,5,6],null]'],
        ['+["1","2","3"]', 'undefined', 'array 无法做一元正数运算'],
        ['-["1","2","3"]', 'undefined', 'array 无法做一元负数运算'],
        ['!["1","2","3"]', 'false'],
        ['!!["1","2","3"]', 'true'],
        ['[1,2,3.3]*["1","2","3"]', 'undefined', 'array 和 array 无法做乘法运算'],
        ['[1,2,3.3]/["1","2","3"]', 'undefined', 'array 和 array 无法做除法运算'],
        ['[1,2,3.3]%["1","2","3"]', 'undefined', 'array 和 array 无法做余数运算'],
        ['["1","2","3"]/[1,2,3.3]', 'undefined', 'array 和 array 无法做除法运算'],
        ['["1","2","3"]%[1,2,3.3]', 'undefined', 'array 和 array 无法做余数运算'],
        ['[1,2,3.3]+["1","2","3"]+[1,"2",true,{a:[4,5,6],b:null},[4,5,6],null]', '[1,2,3.3,"1","2","3",1,"2",true,{"a":[4,5,6],"b":null},[4,5,6],null]'],
        ['[1,2,3.3]+[1,2,3.3]', '[1,2,3.3,1,2,3.3]'],
        ['[1,2,3.3]-["1","2","3"]', '[1,2,3.3]'],
        ['[1,2,3.3]-[1,2,3.3]', '[]'],
        ['[1,2,3.3]-[]', '[1,2,3.3]'],
        ['[1,2,3.3]-[1,3.3,4]', '[2]'],
        ['[1,1,2,1,3.3,1]-[1,3.3,4]', '[2]'],
        ['[1,"2",true,{a:[4,5,6],b:null},[4,5,6],null]-[{a:[4,5,6],b:null}]', '[1,"2",true,[4,5,6],null]'],
        ['[1,2,3.3]>["1","2","3"]', 'undefined', 'array 和 array 无法做大于运算'],
        ['[1,2,3.3]>=["1","2","3"]', 'undefined', 'array 和 array 无法做大于等于运算'],
        ['[1,2,3.3]<["1","2","3"]', 'undefined', 'array 和 array 无法做小于运算'],
        ['[1,2,3.3]<=["1","2","3"]', 'undefined', 'array 和 array 无法做小于等于运算'],
        ['[1,2,3.3]==["1","2","3"]', 'false'],
        ['[1,2,3.3]==[1,2,3.3]', 'true'],
        ['[1,2,3.3]!=["1","2","3"]', 'true'],
        ['[1,2,3.3]!=[1,2,3.3]', 'false'],
        ['[1,2,3.3]&&["1","2","3"]', 'undefined', 'array 和 array 无法做逻辑与运算'],
        ['[1,2,3.3]||["1","2","3"]', 'undefined', 'array 无法做逻辑或运算的左运算数', '', 'array 和 array 无法做逻辑或运算'], // TODO: 错误信息不一致
        ['{[1,2,3.3]:["1","2","3"]}', 'undefined', '{ 后不允许出现 ['],
        ['{a:[1,2,3.3],b:["1","2","3"],c:["1","2","3"]}', '{"a":[1,2,3.3],"b":["1","2","3"],"c":["1","2","3"]}'],
        ['\'["1","2","3"]\'', '"[\\"1\\",\\"2\\",\\"3\\"]"'],
        ['\'[1,2,3.3]&&["1","2","3"]\'', '"[1,2,3.3]&&[\\"1\\",\\"2\\",\\"3\\"]"'],
        ['[1,2,3.3].ToString()', 'undefined', 'array 没有名称为 ToString 的方法或参数不匹配'],
        ['["1","2","3"].ToString()', 'undefined', 'array 没有名称为 ToString 的方法或参数不匹配'],
        ['IfNull(null,[1,2,3.3])', '[1,2,3.3]'],
        ['IfNull(["1","2","3"],[1,2,3.3])', '["1","2","3"]'],
        ['IIf(true,[1,2,3.3], ["1","2","3"])', '[1,2,3.3]'],
        ['[1,2,3.3].Parent()', 'undefined', 'array 没有名称为 Parent 的方法或参数不匹配'],
        ['[1,2,3.3].Count()', '3'],
        ['[1,2,3.3].Average()', '2.1'],
        ['[1,2,3.3].Average().ToString()', '"2.1"'],
        ['[1,2,3.3].Average()+""', 'undefined', 'number 和 string 无法做加法运算'], //10位
        ['[1,2,3].Average()+"123"', 'undefined', 'number 和 string 无法做加法运算'],
        ['[1,2,3.3].Average()+[1,2,3.3].Min()', '3.1'],
        ['["1","2","3"].Average()', 'undefined', 'string 和 number 无法做除法运算'],
        ['[1,2,3.3].Average("ID")', 'undefined', '1 无法获取属性: ID', 'E1.ID'], // TODO: 运行时错误？
        ['[{a:1,b:2},{a:2,b:3},{a:3,b:4}].Average("b")', '3', '', '', '属性不存在: b'], // TODO: 计算正确，检查错误
        ['[null,null].Average()', '0'],
        ['[null].Average()', '0'],
        ['[1,2,3.3].Sum()', '6.3'],
        ['[{ a: 1 }, { a: 2}].Sum("$0.a")', '3', '', 'E1'], // TODO: 依赖关系错误
        ['["1","2","3"].Sum()', '"123"'],
        ['[[1,2,3.3],["1","2","3"]].Sum()', '[1,2,3.3,"1","2","3"]'],
        ['[1,"2"].Sum()', 'undefined', 'number 和 string 无法做加法运算'],
        ['[{a:[4,5,6],b:null},{a:[4,5,6],b:null}].Sum()', 'undefined', 'object 和 object 无法做加法运算'], //无error具体信息
        ['[1,"2",true,{a:[4,5,6],b:null},[4,5,6],null].Sum()', 'undefined', 'number 和 string 无法做加法运算'], //无error具体信息
        ['[1,2,3.3].Sum()+""', 'undefined', 'number 和 string 无法做加法运算'],
        ['[null,"1",null,"2","3"].Sum()', '"123"'],
        ['[null,1].Sum()', '1'],
        ['[null,null].Sum()', 'null'], //无error具体信息,原为undefined，后改为null
        ['[null].Sum()', 'null'],
        ['[1,2,3.3].Max()', '3.3'],
        ['[1,2,3.3].Max("ID")', 'undefined', '1 无法获取属性: ID', 'E1.ID'], // TODO: 运行时错误？
        ['[{a:1,b:2},{a:2,b:3},{a:3,b:4}].Max("b")', '4', '', '', '属性不存在: b'], // TODO: 计算正确，检查出错
        ['[1,2,3.3].Min()', '1'],
        ['["1","2","3.3"].Min()', '"1"'],
        ['[1,2,3.3].Min("ID")', 'undefined', '1 无法获取属性: ID', 'E1.ID'], // TODO: 运行时错误？
        ['[{a:1,b:2},{a:2,b:3},{a:3,b:4}].Min("b")', '2', '', '', '属性不存在: b'], // TODO: 计算正确，检查出错
        ['[1,2,3.3].Where()', 'undefined', 'array 没有名称为 Where 的方法或参数不匹配'],
        ['[1,2,3.3].Where("ID")', 'undefined', '1 无法获取属性: ID', 'E1.ID'], // TODO: 运行时错误？
        ['[1,2,3.3].Where(2)', 'undefined', 'array 没有名称为 Where 的方法或参数不匹配'],
        ['[1,2,3.3].Where("true")', '[1,2,3.3]'],
        ['[2, 3, 4, 5, 1, 2, 3].Where("$0==2").length', 'undefined', 'array 无法做属性访问操作', '', 'array 和 number 无法做相等运算'], // TODO: 错误信息不一致
        ['[2, 3, 4, 5, 1, 2, 3].Where("$0==2").Count()', '2', '', '', 'array 和 number 无法做相等运算'], // TODO: 计算正确，检查出错
        ['[2,2,3].Distinct()', '[2,3]'],
        ['[2,2,3].Distinct("$0")', '[2,3]', '', 'E1'], // TODO: 没有依赖关系
        ['[{a:1,b:2},{a:2,b:3},{a:3,b:4}].Where("a<=2&&a>1")', '[{"a":2,"b":3}]', '', '', '属性不存在: a'], // TODO: 计算正确，检查出错
        ['[{a:1,b:2},{a:2,b:3},{a:2,b:4},{a:1,b:4}].Distinct("a")', '[{"a":1,"b":2},{"a":2,"b":3}]', '', '', '属性不存在: a'], // TODO: 计算正确，检查出错
        ['[1,2,3.3].Count()+[1,2,3.3].Average().ToString()+[1,2,3.3].Sum()+[1,2,3.3].Max().ToString()+[1,2,3.3].Min().ToString()', 'undefined', 'number 和 string 无法做加法运算'],
        ['[:2]', 'undefined', '[ 后不允许出现 :'],
        ['[].Sum()', 'null'],
        ['[].Count()', '0'],
        ['[].Distinct()', '[]'],
        ['[].Average()', '0'],
        ['[].Max()', 'null'],
        ['[].Min()', 'null'],
        ['[].Where("")', '[]', '', '', '表达式不能为空'], // TODO: 子表达式不能为空？
        ['[1, 2].Distinct("$1")', 'undefined', '参数不存在: $1'],
        ['[1,2].Max()', '2'],
        ['[2,1].Max()', '2'],
        ['[1]+[2]', '[1,2]']
    ]
};
var exprNull = {
    title: "基于null",
    exprs: [
        ['null', 'null'],
        ['null.', 'undefined', 'null 后不允许出现 .'],
        ['.null', 'undefined', '. 无法作为表达式的开头'],
        ['+null', '0'], //null在算术运算中作0用
        ['-null', '0'],
        ['!null', 'true'], //true,已修
        ['!!null', 'false'], //false
        ['null*null', 'null'],
        ['null/null', 'null'],
        ['null%null', 'null'],
        ['null*1', '0'],
        ['null/1', '0'],
        ['1/null', 'undefined', 'null 不能作为除数使用', '', 'number 和 null 无法做除法运算'], // TODO: 错误信息不一致
        ['null%1', '0'],
        ['null+null', 'null'],
        ['null+null+0', '0'],
        ['null+3', '3'],
        ['null+""', '""'],
        ['3+null+""', 'undefined', 'number 和 string 无法做加法运算'],
        ['[1,"2",true,{a:[4,5,6],b:null},[4,5,6],null]+null', '[1,"2",true,{"a":[4,5,6],"b":null},[4,5,6],null]'],
        ['null+true', 'undefined', 'null 和 boolean 无法做加法运算'],
        ['null+{}', 'undefined', 'null 和 object 无法做加法运算'],
        ['null-null', 'null'],
        ['null-3', '-3'],
        ['null>null', 'false'],
        ['null>=null', 'true'], //?只等和不等
        ['null<null', 'false'],
        ['null<=null', 'true'], //?只等和不等
        ['null==null', 'true'],
        ['null!=null', 'false'],
        ['null!=0', 'true'],
        ['0==null', 'false'],
        ['0!=null', 'true'],
        ['0>null', 'false'],
        ['null>3', 'false'],
        ['null>-3', 'true'],
        ['3>null', 'true'],
        ['0>=null', 'true'], //与js相同，作数字0处理
        ['0<null', 'false'],
        ['-1<null', 'true'],
        ['0<=null', 'true'],
        ['""==null', 'false'],
        ['"null"==null', 'false'],
        ['""!=null', 'true'],
        ['"">null', 'false'],
        ['"">=null', 'true'], //与js相同，作“”处理
        ['""<null', 'false'],
        ['""<=null', 'true'],
        ['[]==null', 'false'],
        ['[]!=null', 'true'],
        ['[]>null', 'undefined', 'array 和 null 无法做大于运算'],
        ['[]>=null', 'undefined', 'array 和 null 无法做大于等于运算'],
        ['[]<null', 'undefined', 'array 和 null 无法做小于运算'],
        ['[]<=null', 'undefined', 'array 和 null 无法做小于等于运算'],
        ['{}==null', 'false'],
        ['{}!=null', 'true'],
        ['{}>null', 'undefined', 'object 和 null 无法做大于运算'],
        ['{}>=null', 'undefined', 'object 和 null 无法做大于等于运算'],
        ['{}<null', 'undefined', 'object 和 null 无法做小于运算'],
        ['{}<=null', 'undefined', 'object 和 null 无法做小于等于运算'],
        ['null&&null', 'false'],
        ['null&&true', 'false'],
        ['(!null)&&(!null)', 'true'],
        ['!null&&null', 'false'],
        ['!null&&!null', 'true'],
        ['null||null', 'false'],
        ['!null||null', 'true'], //返回值false，bug
        ['[null,null,0]', '[null,null,0]'],
        ['{null:null}', '{"null":null}'],
        ['{a:null,b:null,c:0}', '{"a":null,"b":null,"c":0}'],
        ['\'null\'', '"null"'],
        ['null.ToString()', 'undefined', 'null 后不允许出现 .'],
        ['IfNull(null,null)', 'null'],
        ['IfNull("12",null)', '"12"'],
        ['IIf(true,"12", null)', '"12"'],
        ['IIf(false,"12", null)', 'null'],
    //实体
        ['PN1', 'null', '', 'E1.PN1'],
        ['PN1.', 'undefined', '. 无法作为表达式的结尾'],
        ['.PN1', 'undefined', '. 无法作为表达式的开头'],
        ['+PN1', '0', '', '', 'string 无法做一元正数运算'], //PN1在算术运算中作0用 // TODO: 计算和检查不一致
        ['-PN1', '0', '', '', 'string 无法做一元负数运算'], // TODO: 计算和检查不一致
        ['!PN1', 'true', '', 'E1.PN1'], //true,已修
        ['!!PN1', 'false', '', 'E1.PN1'], //false
        ['PN1*PN1', 'null', '', '', 'string 和 string 无法做乘法运算'], // TODO:
        ['PN1/PN1', 'null', '', '', 'string 和 string 无法做除法运算'], // TODO:
        ['PN1%PN1', 'null', '', '', 'string 和 string 无法做余数运算'], // TODO:
        ['PN1*1', '0', '', '', 'string 和 number 无法做乘法运算'], // TODO:
        ['PN1/1', '0', '', '', 'string 和 number 无法做除法运算'], // TODO:
        ['1/PN1', 'undefined', 'null 不能作为除数使用', '', 'number 和 string 无法做除法运算'], // TODO:
        ['PN1%1', '0', '', '', 'string 和 number 无法做余数运算'], // TODO:
        ['PN1+PN1', 'null', '', 'E1.PN1'],
        ['PN1+PN1+0', '0', '', 'E1.PN1'],
        ['PN1+3', '3', '', 'E1.PN1'],
        ['PN1+""', '""', '', 'E1.PN1'],
        ['3+PN1+""', 'undefined', 'number 和 string 无法做加法运算', 'E1.PN1'], // TODO:
        ['[1,"2",true,{a:[4,5,6],b:PN1},[4,5,6],PN1]+PN1', '[1,"2",true,{"a":[4,5,6],"b":null},[4,5,6],null]', '', '', 'array 和 string 无法做加法运算'], // TODO:
        ['PN1+true', 'undefined', 'null 和 boolean 无法做加法运算', '', 'string 和 boolean 无法做加法运算'], // TODO:
        ['PN1+{}', 'undefined', 'null 和 object 无法做加法运算', '', 'string 和 object 无法做加法运算'], // TODO:
        ['PN1-PN1', 'null', '', '', 'string 和 string 无法做减法运算'], // TODO:
        ['PN1-3', '-3', '', '', 'string 和 number 无法做减法运算'], // TODO:
        ['PN1>PN1', 'false', '', 'E1.PN1'],
        ['PN1>=PN1', 'true', '', 'E1.PN1'], //?只等和不等
        ['PN1>=null', 'true', '', 'E1.PN1'], //?只等和不等
        ['PN1<PN1', 'false', '', 'E1.PN1'],
        ['PN1<=PN1', 'true', '', 'E1.PN1'], //?只等和不等
        ['PN1==PN1', 'true', '', 'E1.PN1'],
        ['PN1==PU1', 'true', '', 'E1.PN1|E1.PU1'], //CG::表达式不会返回undefined，只会返回null
        ['PN1!=PN1', 'false', '', 'E1.PN1'],
        ['PN1!=0', 'true', '', '', 'string 和 number 无法做不等运算'], // TODO:
        ['0==PN1', 'false', '', '', 'number 和 string 无法做相等运算'], // TODO:
        ['0!=PN1', 'true', '', '', 'number 和 string 无法做不等运算'], // TODO:
        ['""==PN1', 'false', '', 'E1.PN1'],
        ['""!=PN1', 'true', '', 'E1.PN1'],
        ['[]==PN1', 'false', '', '', 'array 和 string 无法做相等运算'], // TODO:
        ['[]!=PN1', 'true', '', '', 'array 和 string 无法做不等运算'], // TODO:
        ['{}==PN1', 'false', '', '', 'object 和 string 无法做相等运算'], // TODO:
        ['{}!=PN1', 'true', '', '', 'object 和 string 无法做不等运算'], // TODO:
        ['PN1&&PN1', 'false', '', '', 'string 和 string 无法做逻辑与运算'], // TODO:
        ['PN1&&true', 'false', '', '', 'string 和 boolean 无法做逻辑与运算'], // TODO:
        ['(!PN1)&&(!PN1)', 'true', '', 'E1.PN1'],
        ['!PN1&&PN1', 'false', '', '', 'boolean 和 string 无法做逻辑与运算'], // TODO:
        ['!PN1&&!PN1', 'true', '', 'E1.PN1'], // TODO:
        ['PN1||PN1', 'false', '', '', 'string 和 string 无法做逻辑或运算'], // TODO:
        ['!PN1||PN1', 'true', '', '', 'boolean 和 string 无法做逻辑或运算'], //返回值false，bug // TODO:
        ['[PN1,PN1,0]', '[null,null,0]', '', 'E1.PN1'],
        ['{PN1:PN1}', '{"PN1":null}', '', 'E1.PN1'],
        ['{a:PN1,b:PN1,c:0}', '{"a":null,"b":null,"c":0}', '', 'E1.PN1'],
        ['\'PN1\'', '"PN1"'],
        ['PN1.ToString()', 'undefined', 'null 不能调用 ToString 方法', 'E1.PN1'], //错误: '_func[...]' 为空或不是对象
        ['IfNull(PN1,PN1)', 'null', '', 'E1.PN1'],
        ['IfNull("12",PN1)', '"12"', '', 'E1.PN1'],
        ['IIf(true,"12", PN1)', '"12"', '', 'E1.PN1'],
        ['IIf(false,"12", PN1)', 'null', '', 'E1.PN1'],
        ['3>2 == 3<2', 'false'],
        ['3>2 == 2<3', 'true'],
        ['3>=2 != 3<=2', 'true'],
        ['3>=2 != 2<=3', 'false']
    ]
};
var exprErr = {
    title: "基于其他的",
    exprs: [
    //
        ['()', 'undefined', '该处 () 无意义'],
        ['null && 3/0==5', 'false', '', '', 'number 不能作为除数使用'], // TODO: 错误信息不准确
        ['"abc" || 3/0==5','undefined', 'string 无法做逻辑或运算的左运算数', '', 'number 不能作为除数使用'], // TODO: 错误信息不一致
    //

    //未定义属性
        ['E1', 'undefined', '属性不存在: E1'],
        ['Root().E2[0].tt', 'undefined', '属性不存在: tt', 'E2'], //无error信息 // TODO: 计算错误
        ['True', 'undefined', '属性不存在: True'], //错误: 'field' 为空或不是对象
        ['False', 'undefined', '属性不存在: False'], //错误: 'field' 为空或不是对象
        ['TRUE', 'undefined', '属性不存在: TRUE'], //错误: 'field' 为空或不是对象
        ['FALSE', 'undefined', '属性不存在: FALSE'], //错误: 'field' 为空或不是对象
    //函数相关
    //参数
        ['Root("")', 'undefined', '没有名称为 Root 的方法或参数不匹配'],
        ['Root("",123)', 'undefined', '没有名称为 Root 的方法或参数不匹配'],
        ['true.ToString("123")', 'undefined', 'boolean 没有名称为 ToString 的方法或参数不匹配'],
        ['123.ToRMB("456") ', 'undefined', 'number 没有名称为 ToRMB 的方法或参数不匹配'],
        ['IfNull(undefined)', 'undefined', '属性不存在: undefined'],
        ['IfNull()', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['"123".LeftString(1)', '"1"'],
        ['"123".LeftString(true)', 'undefined', 'string 没有名称为 LeftString 的方法或参数不匹配'],
        ['"123".LeftString("1")', 'undefined', 'string 没有名称为 LeftString 的方法或参数不匹配'],
        ['IfNull(true)', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IfNull(false)', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IIf(true, false)', 'undefined', '没有名称为 IIf 的方法或参数不匹配'],
        ['IfNull(P6)', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IfNull(Root().E2[0].P6)', 'undefined', '没有名称为 IfNull 的方法或参数不匹配'],
        ['IIf(P6, Root().E2[0].P6)', 'undefined', '没有名称为 IIf 的方法或参数不匹配'],
    //调用
        ['IfNull("false",true)', '"false"'],
        ['IIf(true,"true",false)', '"true"'],
        ['IIf(false,"true",false)', 'false'],
        ['ID.IfNull("")', 'undefined', 'number 没有名称为 IfNull 的方法或参数不匹配'],
        ['Root().E1[0].ID.Parent()', 'undefined', 'number 没有名称为 Parent 的方法或参数不匹配'],
        ['Root().E1.Parent()', 'undefined', 'array 没有名称为 Parent 的方法或参数不匹配'], //['Root().E1[0].Parent()'],
        ['ToString()', 'undefined', '没有名称为 ToString 的方法或参数不匹配'],
        ['true.Average()', 'undefined', 'boolean 没有名称为 Average 的方法或参数不匹配'],
    //拼写
        ['IIf', 'undefined', '属性不存在: IIf'],
        ['iif(true, false)', 'undefined', '没有名称为 iif 的方法或参数不匹配'],
    //其他
        ['(#∑)', 'undefined', '无法识别 #∑']
    ]
};

var exprFunction = {
    title: "跟函数测试",
    exprs: [
       ['PropValue([{name:1},{name:2}], "name", "|")', '"1|2"'],
       ['PropValue([{name:1},{name:2}], "name")', '1'],
       ['PropValue([{name:1},{name:2}], "type")', 'null'],
       ['FieldName()', '""'],
       ['FieldValue()', '""'],
       ['FieldDisplayName()', '""'],
       ['Random() >= 0 && Random() <= 1', 'true']
    ]
};

window.demoExpr = [exprDataCalc, exprOperator, exprString, exprNumber, exprDate, exprBoolean, exprObject, exprArray, exprNull, exprErr, exprFunction];

// var exprTemp = {
//     title: "临时测试",
//     exprs: [
//        ['Entity1.ID', 'undefined', 'array 无法做属性访问操作', 'E1.Entity1.ID']
//     ]
// };

// window.demoExpr = [exprTemp];

