//p.130
let once = (f) => {
  let check = false;
  return function (x, y) {
    if (check === false) {
      check = true;
      return f(x, y);
    }
    return;
  };
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
console.log('-----------------------------');
//p.131
const dog = {
  name: 'Maxx',
  showMyName() {
    console.log('-------------------------------');
    console.log(`My name is ${this.name}.`);
    console.log('-------------------------------');
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 10);
  },
};
dog.whatsYourName();

// p.132
const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = () => console.log('do something...1');

const template = (fn) => {
  return () => {
    before();
    fn();
    after();
    console.log('-------------------------------');
  };
}; // 코드를 완성하세요.

const temp = template(someFn);

temp();

// p.133
const before2 = () => console.log('before....');
const after2 = () => console.log('after...');

const someFn2 = (name, greeting) => console.log(`${greeting}, ${name}`);

const template2 = (fn) => {
  return (x, y) => {
    before2();
    fn(x, y);
    after2();
  };
}; // 코드를 완성하세요.

const temp2 = template2(someFn2);

temp2('lnsol', 'hello');
// p.134
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// const getNextWeekClosure = () => {
const getNextWeek = (() => {
  let widx = -1;
  return function () {
    // widx += 1; // side-effect!
    // if (widx >= weeks.length) widx = 0;
    return `${weeks[++widx % 7]}요일`;
  };
})();

// const getNextWeek = getNextWeekClosure();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect! (이 것을 못 하도록!)
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 200);
