"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
// typeguard in ts
// by typeof()
var userdata1;
userdata1 = 'sds';
if (typeof (userdata1) == "boolean") {
    console.log('this is a boolean datatype');
}
else if (typeof (userdata1) == "string") {
    console.log('this is a string datatype');
    userdata1;
}
else {
    console.log('this is a number datatype');
    userdata1;
}
// by instanceof()
class Product1 {
}
class Order1 {
}
function checkDetails(data) {
    if (data instanceof Order1) {
        console.log('this is order');
    }
    else {
        console.log('this is product');
    }
}
var p1 = new Product1();
var o1 = new Order();
checkDetails(p1);
// generic in ts
// ye tab use karte he jab same datatype ki value ko return karna ho
// aur isme T ka matlab he sare datatypes 
function fruits(name) {
    return name;
}
var onlyfruit = fruits("apple");
var onlynum = fruits(12);
let persondataX = "name";
var user1 = {
    name: "muneeb",
    age: 24,
    mobile: 8269527774,
    address: "idgah hills bhopal"
};
// partial iska use tab karte he jab hame types saari properties use nahi karni ho
var colledgedata1 = {
    name: 'iit delhi',
    location: 'delhi',
};
function getcollegedata(data) {
    return data;
}
getcollegedata({ name: "iit bombay" });
// Required 
// isme optional property bhi deni padti he
function getcollegedata2(data) {
    return data;
}
getcollegedata2({ name: "iit bombay", location: "asasas", students: 12, branch: 12 });
// readonly
// iska use tab karte jab object banay tabhi use karpay baad me add nahi ho
// Omit iska use tab karte jab type ya interface ki koisi property use nahi karni ho to
var colledgedata3 = {
    name: "sdsd",
    branch: 1212
};
var APICall;
APICall = 'success';
// Extract
// iska use tab karte he jab type kuch values hi chahiye
var APICall2;
APICall2 = "success";
// NonNullable iska use tab karte he jab null ya undefined nahi rakhna ho
var randomData;
var RollName = {
    Admin: "sasas",
    user: "asas",
    guest: 'asas'
};
// namespace
// iska use code ki logical grouping ke liye karte he
// matlab agar same name se function ya class he to use karte he taki call kare to koi issue nahi aay
// aur isko export karte he
// air isko dusri file me bhi use kar sakte he
var UserNamespace;
(function (UserNamespace) {
    class Auth {
        login() {
            console.log('user login funtion');
        }
    }
    UserNamespace.Auth = Auth;
    function getList() {
        console.log('list of users');
    }
    UserNamespace.getList = getList;
})(UserNamespace || (UserNamespace = {}));
var user3 = new UserNamespace.Auth();
user3.login();
UserNamespace.getList();
// decorators
// isme bhi decorators python ki tarah hote he isme bhi jab class ya function banate he to uske uper decorator laga dete he jisse us class ya function ka control us decorator ke paas ajata he
// aur jis bhi class ya function ke uper lagate he uska name dekh sakte he
function classlogger(constructor) {
    console.log(constructor.name);
}
function getkeydetails(target, key) {
    console.log(key);
}
let CustomMaths = (() => {
    let _classDecorators = [classlogger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _value1_decorators;
    let _value1_initializers = [];
    let _value1_extraInitializers = [];
    var CustomMaths = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _value1_decorators = [getkeydetails];
            __esDecorate(null, null, _value1_decorators, { kind: "field", name: "value1", static: false, private: false, access: { has: obj => "value1" in obj, get: obj => obj.value1, set: (obj, value) => { obj.value1 = value; } }, metadata: _metadata }, _value1_initializers, _value1_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CustomMaths = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        value1 = __runInitializers(this, _value1_initializers, void 0);
        value2 = __runInitializers(this, _value1_extraInitializers);
        constructor(x, y) {
            this.value1 = x;
            this.value2 = y;
        }
    };
    return CustomMaths = _classThis;
})();
var cm1 = new CustomMaths(10, 20);
// use decorator to overwrite functions
