/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be 1 and 3
  * * because of 'eval' rewrite scope environment.
  *
*/
function foo(str, a) {
  eval(str);
  console.log(a, b);
}

var b = 2;
foo('var b = 3;', 1); // 1, 3

