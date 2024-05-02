/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be 2, undefined and 2
  * * because of 'with' rewrite and modify scope environment
  * * and if the 'a' props doesn't exist in an obj
  * * it creates a new one but in global scope
  * * while the obj 'a' prop doesn't created onto obj itself.
  *
*/
function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var obj1 = {
  a: 3,
};
foo(obj1);

var obj2 = {
  b: 3,
};
foo(obj2);

console.log(obj1.a); // 2
console.log(obj2.a); // undefined
console.log(a); // 2

