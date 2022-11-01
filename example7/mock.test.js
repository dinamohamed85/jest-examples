
const mocker = require('./mock');

test("mock function", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker("Dina")).toBe("Hello Dina");
    expect(mocker("Malika")).toBe("Hello Malika");
    expect(mocker("Zahra")).toBe("Hello Zahra");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    expect(mocker).toHaveBeenCalledWith("Malika");
    expect(mocker).toHaveBeenLastCalledWith("Zahra");
});