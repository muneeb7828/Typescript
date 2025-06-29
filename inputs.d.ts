declare function getinfo(): void;
declare const number: (string | number | boolean)[];
declare var object: {
    name: string;
    age: number;
    city: string;
};
declare var userdata: {
    name: string;
    age: number;
    company: string;
};
declare function totalprice(item: number, price: number, text?: string | number): void;
interface info {
    name: string;
    age: number;
    colledge: string;
}
declare var student: info;
interface extrainfo extends info {
    subject: string;
}
declare var student2: extrainfo;
declare var persondata1: {
    name: string;
};
declare var persondata2: {
    age: number;
};
type personA = {
    name: string;
};
type personB = {
    age: Number;
};
type personc = personA & personB;
declare var persondataA: personA;
declare var persondataB: personB;
declare var persondataC: personc;
declare var div: Element;
declare class Product {
    private name;
    price: number;
    pId: number;
    inCart: boolean;
    isOrdered: boolean;
    constructor(name: string, price: number, pId: number);
    addtocart(): void;
    buyProduct(): string;
}
declare var product1: Product;
declare class Order extends Product {
    constructor();
    getprice(): number;
}
declare var order: Order;
declare var obj2: {
    name: string;
    age: number;
    isgraduate: boolean;
    address: string;
};
declare var obj3: {
    name: string;
    age: number;
    isgraduate: boolean;
    address: string;
};
declare class Employee {
    employeename_: string;
    employeeage_: number;
    employeesalary_: number;
    constructor(name: string, age: number, salary: number);
    get employeename(): string;
    set employeename(value: string);
}
declare var employee1: Employee;
declare var employee2: Employee;
interface DepartmentDatatype {
    Deparmentname: string;
    DeparmentId: number;
    DeparmentZone: string;
    Departmentdetails(): void;
}
declare class Department implements DepartmentDatatype {
    Deparmentname: string;
    DeparmentId: number;
    DeparmentZone: string;
    constructor(name: string, deptId: number, DeptZone: string);
    Departmentdetails(): string;
}
declare var deparment1: Department;
declare var deparment2: Department;
declare var deparment3: Department;
declare class Company {
    static name: string;
}
declare var c1: Company;
