const arr = [100, 200, 300, 400, 500, 600, 700];

console.log('1. index(key) 출력');
for (const k in arr) {
  console.log(k);
}

console.log('\n2. element(value) 출력');
for (const k in arr) {
  console.log(arr[k]);
}

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

console.log('\n3. for-in -> obj 이름(키)을 출력');
for (const k in obj) {
  console.log(k);
}

console.log('\n4. for-in -> obj 값을 출력');
for (const k in obj) {
  console.log(obj[k]);
}

console.log('\n5. for-of -> obj 값을 출력', Object.values(obj));
for (const k of Object.values(obj)) {
  console.log(k);
}

Object.defineProperty(obj, 'level', { enumerable: false });
console.log('\n6. level 프로퍼티를 노출금지', Object.entries(obj));

Object.freeze(obj, 'role');
obj.role = 99;
console.log('\n7. role 프로퍼티를 읽기전용', Object.entries(obj));

console.log('----------------------------------');

// p.113
const objarr1 = makeObjectFromArray([
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
]);

console.log(objarr1);
function makeObjectFromArray(arr) {
  // 구현하세요!
  let obj = {};
  for (const i in arr) {
    const [k, ...v] = arr[i];
    obj[k] = v;
  }
  return obj;
}

console.log('----------------------------------');

function makeArrayFromObject(o) {
  let k = [];
  for (const i in o) {
    k.push([i, ...o[i]]);
  }
  return k;
}

console.log('🚀>>  arrobj:', makeArrayFromObject(objarr1));

// -------------------------
console.log('----------------------------------');
const kim = { nid: 3, nm: 'Hong', addr: 'Pusan' };
function copyObject(o) {
  let newObj = {};
  for (const k in o) newObj[k] = o[k];
  return newObj;
}
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr);
console.log(kim.addr, newKim.addr);
