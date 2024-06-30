// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const objA = { name: "John" };
const objB = { age: 30 };

const mergedObj = merge(objA, objB);

console.log(mergedObj);