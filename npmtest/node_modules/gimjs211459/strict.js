'use strict';

console.log('this =', this);
f = 1; // ReferenceError: f is not defined
NaN = 1; // TypeError: Cannot assign to read only property 'NaN' of object

Infinity = 0;
function f(a, a) {
  console.log('outer f');
}
delete f; // error
{
  f(100);
  function f(a) {
    console.log('block f');
  }
}
f(200);

// git hub - 'seocho2024'

('use strict');

console.log('this=', this);

f = 1;
NaN = 1;
console.log(isNaN(NaN));
// Infinity = 0;
// function f(a, a) {
//   console.log('outer f');
// }
// delete f; // error

function f(a) {
  console.log('global.f=', a);
}

{
  f(100);
  function f(a) {
    console.log('block f=', a);
  }
}
f(200);
