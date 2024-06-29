let i = 1;
console.log(i); // error
console.log('x=', x);
var x = 1;
console.log(ff, f);
// f(); // error
{
  f();
  var x = 2;
  function f() {
    console.log('f>', x, xx);
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

// git hub - 'seocho2024'

let i;
var x = undefined;
f = undefined;
function ff() { console.log('ff>', y, yy); }
var y = undefined;
var xx = undefined;

console.log(i); // ReferenceError: Cannot access 'i' before initialization
i = 1;
console.log('x=', x); // x= undefined
x = 1;
console.log(ff, f);   // [Function: ff], undefined
f();      // TypeError: f is not a function
{
  function f() { console.log('f>', x, xx); }  // 여기서 <f.o> 할당!!
  const b;
  f();      // 1, undefined (:LexicalScope)
  x = 2; b = 1;
}
if (x > 2) {
  // let yy = <unInitializedYet>;
  let yy;
  y = 5;
  yy = 55;
}
xx = 100;
ff();  // ReferenceError: yy is not defined 