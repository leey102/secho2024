// function Animal(){console.log('aaa',name);}
// new Animal()
class Animal {
  static ID = 1;
  name;
  constructor(name) {
    this.name = name;
    console.log('==>Born!!', this.name);
  }

  bark() {
    console.log('bark!!!');
  }
}

const ani = new Animal('Ani');
ani.bark();

export class Dog extends Animal {
  //overriding
  bark() {
    console.log('Bow wow!!!');
  }
}

const lucy = new Dog('Lucy');
lucy.bark();

export default class Cat extends Animal {
  #age = 10; //private
  bark() {
    console.log('miaow~', this.#age);
  }
}

const nabi = new Cat('Nabi');
nabi.bark();
console.log('🚀 ~ nabi:', nabi.name);
console.log('🚀 ~ nabi:', nabi.age);

function speak(animal) {
  animal.bark();
}

speak(nabi);
speak(lucy);
speak(ani);

console.log('---------------------------');
//          instance,class
console.log(ani.ID, Animal.ID);

class pig extends Animal {
  bark() {
    console.log('꿀! 꿀!');
  }
}

const gg2 = new pig('꿀꿀이');
gg2.bark();
