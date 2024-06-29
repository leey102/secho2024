const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

const fx = f2(Math.max);
fx(1, 3, 5, 7);

function f3(f) {
  // function f2(f) 일 때 왜 오류가 나는가? 해결할 것
  // f2(f) -> f에 함수를 받았다. (closure)
  return function (...args) {
    console.log(f.name, f(...args));
  };
}
//  function (...args) {
//      console.log(f.name, f(...args));
//  }  위 코드의 해당 클로져는 f2 가 된다  -> 맨 위의 코드 변형 1번

console.log('---------------------------');
const fns = [Math.max, Math.min, parseInt];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

const af1 = function (...args) {
  console.log(f.name, f(...args));
};
const af2 = (...args) => console.log(f.name, f(...args));

const f22 = function (f) {
  return af2;
}; // -> 맨 위의 코드 변형 2번

//currying

const f = () => () => {};

//const af = () => { };.ㄷ
function af() {}

const ff = () => af;

function zz() {
  // function ff 일 때 왜 오류가 나는가? 해결할 것
  let count = 0;
  return function () {
    return ++count;
  };
}

console.log('--------------------');

const arr = [1, 2, 3, 4, 5];
// const arr = new Array(1,2,3,4,5); >> 위와 같은 것
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
}; // 5.29 오후 1:46분

console.log(arr.first(), arr.last());

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀>> ret2:', ret2);

Array.prototype.mapX = function (f) {
  const rets = [];
  for (let i = 0; i < this.length; i++) {
    rets.push(f(this[i], i, this));
  }
  return rets;
};

const ret3 = arr2.mapX(Number);
console.log('🚀>> ret3:', ret3);
const ret4 = arr2.mapX(parseInt);
console.log('🚀>> ret4:', ret4); // 왜 NaN이 뜨는 거?
