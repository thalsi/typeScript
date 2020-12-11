//private datatypes
//1.string
//2.number
//3.boolean
//4.any
//5.null
//6.undefind
//7.void
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var s = "dfgfdg";
var n = 4654;
var b = true;
var anys = 5654;
var nulls = null;
var und = undefined;
//user-defind data type
//1.array
//2.tuple
//3.enum
//4.calss
//5.function
//6.interface
//genaric
//Decorations
//null vs undifind
var nuls = null;
console.log(nuls);
console.log(typeof nuls);
var un;
console.log(un);
//Operations
//1.Arthemattic operation
//2.compartion opeartios
//3.logical opeartion
//4.bitwace operation
//5.assement operation 
//6.tany operation
//7.type opertion
//+ - / % * ++ --
//== === != <= >= < >
//&& || !
//= += -= *= /= %=
//?:
//in delete typeof instance of
var person = { name: "ali", age: 345 };
console.log('name' in person);
delete person.age;
console.log(person);
console.log(typeof person);
var arr = [345, 45, 54, 6];
console.log(arr instanceof Array);
//annotation
var obj;
obj = {
    id: 45,
    name: "frery"
};
console.log(obj);
var obj2 = {
    id: null,
    name: ''
};
obj2.id = 45;
obj2.name = 'hi';
console.log(obj2);
var obj3 = {};
obj3.id = 23;
obj3.name = 'roshan';
console.log(obj3);
//array
//array decalartion
//array object
//array in loop
//array passing to function
//array spread operation
var arr1 = [23, 34, 54, 45];
var arr2 = ['df', 'sfdf'];
var arrobj = new Array('hi', 'koi', 'loop');
for (var i in arr1) {
    console.log(arr1[i]);
}
function passingArray(array) {
    console.log(array);
}
passingArray(arr1);
var arrayCopy = __spreadArrays(arr1);
console.log(arrayCopy);
var arr3 = ['fgd', 344, 'sdfdsf', 54, 54, 45, 'fg', 'fg'];
console.log(arr3);
//tuple
//tuple declation
var tuple_name = [12, 'thalsi', 56, 'gfh', 45, 5445, 34];
console.log(tuple_name);
var tuple2 = ['thalsi', 34];
console.log(tuple2);
console.log(tuple_name instanceof Array);
//union
//union decation
//passing parameter
//uniontype array
var unions;
unions = 5344;
unions = 'thalsi';
function myunion(val) {
    console.log(val);
}
myunion(45);
myunion('dfdfs');
var unArr;
unArr = [343, 45, 45, 56];
console.log(unArr);
unArr = ['df', 'dfdf', 'rtr'];
console.log(unArr);
//string
//string decleration
//pre and post(backtick) 
//string literal
var str = 'dfdf';
var str2 = "thalsi";
var str3 = "the are" + str + "" + str2;
var str4 = "thalsi " + str + " are " + str2;
var p;
if (p = 'a') {
    console.log('correct');
    console.log(p);
}
function leteral(val) {
    console.log(val);
}
leteral('a');
leteral('b');
//number 
var num = 45;
//coundition stament 
//if
//if else
//else if
//swich
//while
//do while
//for
//for in 
//for of
var array1 = [23, 45, 56, 67, 78];
for (var data in array1) {
    console.log("data:-" + array1[data] + " index " + data);
}
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var data = array1_1[_i];
    console.log(data);
}
//enum
//number enum
//string enum
//heterogeneous enum
var Status;
(function (Status) {
    Status[Status["active"] = 3] = "active";
    Status[Status["inactive"] = 4] = "inactive";
    Status[Status["stop"] = 5] = "stop";
})(Status || (Status = {}));
console.log(Status);
function myEnum(status) {
    console.log(status);
}
myEnum(Status.stop);
//forEach
var arrayEach = [23, 34, 43, 45, 54];
arrayEach.forEach(function (a) {
    console.log("foreach:-" + a);
});
arrayEach.forEach(function (value) {
    console.log("for each=" + value);
});
//map
// let maps= new Map();
// maps.set(1,'ali');
// maps.set('name','thalsi');
// console.log(maps.get(1));
// console.log(maps.get('name'));
// for(let key in maps.keys()){
//     console.log("key:-"+key);
// }
// for(let val in maps.values()){
//     console.log("value"+val);
// }
//set 
// let studentEntries = new Set();  
// //Add Values  
// studentEntries.add("John");  
// studentEntries.add("Peter");  
// studentEntries.add("Gayle");  
// studentEntries.add("Kohli");   
// studentEntries.add("Dhawan");   
// //Returns Set data  
// console.log(studentEntries);   
//function
function parmmy(a, b) {
    console.log("a" + a + " b" + b);
}
parmmy(2);
parmmy(3, 4);
function respam(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    console.log("a==" + a);
    console.log("b==" + b);
}
respam(23);
respam(100, 3, 4, 56, 6);
var fun = function () {
    return "hiii";
};
console.log(fun());
var arrow = function () { return console.log("hii"); };
var arrow2 = function () { return "koi"; };
console.log(arrow2());
var arrow3 = function () { return "loop"; };
console.log(arrow3());
