import { intersection } from '../intersection/solution.js';

describe('intersection', () => {
    test('returns common values from two arrays', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });
    test('returns common values from two arrays', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });
});
