
//private datatypes
//1.string
//2.number
//3.boolean
//4.any
//5.null
//6.undefind
//7.void

let s:string="dfgfdg";
let n:number=4654;
let b:boolean=true;
let anys:any=5654;
let nulls:number=null;
let und:string=undefined;

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

let nuls:string=null;
console.log(nuls);
console.log(typeof nuls);
let un;
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

let person={name:"ali",age:345};
console.log('name' in person);
delete person.age;
console.log(person);
console.log(typeof person);
let arr:number[]=[345,45,54,6];
console.log(arr instanceof Array);

//annotation
let obj:{
    id:number;
    name:string
}
obj={
    id:45,
    name:"frery"
}
console.log(obj);

let obj2={
    id:null,
    name:''
}
obj2.id=45;
obj2.name='hi';
console.log(obj2);

interface User{
    id:number;
    name:string;
}
let obj3=<User>{};
obj3.id=23;
obj3.name='roshan';
console.log(obj3);

//array
//array decalartion
//array object
//array in loop
//array passing to function
//array spread operation
let arr1:number[]=[23,34,54,45];
let arr2:Array<string>=['df','sfdf'];

let arrobj:string[]=new Array('hi', 'koi', 'loop');

for(let i in arr1){
    console.log(arr1[i]);
}
function passingArray(array:number[]){
    console.log(array);
}
passingArray(arr1);

let arrayCopy=[...arr1];
console.log(arrayCopy);

let arr3:(number|string)[]=['fgd',344,'sdfdsf',54,54,45,'fg','fg'];
console.log(arr3);

//tuple
//tuple declation
let tuple_name=[12,'thalsi',56,'gfh',45,5445,34];
console.log(tuple_name);
let tuple2:[string,number]=['thalsi',34];
console.log(tuple2);
console.log(tuple_name instanceof Array);

//union
//union decation
//passing parameter
//uniontype array
let unions:number|string;
    unions=5344;
    unions='thalsi';
function myunion(val:(number|string)){
    console.log(val);
    
}
myunion(45);
myunion('dfdfs');

let unArr:string[]|number[];
unArr=[343,45,45,56];
console.log(unArr);
unArr=['df','dfdf','rtr'];
console.log(unArr);

//string
//string decleration
//pre and post(backtick) 
//string literal

let str:string='dfdf';
let str2:string="thalsi";

let str3:string="the are"+str+""+str2;
let str4:string=`thalsi ${str} are ${str2}`;
type str5='a'|'b';
let p:str5;

if(p='a'){
    console.log('correct');
    console.log(p);
    
}

type str6='a'|'b';
function leteral(val:str6){
    console.log(val);
    
}
leteral('a');
leteral('b');

//number 

let num:number=45;

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
let array1:number[]=[23,45,56,67,78];
for(let data in array1){
    console.log(`data:-${array1[data]} index ${data}`); 
}
for(let data of array1){
    console.log(data);
}
//enum
//number enum
//string enum
//heterogeneous enum
enum Status{
    active=3,
    inactive,
    stop
}
console.log(Status);

function myEnum(status:Status){
    console.log(status);
    
}
myEnum(Status.stop);


//forEach

let arrayEach:number[]=[23,34,43,45,54];

arrayEach.forEach(a=>{
    console.log("foreach:-"+a);
    
});
arrayEach.forEach(function (value){
    console.log("for each="+value);
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

function parmmy(a:number,b?:number){
console.log(`a${a} b${b}`);

}
parmmy(2);
parmmy(3,4);

function respam(a:number,...b:number[]){
    console.log("a=="+a);
    console.log("b=="+b);
}

respam(23);
respam(100,3,4,56,6);

var fun=function (){
    return "hiii";
}
console.log(fun());

let arrow=()=>console.log("hii");
let arrow2=()=> "koi";
console.log(arrow2());
let arrow3=()=>{return "loop"};
console.log(arrow3());


// class

class Student{
    id:number;
    name:string;
    user:string;
    constructor(a:string){
        this.user=a;
    }

    dispaly(){
        return this.name+this.user;
    }
}

let obje=new Student("akil");

obje.id=45;
obje.name="koi";
let values=obje.dispaly();
console.log("calss------->"+values);

//inhartances

class Car{
    carName:string;
    constructor(a:string){
        this.carName=a;
    }
}

class CarModel extends Car{
    constructor(a:string){
            super(a);
    }
    dis(){
        return this.carName;
    }
}

let car=new CarModel("bmw");
console.log(car.dis());

// interface

interface Empolyee{
    id:number;
    name:string;
    salay?:number;
}
let emp:Empolyee={id:23,name:'alimon'};
let emp1:Empolyee={id:45,name:'thlasi',salay:4000};


function empData(a:Empolyee):Empolyee{
    return {id:243,name:'hi'};
}
empData({id:12,name:'annu',salay:45});

interface U{
    id:number;
}

interface Us extends U{
    code:number;
}

let emp3=<Us>{};
emp3.id=34;
emp3.code=56;
console.log(emp3);

//module

//ganric
function myfunction<T>(params:T):T {
    return params;
}
let output1=myfunction<string>('string');
console.log(output1);

function myganric<T>(item:T[]):T[]{
    return new Array<T>().concat(item);
}

let arrNumber=myganric<number>([23,3,43]);

function getItems(items: any[] ) : any[] {  
    return new Array().concat(items);  
}  
let myNumArr = getItems([10, 20, 30]);  
let myStrArr = getItems(["Hello", "JavaTpoint"]);  