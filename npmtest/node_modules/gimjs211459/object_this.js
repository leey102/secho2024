globalThis.name = 'GLOBAL';
this.name = 'MODULE';

const obj = {
  name: 'OBJ',
  f1: function () {
    console.log('f1=', this.name);
  },
  f2: () => {
    // 화살표 함수는 해당 문에서 this의 혼동을 야기시키기에 사용하지말 것
    console.log('f2=', this.name);
  },
  f3() {
    console.log('f3=', this.name);
  },
};

obj.f1();
obj.f2();
obj.f3();
const nm = obj.name;
console.log('----------------------', nm);
const f11 = obj.f1;
const f22 = obj.f2; //arrow function
const f33 = obj.f3;
f11();
f22();
f33();
//TypeError: Cannot read properties of undefined (reading)

// const f1 = obj.f1;  -obj 없이 f1을 부를 수 있음 (나머지도 마찬가지)

class DOG {
  f1() {
    console.log('DOG.f1', this.name);
  } // 메소드 방식으로
}
DOG.prototype.f1();
return;

function f9() {
    this.x = 'F9NAME';
    console.log('f9>>', f9.name, this.x, new.target);
}
// class f9 {             <- 해당 코드로 fix 시킴
//     constructor() {
//         this.x = 'F9NAME';
//         console.log('f9>>', f9.name, this.x, new.target);
//     }
// }
f9();
console.log('globalThis.x>>' globalThis.x);

console.log('====================');
const nine = new f9();
console.log('+++++', nine.x);  // 5.29 오전 10:50
