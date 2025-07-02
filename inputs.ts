


function getinfo(){
const usernameInput=document.getElementById("username") as HTMLInputElement
const username:string=usernameInput.value

const emailInput=document.getElementById("email") as HTMLInputElement
const email:string=emailInput.value

const ageInput=document.getElementById("age") as HTMLInputElement
const age:string=ageInput.value
console.log(username,email,age)

}

const number= [1,2,3,4,5,'sdsd',true]
console.log(typeof(number))



var object={
name:'muneeb',
age:24,
city:'bhopal'   
}

var userdata:{name:string,age:number,company:string}={
 name:'hamza',
 age:20,
 company:'mecaps'   
}


function totalprice(item:number,price:number,text?:string|number){
console.log(text,price*item)
}

totalprice(100,20)


// is tarike se interface bana sakte he isse ye fayda rehta he ki ek baar interface banake alag alag object me use kar sakte he

interface info{
    name:string,
    age:number,
    colledge:string,   
}



var student:info={
 name:"muneeb",   
 age:24,
 colledge:"all saints"
}

// isme lekin alag koi key add nahi kar sakte to uske liye interface banake extends karna padta he 

interface extrainfo extends info {
 subject:string   
}

var student2:extrainfo={
name:"hamza",   
age:20,
colledge:"all saints",
subject:"asas"
}

// intersection

var persondata1:{name:string}={name:"muneeb"}   
var persondata2:{age:number}={age:30}

type personA={name:string}
type personB={age:Number}
type personc=personA & personB


var persondataA:personA={name:"muneeb"}   
var persondataB:personB={age:30}
var persondataC:personc={name:"",age:12}


var div=document.querySelector('.div') !   // ye esclamation mark isliye lagaya he taki isme kabhi bhi value null nahi aaye aur jab bhi isko use kare to ?  nahi lagana pade

console.log(div.innerHTML);


// class in ts

class Product{
private name:string
  price:number
  pId:number
  inCart=false
  isOrdered=false
  constructor(name:string,price:number,pId:number){
    this.name=name 
    this.price=price
    this.pId=pId
  }  

  addtocart(){
   this.inCart=true
  }

  buyProduct(){
  if(this.inCart){
   return `product ${this.name} is order in ${this.price}` 
  }
  else{
   return `no product in cart` 
  }
  }

}


var product1=new Product('sumsung',100000,101)

console.log(product1)

// extends class

class Order extends Product{

constructor(){
 super("iphone",40000,100) 
}

getprice(){
 return this.price 
}

}

var order=new Order()
console.log(order.getprice())

// modules

var obj2={
name:"muneeb",
age:24,
isgraduate:true,
address:"idgah hill bhopal" 
}


var obj3={
name:"hamza",
age:20,
isgraduate:false,
address:"shajanabad bhopal" 
}


console.log(typeof obj2)
console.log(typeof obj2)
console.log(typeof obj2)


// getter and setter

class Employee{
       employeename_:string
        employeeage_:number
        employeesalary_:number
  constructor(name:string,age:number,salary:number){
        this.employeename_=name
        this.employeeage_=age
        this.employeesalary_=salary
  }  

  get employeename(){
    return "MR. "+this.employeename_
  }

  set employeename(value:string){
     this.employeename_="emp "+value
  }


}

var employee1=new Employee("muneeb",24,40000)
var employee2=new Employee("hamza",20,41000)

console.log(employee1.employeename)

employee1.employeename="muneeb ur rehman"

console.log(employee1.employeename)


// interface in class
// aur class me isko use karne ke implements keyword ka use karte he


interface DepartmentDatatype{
      Deparmentname:string
      DeparmentId:number
      DeparmentZone:string  
      Departmentdetails():void
}


class Department implements DepartmentDatatype{
       Deparmentname
        DeparmentId
        DeparmentZone
  constructor(name:string,deptId:number,DeptZone:string){
        this.Deparmentname=name
        this.DeparmentId=deptId
        this.DeparmentZone=DeptZone
  }  
  Departmentdetails(){
    console.log(`This is details of ${this.Deparmentname} departmentId = ${this.DeparmentId} departmentZone = ${this.DeparmentZone} `);
    return `This is details of ${this.Deparmentname} departmentId = ${this.DeparmentId} departmentZone = ${this.DeparmentZone} `
  }

}

var deparment1= new Department("HR",100,"bhopal")
var deparment2= new Department("Marketing",101,"indore")
var deparment3= new Department("IT",102,"mumbai")


deparment1.Departmentdetails()
console.log(deparment1.Departmentdetails())


// static keyword

class Company{
 static name:string="Google"
}

var c1 =new Company()

console.log(Company.name);


// typeguard in ts


// by typeof()

var userdata1:number|string|boolean

