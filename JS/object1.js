// Object.create는 prototype에!!
const user = { id: 1, name: 'Hong' };
const u1 = Object.assign({}, user);
console.log('🚀 ~ u1:', u1);
const u2 = { ...user };
console.log('🚀 ~ u2:', u2);
u1.id = 10;
u2.id = 20;
console.log('🚀 ~ u1,u2,user:', u1, u2, user);
const u3 = new Object(user);
const u4 = Object.create(user);
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log('u1=', u1, user === u1);
console.log('u2=', u2, user === u2);
console.log('u3=', u3, user === u3); // true!!
console.log('u4=', u4, user === u4);
console.log('u4.proto=', Object.getPrototypeOf(u4));
