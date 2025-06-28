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


var div=document.querySelector('.div') !   // ye esclamation mark isliye lagaya he taki isme kabhi bhi value null nahi aaye aur jab bhi isko use kare to ? nahi nahi lagana pade

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