userdata1='sds'
if(typeof(userdata1)=="boolean"){
  console.log('this is a boolean datatype');
}
else if(typeof(userdata1)=="string"){
console.log('this is a string datatype');
userdata1
}
else{
console.log('this is a number datatype'); 
userdata1
}


// by instanceof()

class Product1 {

}

class Order1 {

}

function checkDetails(data: Order1| Product1){
    if(data instanceof Order1){
      console.log('this is order')
    }
    else{
      console.log('this is product')
    }
}

var p1=new Product1()
var o1=new Order()

checkDetails(p1)


// generic in ts
// ye tab use karte he jab same datatype ki value ko return karna ho
// aur isme T ka matlab he sare datatypes 


function fruits<T>(name:T):T{
return name
}

var onlyfruit=fruits("apple")
var onlynum=fruits(12)


// keyOf operator in ts
// iska use karne se jo type ki jo keys he bas vo hi lega uske alava kuch aur nahi lega matlab name, age, isEmp ye hi likh sakte he

type personT={
name:string,
age:string,
isEmp:true, 
}

type personX=keyof personT

let persondataX:personX="name"


// index signature
// isme kitni bhi keys add kar sakte he


type userdata2={
  name:string,
  age:number,
  mobile:number
  [key:string]:number|string
}

var user1:userdata2={
  name:"muneeb",
  age:24,
  mobile:8269527774,
  address:"idgah hills bhopal"
}



// utility
// ye ts ke andar predefined types hoti jo ke madad karti he types ko manipulate karne me
// isme kya hota he ki jo ham types banate he usme jese ham khali 2 property use karna he ya puri nahi karna aur ya hame usko readonly banana he matlab ke jab object banay tab hi use kar pay baad me add nahi kar pay to iska use karenge

// utility types in ts
// partial, Required, Readonly, Pick,Omit,Exclude,Extract,NamNullable,Record

interface colledgetype{
  name:string,
  location:string,
  students:number,
  branch?:number
}

// partial iska use tab karte he jab hame types saari properties use nahi karni ho
var colledgedata1:Partial<colledgetype>={
  name:'iit delhi',
  location:'delhi',
}

function getcollegedata(data:Partial<colledgetype>){
return data
}

getcollegedata({name:"iit bombay"})


// Required 
// isme optional property bhi deni padti he
function getcollegedata2(data:Required<colledgetype>){
return data
}

getcollegedata2({name:"iit bombay",location:"asasas",students:12,branch:12})


// readonly
// iska use tab karte jab object banay tabhi use karpay baad me add nahi ho

// Omit iska use tab karte jab type ya interface ki koisi property use nahi karni ho to

var colledgedata3:Omit<colledgetype,"students" | "location">={
name:"sdsd",
branch:1212
}

// Exclude 
// iska use karne se jo value type me di vo bhi use nahi kar sakte

type ApiStatus='loading' | 'error' | 'pending' | 'success'     // isme bas ye values hi likh sakte he aur dusri nahi likh sakte

var APICall:Exclude<ApiStatus,'pending'>
APICall='success'

// Extract
// iska use tab karte he jab type kuch values hi chahiye

var APICall2:Extract<ApiStatus,'loading' | 'success'>
APICall2="success"


type RandomType=string | number | undefined | null | string[] 

// NonNullable iska use tab karte he jab null ya undefined nahi rakhna ho
var randomData:NonNullable<RandomType>


// Record
// iska use tab karte he jab types ki values ko bhi object ki keys banani ho

type siteRole="Admin" | "user" | 'guest'

var RollName:Record<siteRole,string>={
  Admin:"sasas",
  user:"asas",
  guest:'asas' 
}


// namespace
// iska use code ki logical grouping ke liye karte he
// matlab agar same name se function ya class he to use karte he taki call kare to koi issue nahi aay
// aur isko export karte he
// air isko dusri file me bhi use kar sakte he

namespace UserNamespace{

export class Auth{
 login(){
  console.log('user login funtion')
 } 
}


export function getList(){
  console.log('list of users')
}

}

var user3=new UserNamespace.Auth()
user3.login()
UserNamespace.getList()


// decorators
// isme bhi decorators python ki tarah hote he isme bhi jab class ya function banate he to uske uper decorator laga dete he jisse us class ya function ka control us decorator ke paas ajata he
// aur jis bhi class ya function ke uper lagate he uska name dekh sakte he


function classlogger(constructor:Function){       // ye constructor class ke liye hota he
console.log(constructor.name)

}

function getkeydetails(target:any,key:any){       // ye key class ki property ke liye hota he
console.log(key)

}


@classlogger
class CustomMaths{

  @getkeydetails
  value1:number
  value2:number
  constructor(x:number,y:number){
    this.value1=x
    this.value2=y
}

}

var cm1=new CustomMaths(10,20)


// use decorator to overwrite functions




















