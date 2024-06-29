let i = 1;
console.log('i =', i); // error

var x;
console.log('x =', x);
x = 1;

console.log(ff, f);
// f(); //error
{
  f();
  var x = 2;
  function f() {
    console.log('f> ', x, xx);
  }
  const b = 1;
}
function ff() {
  console.log('ff>', y);
}
if (x >= 2) {
  var y = 5;
  let yy = 55;
}
var xx = 100;
ff();

let t = 5;
console.log(10 + -t * 2);
console.log(-10 * -t * -2);
console.log((10 / -t) * -2);
console.log(2 ** (3 ** 2));
console.log(t++, ++t);

const u = 5;
console.log(u > 1 ? 'Plural' : 'Singular');

// let a = 1, b = 2; -> let a = 1; let b = 2;
let a = 1,
  b = 2;

//for(i = 0; i < 10; i++) {
//    console.log(i);
//}

let c = (a++, b++);
console.log('c =', c, a, b);
// c = 2 2 3 (b++의 리턴값이 돌기전 b값을 주기 때문에 c = 2) -> 아래 2 false 3 에 대한 해답(?)
let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

const T = true;
const F = false;
let z = 1;
console.log(T || z++, T && z++, z);
console.log(T && z++, F && z++, z); // p42   2 false 3 (왜?)

console.log('------------------------------');
// const first = 'Uncle';
// const last = 'Bob';
// if (first) {
//    console.log(first);
//}
// console.log(last);

// let fullName = first ? first + ' ' : '';
// fullName = fullName + last;
// console.log('fullName =', fullName);
// console.log(`${first} ${last}`);
// console.log(`${first}${first ? ' ' : ''}${last}`);   ---> good
//console.log(`${first}${first && ' '}${last}`);        ---> best

const first = '',
  last = 'Bob';
console.log(`${first}${last}`);
