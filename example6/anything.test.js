
/* expect.anything(): expect anything else 'undefiend' or 'null' */
test("expect anything else", () => {
    let x = 'D';
    expect(10).toEqual(expect.anything());
    expect('dina').toEqual(expect.anything());
    expect([1, 2, 5, 6]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());
});

/* expect.any(Constructor): expect the input is any Constructor like String or Number*/
test("expect anything else", () => {
    expect('dina').toEqual(expect.any(String));
    expect(10).toEqual(expect.any(Number));
});

/* expect.arrayContaining(array): expect the received array is contains the target array */
test("expect anything else", () => {
    const array = [1, 2, 3, 4, 5];
    expect(array).toEqual(expect.arrayContaining([5, 2, 1]));
});