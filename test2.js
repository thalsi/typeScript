//1.Bulid-in/privative datatpye
//number
var numLnumber = 67;
var num1 = 5.6; //
console.log(num1);
//string
var str = "";
var a = "welcome";
var b = "muvattupzha";
var str1 = a + "" + b;
var str2 = a + " this are " + b;
console.log(str2);
//boolean
var bol = true;
console.log(bol);
//void
var void1 = undefined;
var void2 = null;
console.log(void2);
//null
var null1 = null;
//undefind
var undefind1 = undefined;
if (null1 == undefind1) {
    console.log("null and undefind value are equal");
}
//any
var anyValue = 'hi';
anyValue = 454;
anyValue = true;
function myfunction(a, b) {
    console.log(a + "" + b);
    console.log("thre are " + a + " and " + b);
}
myfunction(3, 4);
myfunction("fast", "second");
// 2.userdefind datatype
//array
var list = [1, 2, 3, 4];
var list1 = [12, 34, 54, 56];
var nameArray = ['a', 'b', 'c'];
var nameArray1 = ['a', 'b', 'c'];
var array3 = [2, 'sdfsdf', 'li', 46, 35, 34];
var array4 = [2, 'sdfsdf', 'li', 46, 35, 34];
//tuple
var tup = [1, "joi"];
//2.varbiles
//var
var x = "hi";
function callfun() {
    var xx = 5;
    if (true) {
        var y = 10;
        console.log(xx);
        console.log(y);
    }
    console.log(xx);
    console.log(y);
}
// console.log(xx); error
// console.log(y); error
callfun();
console.log(thalsi);
var thalsi = 67;
console.log(thalsi);
//const
var contant = 675;
console.log(contant);
//type Operations
var cars = { name: 'm800', age: 45, place: 'muvattupzha' };
//console.log(name in cars);//in
delete cars.name;
console.log(cars); //delete
console.log(typeof cars); //typeof
console.log(cars instanceof Array); //intanceof
console.log(cars instanceof String);
var hotal = {};
hotal.name = "fast";
console.log(hotal);
