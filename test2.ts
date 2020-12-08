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








