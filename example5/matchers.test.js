const alldata = require('./matchers');

test('check if array contains 6 elements 1st method', () => {
    expect(alldata.length).toBe(6);
});

test('check if array contains 6 elements 2nd method', () => {
    expect(alldata).toHaveLength(6);
});

test('check if array contains 6 elements 2nd method', () => {
    expect(alldata).toContain(3);
});

test('check if array contains 6 elements 2nd method', () => {
    expect(alldata).not.toContain(7);
});

test('check if array contains 6 elements 2nd method', () => {
    for(let i=0; i<alldata.length;i++)
    {
        expect(alldata[i]).not.toBe(0);
    }
});