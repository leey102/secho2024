function f(x, y) {
  const id = 1;
  console.log('🚀 ~ x y:', x, y);
  // gloabal object(globalthis)
  console.log('function.id=', this.id);
}

globalThis.id = 'globalThis';
this.id = 'module this';
f();

const f2 = () => console.log('this.id=', this.id, globalThis.id);
f2();

const user = { id: 1, name: 'Hong' };
const newF = f.bind(user);
newF(1, 11);
f.apply(user, [3, 33]);
f.call(user, 2, 22);
f.call(globalThis, 4, 44);
f(4, 44);
f2.call(user, 5, 5);
console.log('---------------------------------------');
f2.call(user, 5, 55);
f2.bind(user)();
console.log('---------------------------------------');

const obj = {
  name: 'ObjName',
  bark1() {
    console.log('1=', this.name);
    const self = this;
    setTimeout(function () {
      console.log('11=', self.name);
    }, 1000);
    console.log('xxxx');
  },
  bark2() {
    console.log('2=', this.name);
    setTimeout(() => {
      console.log('22=', this.name);
    }, 1000);
  },
};

obj.bark1();
obj.bark2();
