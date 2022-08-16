export { };

describe("it equals", () => {
    it('use basic to equal', () => {
        expect(1 + 1).toEqual(2);
        expect('developer').toEqual('developer');
        expect({ name: 'developer' }).toEqual({ name: 'developer' });
    });
    it('use basic to be', () => {
        expect(1 + 1).toBe(2);
        expect('developer').toBe('developer');


        // no is possible compare object with tobe
        //expect({ name: 'developer' }).toBe({ name: 'developer' });

        //     ● it equals › use basic to be

        // expect(received).toBe(expected) // Object.is equality

        // If it should pass with deep equality, replace "toBe" with "toStrictEqual"

        // Expected: {"name": "developer"}
        // Received: serializes to the same string

        //   10 |         expect(1 + 1).toBe(2);
        //   11 |         expect('developer').toBe('developer');
        // > 12 |         expect({ name: 'developer' }).toBe({ name: 'developer' });
    });
});
