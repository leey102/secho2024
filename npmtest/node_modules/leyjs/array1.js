var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
stack.unshift(9);

queue.push(10);
queue.push(20);
queue.push(30);

//queue.pop();
var queueOutput = queue.shift();

console.log('🚀 ~ stack:', stack, stackOutput);
console.log('🚀 ~ queue:', queue, queueOutput);

const list = ['글3', '글2', '글1'];

function addArticle(article) {
  list.unshift(article);
}

function removeOld() {
  list.pop();
}

addArticle('글4');
removeOld();
removeOld();

list.push('글4');

console.log(list);
console.log(list.indexOf('글4'));
console.log(list.lastIndexOf('글4'));

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const park = { id: 3, name: 'Park' };
const choi = { id: 4, name: 'Choi' };

const users = [park, kim, hong, choi];
// const id2user = users.findIndex((v, i) => {
//     return v.id === 1;
//   });
const id2userIndex = users.findIndex((v) => {
  v.id === 2;
});

const id2user = users.find((v) => v.id === 2);
console.log(id2user);

for (const user of users) {
  console.log(user.id, user.name);
}

console.log('----------------');
users.forEach((v) => console.log(v.id, v.name));
const userIds = users.map((v) => v.id);
console.log('🚀 ~ userIds:', userIds);

const evenUsers = users.filter((v) => v.id % 2 === 0);
console.log('🚀 ~ evenUsers:', evenUsers);

const isEveryLess5 = users.every((v) => v.id < 5);
console.log('🚀 ~ isEveryLess5:', isEveryLess5);

const hasId3 = users.some((v) => v.id === 3);
console.log('🚀 ~ has3:', hasId3);

const second = users[1];
console.log('🚀 ~ second:', second);

//const last = users[users.length - 1];
const last = users.at(-1);
console.log('🚀 ~ last:', last);
//const beforeLast = users[users.length - 2];
const beforeLast = users.at(-2);
console.log('🚀 ~ beforeLast:', beforeLast);

const arr1 = [1, 2];
const arr2 = [3, 4];

//const arr3 = arr1.concat(arr2);
const arr3 = arr1.concat(arr2);
console.log('🚀 ~ arr1~3:', arr1, arr2, arr3);
