const theFilter = require('./input');

test('adds two numbers', () => {
    expect(theFilter()).toBe("UnKnown");
})

test('adds two numbers', () => {
    expect(theFilter(" dina ")).toBe("dina");
})