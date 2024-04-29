/*
  *
  * ! VARIABLE DECLARATION
  * * Here the answer will be an error
  * * because of 'use strict' mode prevent such global declaration
  *
*/
function foo(a) {
  'use strict';
  b = a;
  console.log(b);
}

foo(2); // Uncaught ReferenceError: b is not defined

