'use strict';
var getType = require('what-type');
module.exports = function (number) {
  if (getType(number) === 'integer' || getType(number) === 'float') {
    return ~~number;
  } else {
    throw new Error('The input argument must be a number');
  }
};
