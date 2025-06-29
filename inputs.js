"use strict";
function getinfo() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(username, email, age);
}
const number = [1, 2, 3, 4, 5, 'sdsd', true];
console.log(typeof (number));
var object = {
    name: 'muneeb',
    age: 24,
    city: 'bhopal'
};
var userdata = {
    name: 'hamza',
    age: 20,
    company: 'mecaps'
};
function totalprice(item, price, text) {
    console.log(text, price * item);
}
totalprice(100, 20);
var student = {
    name: "muneeb",
    age: 24,
    colledge: "all saints"
};
var student2 = {
    name: "hamza",
    age: 20,
    colledge: "all saints",
    subject: "asas"
};
// intersection
var persondata1 = { name: "muneeb" };
var persondata2 = { age: 30 };
var persondataA = { name: "muneeb" };
var persondataB = { age: 30 };
var persondataC = { name: "", age: 12 };
var div = document.querySelector('.div'); // ye esclamation mark isliye lagaya he taki isme kabhi bhi value null nahi aaye aur jab bhi isko use kare to ?  nahi lagana pade
console.log(div.innerHTML);
// class in ts
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addtocart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is order in ${this.price}`;
        }
        else {
            return `no product in cart`;
        }
    }
}
var product1 = new Product('sumsung', 100000, 101);
console.log(product1);
// extends class
class Order extends Product {
    constructor() {
        super("iphone", 40000, 100);
    }
    getprice() {
        return this.price;
    }
}
var order = new Order();
console.log(order.getprice());
// modules
var obj2 = {
    name: "muneeb",
    age: 24,
    isgraduate: true,
    address: "idgah hill bhopal"
};
var obj3 = {
    name: "hamza",
    age: 20,
    isgraduate: false,
    address: "shajanabad bhopal"
};
console.log(typeof obj2);
console.log(typeof obj2);
console.log(typeof obj2);
// getter and setter
class Employee {
    employeename_;
    employeeage_;
    employeesalary_;
    constructor(name, age, salary) {
        this.employeename_ = name;
        this.employeeage_ = age;
        this.employeesalary_ = salary;
    }
    get employeename() {
        return "MR. " + this.employeename_;
    }
    set employeename(value) {
        this.employeename_ = "emp " + value;
    }
}
var employee1 = new Employee("muneeb", 24, 40000);
var employee2 = new Employee("hamza", 20, 41000);
console.log(employee1.employeename);
employee1.employeename = "muneeb ur rehman";
console.log(employee1.employeename);
class Department {
    Deparmentname;
    DeparmentId;
    DeparmentZone;
    constructor(name, deptId, DeptZone) {
        this.Deparmentname = name;
        this.DeparmentId = deptId;
        this.DeparmentZone = DeptZone;
    }
    Departmentdetails() {
        console.log(`This is details of ${this.Deparmentname} departmentId = ${this.DeparmentId} departmentZone = ${this.DeparmentZone} `);
        return `This is details of ${this.Deparmentname} departmentId = ${this.DeparmentId} departmentZone = ${this.DeparmentZone} `;
    }
}
var deparment1 = new Department("HR", 100, "bhopal");
var deparment2 = new Department("Marketing", 101, "indore");
var deparment3 = new Department("IT", 102, "mumbai");
deparment1.Departmentdetails();
console.log(deparment1.Departmentdetails());
// static keyword
class Company {
    static name = "Google";
}
var c1 = new Company();
console.log(Company.name);
