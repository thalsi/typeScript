//datatype
let num:number=46;
let str:string="thalsi";
let bol:boolean=true;

//array
let array1:string[]=['apple','orange','pinaple'];
let array2:Array<string>=['annu','ammu','ali'];
let multitypeArray:(string | number)[]=['ali',1,3,4,"good"];
let multitypeArray2:Array<string | number>=['aju ', 1 , 23, 'hi'];
for (let i in array1){
    console.log(array1[i]);
}

//tuple
var tuples:[number, string]=[1,"ali"];
var tupleArray:[number,string] []=[[1,"ali"], [2,"ammu"]];

//enum
enum Media{
    newpapper,
    newLetter,
    loveletter,
}

function getFun(name:string):Media{
    if(name== 'newpapper'){
        return Media.loveletter;
    }
}
let mediaType=getFun("newpapper");
console.log(mediaType);

//union
let hi:(number | string);
hi=2443;
hi="koi";
//hi=true;
console.log(hi);

    function callUnion(data:(String | number)){
        console.log(data);
    }
callUnion("hi");
callUnion(12);
//callUnion(true);

let dataAny:any;
dataAny=344;
dataAny="thalsii";
dataAny=true;

let anyArray:any[]=[343,'amal'];

//void
function voidFuction():void{
  return;
}

let datas=voidFuction();
console.log(datas);

//interface
interface User{
    name:string,
    pass:number
}
let user1:User={name:"thalsi",pass:2343};
//let user2:User={n:"thalsi",p:2343};
//let user3:User={name:3545,pass:2343};

let obj={id:1,name:"thlasi",log:true};
function passObj(objPam:{name:string}){
    console.log(objPam.name);
}
passObj(obj);

interface logData{
    id:number,
    name:string,
    log?:boolean
}

function passInterfaces(obj:logData){
    console.log(obj.name);
    
}
let passInter={id:1,name:"name",log:true};
passInterfaces(passInter);
passInterfaces({id:1,name:"koi"});

let em=<logData>{};
em.name="thalsi";
em.id=23;
console.log(em);

//arrow function

let arrow = () =>{
    console.log("arrow function");
    
}
arrow();

let arrow1=(a:number, b:number):number=>{return a+b}
console.log(arrow1(1,7));

//rest parmeter
function green(a:string,...other:string[]){
    return a+other.join("");
}
let valuer=green("koi ", "hi ", " love");
console.log(valuer);


//calss
class Employee{
    empCode:number;
    empName:string;

    constructor(id:number, name:string){
        this.empCode=id;
        this.empName=name;
    }

    getSalary(){
        return 1000;
    }
}
let objEmp=new Employee(1,"thlasi");
console.log(objEmp.getSalary());

class PersonData{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    hi(){
        console.log("hi");
        
    }
}

class FaceBook extends PersonData{
    id:number;
    constructor(id:number, name:string){
        super(name);
        this.id=id;
    }
    allData(){
        return this.name;
    }
}

let face=new FaceBook(23, 'ali muth');

let f=face.allData();
console.log(f);


interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(number)=>number;
}

class Employeess implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
                this.empCode = code;
                this.name = name;
    }

    getSalary(empCode:number):number { 
        return 20000;
    }
}

let emp = new Employeess(1, "Steve");