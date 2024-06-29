const map1 = new Map();
map1.set('A', 65);
map1.set('B', 66);
map1.set('A', 68);
map1.delete('B');
console.log('🚀 ~ map1:', map1);
console.log('🚀 ~ map1:', [...map1.keys()]);

const map2 = new Map([
  [1, 11],
  [2, 22],
]);
console.log('🚀 ~ map2:', map2);
console.log('🚀 ~ map2:', [...map2.keys()]);

const s2 = new Set([1, 2, 1, 2, 3, 5, 5, 3]);
console.log('🚀 ~ s2:', s2);

const arr = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr);
console.log('🚀 ~ s3:', s3);
const ret = [...s3];
console.log('🚀 ~ ret:', ret);

console.log('정답=>', [...s3]);
