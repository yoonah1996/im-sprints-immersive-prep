
const { add, substract, multiply, divide } = require("../math");
describe('Group tests', () => {

// 1. Create test case to check add function works what it is supposed to be.

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// 2. Create test case to check substract function works what it is supposed to be.

test('substracts 5 - 3 to equal 2', () => {
    expect(substract(5, 3)).toBe(2);
  });

// 3. Create test case to check multiply function works what it is supposed to be.

test('multiplys 3 * 7 to equal 21', () => {
  expect(multiply(3, 7)).toBe(21);
});

// 4. Create test case to check divide function works what it is supposed to be.

test('divides 3 / 3 to equal 1', () => {
    expect(divide(3, 3)).toBe(1);
  });

// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.

test('cannot divide something with 0', () => {
    expect(divide(3, 0)).toBe(Infinity);
  });
});
// 6. Group tests using `describe()`zz
