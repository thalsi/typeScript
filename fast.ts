/*
========================= Data types =======================
1.static 
2.user defind
3.decater
*/

/*
1.Satic
    1.built in/privative 
        1.number
        2.string
        3.boolean
        4.null
        5.void
*/ 


let num:number=2343;//number

let str:string='hello';//string
let str1:string='hello'+str+'wrold';//before-es6
let str2:string=`she doesnt have ${str}`;//after-es6

let bool:boolean=true;//boolean

let voide:void=undefined;//void
let void1:void=null;
let void2:void;
console.log(void1);

/*
1.User defind data type
    1.array
    2.function
    3.enum
    4.touple
    5.calss
    6.interface
*/ 

let arr:number[]=[12,23,45];
let arr1:string[]=['hi','eee','dsf'];
let arr2:Array<number>=[23,23,54,45];
let arr3:number[];
arr3=[2423,432,43,243];
console.log(arr3);


function hello(){
    return "hello world function";
}
console.log(hello());





