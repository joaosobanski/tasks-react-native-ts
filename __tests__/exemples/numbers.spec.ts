export { };

describe("Compare numbers", () => {
    it('use basic', () => {
        expect(1 + 2).toBeGreaterThan(2);
        expect(1 + 2).toBeLessThan(4);
        expect(1 + 2).toBeLessThanOrEqual(4);
    });
});

