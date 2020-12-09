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
//userdefind data type
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
