import { solutionName, splitObject } from '../split-object/solution.js';

describe('splitObject', () => {
    test('split object', () => {
        expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
            { a: 1 },
            { b: 2 },
            { c: 3 },
        ]);
    });
});
