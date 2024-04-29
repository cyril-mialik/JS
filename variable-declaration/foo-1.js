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

// -------------------------------------------------

/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be 2 because of the 'b' declaration
  * * if variable is declarated without the 'var' | 'let' | 'const' key word
  * * the value will be invocated as global variable.
  *
*/
function bar(a) {
  b = a;
}

bar(2);
console.log(b) // 2

// -------------------------------------------------


/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be 2 as expected
  *
*/
function baz(a) {
  b = a;
  console.log(b);
}

baz(2);

