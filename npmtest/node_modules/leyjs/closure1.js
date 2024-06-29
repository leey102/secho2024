function f() {
  let count = 10;
  return {
    //count: count,
    count,
  };
}

const x = f();
console.log('🚀 ~ x.count:', x.count);

function f2() {
  let count = 0;
  return function Y() {
    count += 1;
    return count;
  };
}

const y = f2();
const z = f2();
console.log('🚀 ~ y:', y);
console.log('🚀 ~ ycount', y());
console.log('🚀 ~ ycount', y());
console.log('🚀 ~ zcount', z());
