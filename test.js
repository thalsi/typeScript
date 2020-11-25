var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//datatype
var num = 46;
var str = "thalsi";
var bol = true;
//array
var array1 = ['apple', 'orange', 'pinaple'];
var array2 = ['annu', 'ammu', 'ali'];
var multitypeArray = ['ali', 1, 3, 4, "good"];
var multitypeArray2 = ['aju ', 1, 23, 'hi'];
for (var i in array1) {
    console.log(array1[i]);
}
//tuple
var tuples = [1, "ali"];
var tupleArray = [[1, "ali"], [2, "ammu"]];
//enum
var Media;
(function (Media) {
    Media[Media["newpapper"] = 0] = "newpapper";
    Media[Media["newLetter"] = 1] = "newLetter";
    Media[Media["loveletter"] = 2] = "loveletter";
})(Media || (Media = {}));
function getFun(name) {
    if (name == 'newpapper') {
        return Media.loveletter;
    }
}
var mediaType = getFun("newpapper");
console.log(mediaType);
//union
var hi;
hi = 2443;
hi = "koi";
//hi=true;
console.log(hi);
function callUnion(data) {
    console.log(data);
}
callUnion("hi");
callUnion(12);
//callUnion(true);
var dataAny;
dataAny = 344;
dataAny = "thalsii";
dataAny = true;
var anyArray = [343, 'amal'];
//void
function voidFuction() {
    return;
}
var datas = voidFuction();
console.log(datas);
var user1 = { name: "thalsi", pass: 2343 };
//let user2:User={n:"thalsi",p:2343};
//let user3:User={name:3545,pass:2343};
var obj = { id: 1, name: "thlasi", log: true };
function passObj(objPam) {
    console.log(objPam.name);
}
passObj(obj);
function passInterfaces(obj) {
    console.log(obj.name);
}
var passInter = { id: 1, name: "name", log: true };
passInterfaces(passInter);
passInterfaces({ id: 1, name: "koi" });
var em = {};
em.name = "thalsi";
em.id = 23;
console.log(em);
//arrow function
var arrow = function () {
    console.log("arrow function");
};
arrow();
var arrow1 = function (a, b) { return a + b; };
console.log(arrow1(1, 7));
//rest parmeter
function green(a) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return a + other.join("");
}
var valuer = green("koi ", "hi ", " love");
console.log(valuer);
//calss
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.empCode = id;
        this.empName = name;
    }
    Employee.prototype.getSalary = function () {
        return 1000;
    };
    return Employee;
}());
var objEmp = new Employee(1, "thlasi");
console.log(objEmp.getSalary());
var PersonData = /** @class */ (function () {
    function PersonData(name) {
        this.name = name;
    }
    PersonData.prototype.hi = function () {
        console.log("hi");
    };
    return PersonData;
}());
var FaceBook = /** @class */ (function (_super) {
    __extends(FaceBook, _super);
    function FaceBook(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    FaceBook.prototype.allData = function () {
        return this.name;
    };
    return FaceBook;
}(PersonData));
var face = new FaceBook(23, 'ali muth');
var f = face.allData();
console.log(f);
