let i;
console.log('i=', i, x); // error
i = 1;
// let i = 1;  // error
console.log('x=', x);
var x = 1;

function getUserName(user) {
  return user.name;
}

var hong = { id: 1, name: 'Hong' };
getUserName(hong);

getUserName({ id: 1, name: 'Hong' });

console.log('-------------------');

let a = 1;
let b = 2;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//const c = (a++, b++);
let c = ((a = a + 1), (b = b + 1));
console.log('c =', c, a, b);

let d = (a--, b + a);
console.log('d =', d, a, b);

d = void (c = a + b); // void 뒤에 할당 연산자는 다 씹힘
console.log(a, b, c, d); // ?

let g = [],
  h = ' ',
  j = 'false',
  k = '0';
console.log(g ? 'T' : 'F', !!h, !!j, !!k);

console.log('----------------');
const first = '';
const last = 'Bob';
console.log(`${first} ${last}`);
