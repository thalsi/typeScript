var a:boolean=true;
var b:boolean=false;
var n:number=45;
var s:string="hello world";
var se:string='hello world';
console.log(a);
console.log(b);
console.log(n);
console.log(s);
console.log(se);
console.log("got are new "+`${se}`);
console.log("hi"+"\n"+"age");

var list:number[]=[1, 2, 3, 4];
console.log(list+"\n"+list[0]);

var tupe:[number,string]=[1, "ali"];
var tupeList:[number,string, number, string]=[1, "ammu", 2, "annu"];
console.log("tuple--->"+tupe);
console.log(tupe[0]);
console.log(tupe[1]);

console.log("tupleList---->"+tupeList);

enum color{
    bule,
    green,
    red
}
console.log(color);
console.log(color[2]);
console.log(color.green);
let e:color=color.green;
console.log("--------"+e);
var un:unknown="say,hi";
console.log(un)
un=35;
console.log(un);

let ab:any=676;
ab="fdg";
console.log(ab);
