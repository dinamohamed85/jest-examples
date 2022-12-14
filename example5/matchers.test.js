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
    expect(obj).toHaveProperty("age", 37);
});

/* Create Your Own Matcher 1 */
expect.extend({
    toBeLargerThan(received, target) {
        const res = received > target;
        if (res) {
            return {
                message: () => `Expected ${received} To Be larger than ${target}`,
                pass: true,
            };
        }

        else {
            return {
                message: () => `Error: Expected ${received} To Be larger than ${target}`,
                pass: false,
            };
        }
    },
});

/* test using your own matcher 1 */
test("check if the received number is greater than the target number", () => {
    expect(10).toBeLargerThan(8);
});

/* Create Your Own Matcher 2 */
expect.extend({
    toBeBetween(received, start, end) {
        const res = received > start && received < end;
        if (res) {
            return {
                message: () => `Expected ${received} To Be between ${start} and ${end}`,
                pass: true,
            };
        }

        else {
            return {
                message: () => `Error: Expected ${received} To Be between ${start} and ${end}`,
                pass: false,
            };
        }
    },
});

/* test using your own matcher 2 */
test("check if the received number is greater than the target number", () => {
    expect(10).toBeBetween(9, 15);
});
