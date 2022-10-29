const theFilter = require('./input');

test('Validate the input field', () => {
    expect(theFilter()).toBe("UnKnown");
})

test('check for spaces (start or end)', () => {
    expect(theFilter(" dina ")).toBe("dina");
})

test('check if lentgh > 10', () => {
    expect(theFilter("dina_mohamed_ahmed")).toBe("dina_moham");
})

test('check if starts with _', () => {
    expect(theFilter("_dina")).toBe("dina");
})