const { add, substract, multiply, divide } = require("../math");

// 1. Create test case to check add function works what it is supposed to be.

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// 2. Create test case to check substract function works what it is supposed to be.

test('substracts 5 - 3 to equal 2', () => {
    expect(substract(5, 3)).toBe(2);
  });

// 3. Create test case to check multiply function works what it is supposed to be.

// 4. Create test case to check divide function works what it is supposed to be.

// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.

// 6. Group tests using `describe()`
