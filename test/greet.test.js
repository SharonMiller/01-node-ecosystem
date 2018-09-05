const greet = require('../lib/greet');

test('should return hello world', () => {
  //arrange, act, assert
  let actual = greet.hello('world');
  let expectedValue = 'hello world';

  expect(actual).toBe(expectedValue);
});

test('this test should return null if arg is not a string', () => {
  expect(greet.hello(1)).toBeNull();
  expect(greet.hello(true)).toBeNull();
  expect(greet.hello([])).toBeNull();
  expect(greet.hello({})).toBeNull();

});
