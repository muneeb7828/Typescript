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
