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
var div = document.querySelector('.div'); // ye esclamation mark isliye lagaya he taki isme kabhi bhi value null nahi aaye aur jab bhi isko use kare to ? nahi nahi lagana pade
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
