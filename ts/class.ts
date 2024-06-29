function eat() {
  console.log('급식');
}
function clean() {
  console.log('청소');
}

class Student {
  lunch(): void {
    eat();
  }

  clean(): void {
    clean();
  }
}

class Transfer extends Student {
  clean(): void {
    throw new Error('청소금지!');
  }
}
const hong = new Student();
const kim = new Transfer();
hong.lunch();
hong.clean();
kim.lunch();
kim.clean();
