//p.145 다음을 수행하시오.
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
console.log(arr2.slice(1, 3));
// ex2) [3]부터 모두 다 추출
console.log(arr2.slice(2));
// ex3) [2,3,4] 제거하기
arr2.splice(1, 3);
console.log(arr2);
// ex4) 복원하기
arr2.splice(1, 0, 2, 3, 4);
console.log(arr2);
// ex5) [3] 부터 끝까지 제거하기
arr2.splice(2);
console.log(arr2);
// ex6) 복원하기
arr2.splice(2, 0, 3, 4, 5);
console.log(arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
arr2.splice(2, 1, 'X', 'Y', 'Z');
console.log(arr2);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
arr2.splice(2, 3, 3); //초기화
arr2.pop();
arr2.pop();
arr2.pop();
arr2.push('X', 'Y', 'Z', 4, 5);
console.log(arr2);

//p.147 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
console.log('----------------------------');
var assert = require('assert');
const arr = [1, 2, 3, 4];
const push = (arr, ...data) => {
  return [...arr, ...data];
};

// const push = (() => {
//   let res = [];
//   return (arr, ...data) => {
//     res = [...arr];
//     for (const i of data) {
//       res.push(i);
//     }
//     return res;
//   };
// })();

const pop = (arr, data) => {
  let res = [];
  let res2 = [...arr];
  if (!!data === false) {
    return [...arr].pop();
  } else {
    while (data > 0) {
      res.push(res2.pop());
      data--;
    }
    return res.reverse();
  }
};

// const pop = (() => {
//   let res = [];
//   let res2 = [];
//   return (arr, data) => {
//     res = [...arr];
//     if (!!a === false) {
//       return res.pop();
//     } else {
//       while (data > 0) {
//         res2.push(res.pop());
//         a--;
//       }
//       res2.reverse();
//       return res2;
//     }
//   };
// })();

const unshift = (arr, ...data) => {
  let res = [...arr];
  if (data.length === 1) {
    res.unshift(data.pop());
  } else {
    data.reverse();
    for (const i of data) {
      res.unshift(i);
    }
  }
  return res;
};

// const unshift = (() => {
//   let res = [];
//   return (arr, ...data) => {
//     res = [...arr];
//     if (data.length === 1) {
//       res.unshift(data.pop());
//     } else {
//       .reverse();
//       for (const i of data) {
//         res.unshift(i);
//       }
//     }
//     return res;
//   };
// })();

const shift = (arr, data) => {
  let res = [...arr];
  if (!!data === false) {
    res.shift();
  } else {
    while (data > 0) {
      res.shift();
      data--;
    }
  }
  return res;
};

// const shift = (() => {
//   return (arr, data) => {
//     let res = [...arr];
//     if (!!data === false) {
//       res.shift();
//     } else {
//       while (data > 0) {
//         res.shift(data);
//         data--;
//       }
//     }
//     return res;
//   };
// })();

//console.log(arr);
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

//p.148다음과 같은 deleteArray와 deleteObjectArray를 순수 함수로 작성하시오.
const deleteArray = (arr, ...data) => {
  let res = [...arr];
  if (data.length === 1) {
    res.splice(data);
  } else {
    res.splice(res.indexOf(data[0]) + 1, data[1] - data[0]);
  }
  return res;
};

// const deleteArray = (() => {
//   let res = [];
//   return (arr, ...data) => {
//     res = [...arr];
//     if (data.length === 1) {
//       res.splice(data);
//     } else {
//       res.splice(res.indexOf(data[0]) + 1, data[1] - data[0]);
//     }
//     return res;
//   };
// })();

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); // 2부터 몽땅 지워!
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]); // 1부터 3 앞까지 지워!
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
var users = [Hong, Kim, Lee];

const deleteObjectArray = (arr, ...data) => {
  let res = [...arr];
  if (data.length === 1) {
    res.splice(data);
  } else if (isNaN(data[0])) {
    res.splice(
      res.findIndex((a) => {
        return eval(`a` + `.` + data[0]) === data[1];
      }),
      1
    );
  } else {
    res.splice(data[0], data[1] - 1);
  }
  return res;
};

// const deleteObjectArray = (() => {
//   let res = [];
//   return (arr, ...data) => {
//     res = [...arr];
//     if (data.length === 1) {
//       res.splice(data);
//     } else if (isNaN(data[0])) {
//       res.splice(
//         res.findIndex((a) => {
//           return eval(`a` + `.` + data[0]) === data[1];
//         }),
//         1
//       );
//     } else {
//       res.splice(data[0], data[1] - 1);
//     }
//     return res;
//   };
// })();
assert.deepStrictEqual(deleteObjectArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteObjectArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray(users, 'name', 'Lee'), [Hong, Kim]);
