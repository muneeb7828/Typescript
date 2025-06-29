


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












