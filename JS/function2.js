const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));
const fx = f2(Math.max);
fx(1, 3, 5, 7);

function samef2(f) {
  return function (...args) {
    console.log('samfe>>', f.name, f(...arge));
  };
}
console.log('---------------------');
const fns = [Math.max, Math.min, parseInt];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

const af1 = function (...args) {
  console.log(f.name, f(...args));
};
const af2 = function (...args) {
  console.log(f.name, f(...args));
};
const af3 = function (...args) {
  console.log(f.name, f(...args));
};

console.log('=====================');

const arr = [1, 2, 3, 4, 5];
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log(arr.first(), arr.last());

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀 ~ ret2:', ret2);

Array.prototype.mapX = function (f) {
  const rets = [];
  for (let i = 0; i < this.length; i++) {
    //rets.push(f(this[i], i, this));
    rets.push(f(this[i]));
  }
  return rets;
};

const rets3 = arr2.mapX(Number);
console.log('🚀 ~ rets3:', rets3);
const rets4 = arr2.mapX(parseInt);
console.log('🚀 ~ rets4:', rets4);
