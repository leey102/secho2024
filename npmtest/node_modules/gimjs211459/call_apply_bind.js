function f() {
  const id = 1;
  //global object (globalThis)
  console.log(this, id);
}

globalThis.id = 'globalThis';
this.id = 'module this';
f();

const f2 = () => console.log('arrowFn.id =', this.id, globalThis.id);
f2();

function f(x, y) {
  const id = 1;
  console.log('🚀 ~ f ~ x, y:', x, y);
  console.log('function.id =', this.id);
}

const user = { id: 1, name: 'Hong' };
const newF = f.bind(user);
newF();
f.call(user);
f.apply(user);
