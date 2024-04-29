/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be 2 because of the 'b' declaration
  * * if variable is declarated without the 'var' | 'let' | 'const' key word
  * * the value will be invocated as global variable.
  *
*/
function foo(a) {
  b = a;
}

foo(2);
console.log(b) // 2

