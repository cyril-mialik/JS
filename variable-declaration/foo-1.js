/*
  *
  * ! VARIABLE DECLARATION
  * * Here will be an error because of console.log() itself
  * * LHS (left hand side) - that means the value will be executed
  * * immediately, but in that case 'b' isn't defined
  * * so the answer will be the error.
  *
*/
function foo(a) {
  console.log(a + b);
  b = a;
}

foo(2); // Uncaught ReferenceError: b is not defined

