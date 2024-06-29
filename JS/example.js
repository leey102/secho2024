//for문을 이용하여 0.1 ~ 1까지  정확한 숫자를 출력하는 코드를 작성하시오.
for (let i = 0.1; i < 1; i = i + 0.1) {
  if (Number(i.toFixed(1)) === 1.0) {
    console.log(Number(i.toFixed(0)));
  } else {
    console.log(Number(i.toFixed(1)));
  }
}
console.log('-------------------------------');
//1~10사이의정수에제곱근을 소숫점3자리끼지 출력하시오.
let data;
for (let i = 1; i <= 10; i++) {
  data = Math.sqrt(i).toFixed(3);
  if (Number(data) / Number(Math.sqrt(i.toFixed(0))) !== 1) {
    console.log(i, Number(data));
  }
}
console.log('---------------------------------');
//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해보고, switch문을 사용하지않은 더 간단한 방법도 찾아보세요.
const today = new Date();
switch (today.getDay()) {
  case 0:
    console.log('오늘은 일요일입니다');
    break;
  case 1:
    console.log('오늘은 월요일입니다');
    break;
  case 2:
    console.log('오늘은 화요일입니다');
    break;
  case 3:
    console.log('오늘은 수요일입니다');
    break;
  case 4:
    console.log('오늘은 목요일입니다');
    break;
  case 5:
    console.log('오늘은 금요일입니다');
    break;
  default:
    console.log('오늘은 토요일입니다');
}
const WEEK_NAMES = '일월화수목금토';

for (const w in WEEK_NAMES) {
  if (today.getDay() === Number(w)) {
    console.log(`오늘은 ${WEEK_NAMES[w]}요일입니다!`);
  }
}
console.log('---------------------------------');
//다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.(단, 소숫점 자리수는 긴쪽에 맞춘다)
function addPoints(a, b) {
  let x, y;
  x = Number(a).toString().length - 2; // 0과소숫점제외
  y = Number(b).toString().length - 2;
  if (x > y) {
    console.log(Number((a + b).toFixed(Number(x))));
  } else {
    console.log(Number((a + b).toFixed(Number(y))));
  }
}
addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
addPoints(0.1, 0.2); //0.3

console.log('---------------------------------');
//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
//1.
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };
function f1({ id, name }) {
  console.log(id, name);
}
f1(hong);
f1(lee);
//2.
var f2 = function ({ id, name }) {
  console.log(id, name);
};
f2(hong);
f2(lee);
//3.
const f3 = ({ id, name }) => console.log(id, name);
f3(hong);
f3(lee);
console.log('---------------------------------');
//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
const { id, name, addr } = user;
const userInfo = { id, name, addr };
console.log(userInfo);

console.log('---------------------------------');
//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;
console.log(id1, id2, id3);
console.log('---------------------------------');
