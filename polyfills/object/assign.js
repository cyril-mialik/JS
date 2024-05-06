/*
  *
  * ! POLYFILL
  * * Step 1: Create a function which returns pollyfilled Object.assign function;
  * * Step 2: Set a 'for' around whole the function's 'arguments';
  * * Step 3: Set a 'for' around while the Object's fields;
  * * Step 4: Check whether the field has in object or not;
  * * Step 5.2: If it has it'll rewrite to another one;
  * * Step 5.1: If it hasn't it'll go yo another iteration;
  * * Step 6: Return 'assign' which is applied for 'this' and the function's 'arguments'.
  *
*/

var assign = function() {
  assign = Object.assign || function assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    }
  };

  return assign.apply(this, arguments);
}

