export function add(x: number, y: number) {
    return x + y;
}

describe("calculator", () => {
    it('add number', () => {
        // change 3 to 4 to see error
        expect(add(1, 2)).toEqual(3);
    });
});

// ● calculator › add number

// expect(received).toEqual(expected) // deep equality

// Expected: 4
// Received: 3

// 5 | describe("calculator", () => {
//     6 | it('add number', () => {
//     > 7 | expect(add(1, 2)).toEqual(4);
//         |                           ^
//             8 |     });
//     9 | });

//       at Object.<anonymous>(__tests__ / exemples / calc.spec.ts: 7: 27)