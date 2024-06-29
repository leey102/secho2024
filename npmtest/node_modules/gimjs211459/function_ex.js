const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = (() => {
  let widx = -1;
  return function () {
    widx += -1;
    //if (widx >= weeks.length) widx = 0;
    return `${weeks[widx % 7]}요일`;
  };
})();
// const getNextweek = getNextweekClosure();
let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect! (이 것을 못 하도록!) 해당 코드는 abusing 된 것
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 200);

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};
