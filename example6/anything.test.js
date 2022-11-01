
/* expect.anything() => expect anything else 'undefiend' or 'null' */
test("expect anything else", () => {
    let x='D';
    expect(10).toEqual(expect.anything());
    expect('dina').toEqual(expect.anything());
    expect([1, 2, 5, 6]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());
});
