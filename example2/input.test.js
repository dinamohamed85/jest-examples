const theFilter = require('./input');

test('Check If no name is given it will show UnKnown', () => {
    expect(theFilter()).toBe("UnKnown");
})

test('Check name starts or ends with space, the name will be trimmed', () => {
    expect(theFilter(" dina ")).toBe("dina");
})

test('Check if lentgh > 10, name will be showd only first 10 charachters', () => {
    expect(theFilter("dina_mohamed_ahmed")).toBe("dina_moham");
})

test('Check if name starts with underscore, name will not show underscore', () => {
    expect(theFilter("_dina")).toBe("dina");
})