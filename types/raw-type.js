/*
  *
  * ! RAW TYPE
  * An explanation
  * https://teletype.in/@cyril.mialik/js_raw_type
  *
*/

function getRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

