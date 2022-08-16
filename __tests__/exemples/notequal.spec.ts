export { };

describe("not equals", () => {
    it('use basic to equal', () => {
        expect(1 + 1).not.toEqual(1);
    });
});

describe("Match - regular expression", () => {
    it('use basic toMatch', () => {
        expect('developer').toMatch(/\w+/);
        // to see error
        // expect(1000).toMatch(/\w+/);
    });
});