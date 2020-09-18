var num = 34;
var str = "hello";
var bool = false;
var voide = undefined;
var numbe = null;
var list = [1, 2, 3];
var mulList = [1, 3, "koi", 4];
var toul = ["koi", 1];
var emplly = [[1, "ammu"], [2, "lop"], [3, "tha"]];
var color;
(function (color) {
    color[color["red"] = 3] = "red";
    color[color["green"] = 4] = "green";
    color[color["blue"] = 5] = "blue";
})(color || (color = {}));
;
var union_1;
console.log(num);
console.log(str);
console.log(bool);
console.log(voide);
console.log(numbe);
voide = null;
console.log(voide);
console.log("numrical array-->" + list);
console.log("multple data type array-->" + mulList);
console.log(toul);
console.log("employ are tuple--->" + emplly);
console.log("print enum---->" + color.red);
union_1 = "thalsi";
console.log("print union----->" + union_1);
union_1 = 123;
console.log("print union------>" + union_1);
function hello() {
    console.log('koi');
    return "hello world";
}
console.log(hello());
function voidFun() {
    console.log("voide Fuction");
}
console.log(voidFun());
var a = null;
var b = undefined;
if (a == b) {
    console.log("undefind and null are equal-->" + a + "=" + b);
}
var anyV;
anyV = "string";
console.log(anyV);
anyV = 213;
console.log(anyV);
function anyFunction(a, b) {
    return a + b;
}
console.log(anyFunction("hi", "annu"));
console.log(anyFunction(1, 3));
var k1 = { key: 1, value: "String" };
console.log(k1);
var Empl = /** @class */ (function () {
    function Empl(name) {
        this.name = name;
    }
    Empl.prototype.dispaly = function () {
        console.log(this.name);
    };
    return Empl;
}());
var ee = new Empl("koi");
ee.dispaly();
