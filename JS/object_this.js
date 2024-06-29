globalThis.name = 'GLOBAL';
this.name = 'MODULE';
let obj = {
  name: 'OBJ',
  f1: function () {
    console.log('f1=', this.name);
  },
  f2: () => {
    console.log('f2=', this.name);
  },
  f3() {
    console.log('f2=', this.name);
  },
};

obj.f1();
obj.f2(); // arrow function
obj.f3();
const nm = obj.name;
console.log('--------------', nm);
const f11 = obj.f1;
const f22 = obj.f2;
const f33 = obj.f3;
f11();
f22();
f33();

//Object.getPrototypeOf(obj).__proto__.f3();

class Dog {
  f1() {
    console.log('Dog.f1', this.name);
  }
}
Dog.prototype.f1();

function f9() {
  this.x = 'F9NAME';
  console.log('f9>>', f9.name, this.x, new.target);
}

f9();
console.log('globalThis.x>>', globalThis.x);

console.log('======================');
const nine = new f9();
console.log('+++++++++++++++++++++', nine.x);
