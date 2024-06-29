"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myName = 'Lee';
// myName = 'efg'; // Syntax Error
// console.log(a // Syntax Error
// let let wat; // Syntax Error
let s = 'abc';
s = 123;
// s = false; // Type Error
console.log('Hello, World!');
console.log(`Hello, ${myName}!`);
let x;
let y;
y = 123;
y = 'abc';
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());
rocker = 123.45;
console.log(rocker.toPrecision(3));
let firstName;
firstName = 'abcd';
firstName?.toUpperCase();
firstName = false;
console.log(firstName);
const str = 'abc';
const user = { id: 1, name: 'Hong' };
user.addr = 'Seoul';
const emp = {
    id: 1,
    name: 'Kim',
    dept: 'Sales',
};
emp.dept = 12;
const Y = 'y';
let Z = 'x';
Z = 'y';
Z = Y;
let N = 3;
N = 2;
const member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    spend: [1, 2],
};
const guest = {
    name: '김길동',
    age: 28,
    spend: 1,
};
const who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee';
// addr property가 있다라는 것은 Member type!
if ('addr' in who)
    console.log(who.discountRate);
// if (who.hasOwnProperty('addr')) console.log(who.discountRate);
// if (Reflect.has(who, 'addr')) console.log(who.discountRate);
// if (typeof who.spend === 'object') console.log(who.discountRate);
console.log('typeof who.spend=', typeof who.spend);
if (typeof who.spend === 'number') {
    console.log('who.spend.toFixed=', who.spend.toFixed(2));
}
else {
    console.log('who.spend.length=', who.spend.length);
}
let xarr = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr))
    console.log(xarr.length);
let gildong = Math.random() > 0.5 && 'HongGilDong';
if (gildong) {
    gildong.toUpperCase(); // string
}
else {
    // '' | false
    gildong; // false | string
}
let a;
console.log(a?.length);
const hong = { id: 1, name: 'Hong', addr: 'Seoul' };
const users = [hong, { id: 2, name: 'Kim' }];
console.log(users.find((user) => user.id === 3)?.['name']);
function getHong() {
    return { id: 1, name: 'Hong', addr: 'Seoul' };
}
let xuser;
let xemp;
xuser = { id: 1, name: 'Hong' };
// xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; // freshness
xuser = { id: 1, name: 'Hong', addr: 'Seoul' }; // freshness off
xuser = hong; // freshness off
xuser = getHong();
xemp = { id: 1, name: 'Lee', addr: 'Pusan' };
xuser = xemp; // (id, name) <== (id, name, addr) : covariance
// xemp = xuser; // (id, name, addr) <== (id, name) : contravariance
function getX1(obj) {
    return obj.name;
}
function getX2(obj) {
    return obj.name;
}
function ff(f) { }
const xx = { id: 1, name: 'xx', addr: 'xxx', age: 3 };
const introduce = (name, height) => {
    console.log(`이름 : ${name}`);
    // console.log(`키 : ${height ?? 0 + 10}`);
    // if (height) console.log(`키 : ${height + 10}`); // 'x10' or +10
    if (typeof height === 'number')
        console.log(`키 : ${height + 10}`);
    else if (height)
        console.log(`키 : ${height || '' + 10}`); // 'x10'
    // else  console.log(`키 : ${height || '' + 10}`); // 'x10'
    //Error : 'height' is possibly 'undefined'.
};
introduce('김현준'); // OK
introduce('김현준', undefined); // OK
introduce('김현준', 170); // OK
let hh = Math.random() > 0.5 ? 1 : 'x';
if (typeof hh === 'number')
    introduce('김현준', hh); // OK
const introduce3 = (name, age, height) => {
    console.log(`이름 :  ${name}`);
    console.log(`나이 : ${age} 살`);
    if (height) {
        return console.log(`키 ${height + 10}cm`);
    }
};
introduce3('xx', 2);
introduce3('xx', 1, 2);
console.log('------------------');
// (name: string, age: number, height = 0) => void
const introduce4 = (name, age, height = 0) => {
    console.log(`이름 :  ${name}`);
    console.log(`나이 : ${age} 살`);
    console.log(`키 ${height + 10}cm`);
};
introduce4('xx', 2);
introduce4('xx', 1, 2);
function xfn1(x) {
    return x ** 2;
}
var xfn2 = (x) => x ** 2;
console.log('------------------');
function logSong(song) {
    if (!song) {
        return; // OK!  return undefined; 도 OK!
    }
    console.log(`${song}`);
    return true;
}
const test2 = () => 11; // OK!
console.log('------------------');
let songLogger;
songLogger = (song) => {
    console.log(`${song}`);
    return true; // OK
};
// const bb = void(console.log('xxx'))
const b = songLogger('HeartBeat'); // OK
// 구현부
function mul(a, b, c) {
    if (typeof c === 'number')
        return a * b * c;
    return a * b * 1000;
}
console.log(mul(1, 2)); // 마치 다른 함수인 것 처럼
console.log(mul(1, 2, 3));
function fff() {
    console.log(this.x, this.y);
}
const fffx = fff.bind({ x: 'xxx', y: 123 });
fffx();
const yuser = {
    id: 1,
    getId() {
        return this.id;
    },
};
console.log(yuser.getId());
const SIZE = [
    { id: 'XS', price: 8000 },
    { id: 'S', price: 10000 },
    { id: 'M', price: 12000 },
    { id: 'L', price: 14000 },
    { id: 'XL', price: 15000 },
];
const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
const totalPrice = SIZE.reduce((currPrice, size) => currPrice + sizeOption[size.id] * size.price, 0);
console.log('🚀 ~ totalPrice:', totalPrice);
