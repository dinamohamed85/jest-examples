
const mocker = require('./mock');

test("mock function", () => {
    const mockery = jest.fn((name) => `Hello ${name}`);
    expect(mockery("Dina")).toBe("Hello Dina");
    expect(mockery("Malika")).toBe("Hello Malika");
    expect(mockery("Zahra")).toBe("Hello Zahra");
    expect(mockery).toHaveBeenCalled();
    expect(mockery).toHaveBeenCalledTimes(3);
    expect(mockery).toHaveBeenCalledWith("Malika");
    expect(mockery).toHaveBeenLastCalledWith("Zahra");
});