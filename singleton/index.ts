import Singleton from './singleton';

// impossible to call like this
// const x = new Singleton();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

a.increment();
b.increment();

console.log(a.getCount());
console.log(b.getCount());

// both objects has the same value
console.log(a.getCount() === b.getCount());

// both getInstance calls return the same class instance
console.log(a === b);
