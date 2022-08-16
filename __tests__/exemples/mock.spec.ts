export { };

describe("Mock", () => {
    it('Mock implementation', () => {
        const fakeAdd = jest.fn().mockImplementation((a, b) => 5);
        expect(fakeAdd(1, 1)).toBe(5);
    });
});