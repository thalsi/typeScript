let num:number =34;
let str:string ="hello";
let bool:boolean= false;
let voide:void=undefined;
let numbe:number=null;
let list:Array<number>=[1, 2, 3];
let mulList:Array<string | number>=[1,3,"koi",4];
let toul: [string,number] =["koi",1];
let emplly:[number, string][] =[[1,"ammu"],[2,"lop"],[3,"tha"]];
enum color{
    red=3,green,blue
};
let union_1:(string | number);

console.log(num);
console.log(str);
console.log(bool);
console.log(voide);
console.log(numbe);
voide =null;
console.log(voide);
console.log("numrical array-->"+list);
console.log("multple data type array-->"+mulList);
console.log(toul);
console.log("employ are tuple--->"+emplly);
console.log("print enum---->"+color.red);
union_1="thalsi";
console.log("print union----->"+union_1);
union_1=123;
console.log("print union------>"+union_1);

function hello(){
    console.log('koi');
    return "hello world";
}
console.log(hello());

function voidFun():void{
    console.log("voide Fuction");
}
console.log(voidFun());
let a=null;
let b=undefined;
if(a==b){
    console.log("undefind and null are equal-->"+a+"="+b);
}

let anyV:any;
anyV="string";
console.log(anyV);
anyV=213;
console.log(anyV);

function anyFunction(a:any, b:any){
    return a+b;
}

console.log(anyFunction("hi","annu"));
console.log(anyFunction(1, 3));

interface keyPair{
    key:number;
    value:string;
}

let k1:keyPair={ key:1, value:"String"};
console.log(k1);

interface Person{
    name:string;
    dispaly():void;
}

class Empl implements Person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    dispaly(){
        console.log(this.name);
    }
}
let ee:Person = new Empl("koi");
ee.dispaly();