function hello() {
  //  console.log('Hello, world!');
  return 'Hello, world!';
}
hello();

function Dog(name) {
  // console.log(this);
  this.name = name;
}

Dog('max');
console.log(this); //module
console.log(globalThis); //module

const lucy = new Dog('Lucy');
console.log('🚀 ~ lucy:', lucy);

function printFnReturnValue(fn) {
  console.log('arguments>>', arguments);
  console.log('fn.name=', fn.name, fn());
}
const ret = printFnReturnValue(hello);
console.log(ret); // ?

function showAge({ age }) {
  console.log('age=', age);
}
const user = { id: 1, age: 33 };
showAge(user);

console.log('========================');
const f1 = function ff(x, isLast) {
  console.log('x =', x);
  if (isLast) return;
  else ff('efg', true);
};

f1(1); // OK
