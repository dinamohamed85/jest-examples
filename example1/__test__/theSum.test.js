const theSum = require('../theSum');

test('return 0 if no numbers', () => {
    expect(theSum()).toBe(0);
})

test('return the number', () => {
    expect(theSum(1)).toBe(1);
})
test('adds two numbers', () => {
    expect(theSum(1,2)).toBe(3);
})

test('adds three numbers', () => {
    expect(theSum(3, 2,5)).toBe(10);
})