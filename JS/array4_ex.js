//다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오.
// → 배열의 각 요소를 제곱   n => n ** 2            [square]
// → 배열 각 요소의 제곱근   n => Math.sqrt(n)      [sqrt]
// → 배열의 각 요소를 세제곱  n => n ** 3            [cube]
import assert from 'assert';
const arr = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;
let sum = arr.reduce((acc, cur) => [...acc, cube(sqrt(square(cur)))], []);
console.log('🚀 ~ sum:', sum);

//다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
const assert = require('assert');
//            0  1  2  3  4  5  6  7  8
const arr2 = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (first, second) => {
  let sum = arr2.reduce((acc, cur) => {
    if (!isNaN(first) && !isNaN(second)) {
      return arr2.slice(first, second + 1).reduce((acc, cur) => acc + cur);
    } else if (!isNaN(first) || !isNaN(second)) {
      return arr2.slice(first).reduce((acc, cur) => acc + cur);
    } else {
      acc = acc + cur;
      return acc;
    }
  });
  return sum;
};

assert.deepStrictEqual(rangeSum(2, 5), 19);
assert.deepStrictEqual(rangeSum(3, 5), 15);
assert.deepStrictEqual(rangeSum(1, 4), 14);
assert.deepStrictEqual(rangeSum(0, 4), 15);
assert.deepStrictEqual(rangeSum(5, 8), 30);
assert.deepStrictEqual(rangeSum(6, 8), 22);
assert.deepStrictEqual(rangeSum(2, 8), 41);
assert.deepStrictEqual(rangeSum(4, 4), 5);
assert.deepStrictEqual(rangeSum(5), 30);
assert.deepStrictEqual(rangeSum(2), 41);
assert.deepStrictEqual(rangeSum(), 45);
