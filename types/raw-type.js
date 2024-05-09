/*
  *
  * ! RAW TYPE
  * An explanation
  * https://teletype.in/@cyril.mialik/raw_type_js
  *
*/

function getRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

