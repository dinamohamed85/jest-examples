const alldata = require('./matchers');

test('check if array contains 6 elements 1st method', () => {
    expect(alldata.length).toBe(6);
});

test('check if array contains 6 elements 2nd method', () => {
    expect(alldata).toHaveLength(6);
});

test('check if array contains number 5', () => {
    expect(alldata).toContain(5);
});

test('check if array not contains number 7', () => {
    expect(alldata).not.toContain(7);
});

test('check if array not contains number zero', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(alldata[i]).not.toBe(0);
    }
});

test('check if array contains only numbers 1st method', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(isNaN(alldata[i])).toBe(false);
    }
});

test('check if array contains only numbers 2nd method', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(isNaN(alldata[i])).toBeFalsy;
    }
});

test('check if array first element is greater than 1', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(alldata[0]).toBeGreaterThan(1);
    }
});

test('check if array first element is greater than or equal 1', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(alldata[0]).toBeGreaterThanOrEqual(1);
    }
});

test('check if array first element is less than 5', () => {
    for (let i = 0; i < alldata.length; i++) {
        expect(alldata[0]).toBeLessThan(5);
    }
});

test('check Undefined variable', () => {
    let a;
    expect(a).toBeUndefined();
});

test('check if substring inside string by RegExp', () => {
    let str = "I love my children Malika & Zahra";
    expect(str).toMatch(/Malika/);
});

test('check if object has this property', () => {
    let obj = {
        name: "dina",
        age: "37"
    };
    expect(obj).toHaveProperty("age");
});

test('check if object has this property and specific value', () => {
    let obj = {
        name: "dina",
        age: 37
    };
    expect(obj).toHaveProperty("age",37);
});