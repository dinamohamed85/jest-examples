const cloneArray = require('../cloneArray');

test('clons array', () => {
    expect(cloneArray([1,2,3])).toEqual([1,2,3]);
})