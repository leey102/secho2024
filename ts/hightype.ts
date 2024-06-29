interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}
interface Ud2 {
  [key: string]: string | number;
  id: number;
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };

//-----------------cleas
interface Animal {
  move(): void;
  //move:() => void;
}

class Pet implements Animal {
  protected name;
  protected age = 0;
  constructor(name: string) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(xage: number) {
    this.age = xage;
  }
  move(): void {
    console.log('Pet is moving!!');
  }
}

class Dog extends Pet {
  constructor(name: string, age: number) {
    super(name);
    this.setAge(age);
  }
  bark() {
    console.log('멍멍!', this.name);
  }
  howling() {
    console.log('아~오~', this.name);
  }
}

class Cat extends Pet {
  kukuki() {
    console.log('꾹!꾹!');
  }
  bark() {
    console.log('야옹!', this.name);
  }
}

const lucy = new Dog('Lucy', 10);
lucy.bark();
lucy.howling();
console.log(lucy.getAge());
const happy = new Cat('Happy');
happy.bark();
happy.kukuki();

interface ICat extends Animal {
  kukuki(): void;
}

class CatDog extends Dog implements ICat {
  kukuki(): void {
    kk();
  }
}

function kk() {
  console.log('꾹!꾹');
}
