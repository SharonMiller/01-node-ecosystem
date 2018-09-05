const arithmetic = require('../lib/arithmetic');

test('should add first arg and second arg', () => {
let firstNum = 5;
let secondNum = 2;
let addExpected = 7;
expect(arithmetic.add(firstNum, secondNum)).toBe(addExpected);
})

test('should subtract second arg from first arg', () => {
  let firstNum = 5;
  let secondNum = 2;
  let subExpected = 3;
  expect(arithmetic.sub(firstNum, secondNum)).toBe(subExpected);
  })

test('this should return null if non numbers are passed', () => {
  // expect(arithmetic.add(4, 'hi')).toBeNull();
  expect(arithmetic.add("hi", false)).toBeNull();
  expect(arithmetic.add('4', true)).toBeNull();
  expect(arithmetic.sub([], 4)).toBeNull();
  expect(arithmetic.sub(3, {})).toBeNull();
  

});
