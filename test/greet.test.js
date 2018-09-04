const greet = require('../lib/greet');

test('should return hello world', () => {
//arrange, act, assert
let actual = greet.hello('world');
let expectedValue = 'hello world';

expect(actual).toBe(expectedValue);
});

test('this test should return null if no args are passed', () => {
  expect(greet.hello()).toBeNull();
});