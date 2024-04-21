type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// keyof 取interface的键值后组成联合类型
// in 取联合类型的值 用于构建数组或对象

// function getValueofObject<T extends Object, K extends keyof T>(
//   o: T,
//   k: K
// ): T[K] {
//   return o[k];
// }

// const obj = {
//   name: "ckh",
//   age: 18
// };

// const value = getValueofObject(obj, 'age');
// console.log(value);
