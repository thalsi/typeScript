//1.Bulid-in/privative datatpye

//number
let numLnumber=67;
let num1:number=5.6;//
console.log(num1);

//string
let str:string="";
let a:string="welcome";
let b:string="muvattupzha";
let str1:string=a+""+b;
let str2:string=`${a} this are ${b}`;
console.log(str2);

//boolean
let bol:boolean=true;
console.log(bol);

//void
let void1:void=undefined;
let void2:void=null;
console.log(void2);

//null
let null1:string=null;

//undefind
let undefind1:string=undefined

if(null1==undefind1){
    console.log("null and undefind value are equal");}

//any
let anyValue:any='hi';
anyValue=454;
anyValue=true;    
function myfunction(a:any, b:any){
    console.log(a+""+b);
    console.log(`thre are ${a} and ${b}`);
}
myfunction(3,4);
myfunction("fast","second");

// 2.userdefind datatype

//array
let list:number[]=[1,2,3,4];
let list1:Array<number>=[12,34,54,56];
let nameArray:string[]=['a','b','c'];
let nameArray1:Array<string>=['a','b','c'];
let array3:(number|string)[]=[2,'sdfsdf','li',46,35,34];
let array4:Array<number|string>=[2,'sdfsdf','li',46,35,34];
//tuple
let tup:[number, string]=[1,"joi"];

interface User{
    name:string,
}

