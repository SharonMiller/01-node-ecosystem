'use strict';
module.exports = exports = {};

exports.add = (firstNum, secondNum) => {
  if (!_isValidArgs(firstNum, secondNum)) return null;
  return (firstNum + secondNum);

}
exports.sub = (firstNum, secondNum) => {
  if (!_isValidArgs(firstNum, secondNum)) return null;
  return (firstNum - secondNum);
}
let _isValidArgs = (first, second => {
  if (typeof first !== 'number' || typeof second !== 'number') return false;
  else { return true; }
})
