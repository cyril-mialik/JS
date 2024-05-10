/*
  *
  * ! Loose Equal
  *
*/
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function looseEqual(a, b) {
  if (a === b) return true;

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every(function(e, i) {
            return looseEqual(e, b[i]);
          })
        );
      } else if (a instanceof Data && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.key(a);
        var keysB = Object.key(b);

        return (
          keysA.length === keysB.length &&
          keysA.every(function(key) {
            return looseEqual(a[key], b[key]);
          })
        );
      } else {
        return false;
      }
    } catch(e) { return false; }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

