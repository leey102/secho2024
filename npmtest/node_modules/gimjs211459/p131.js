const dog = {
  name: 'Max', // 'Maxx'  수정해서 해결
  showMyName() {
    console.log(`My name is ${this.name}.`); //dog 가 살아있을 때 해당 this는 dog를 가르키지만
  }, // 1초 후 실행 뒤 없어짐
  whatsYourName() {
    setTimeout(this.showMyName, 300); //setTimeout 으로 OS에 맡김
  },
};

dog.whatsYourName();
