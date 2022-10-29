const subtract = require('../subtract');

test('subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
})