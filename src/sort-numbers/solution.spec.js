import { solutionName } from '../sort-numbers/solution.js';

describe('sort nmbers', () => {
    test('sorts a mix of positive and negative numbers', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, -1])).toEqual([
            -1.5, -1, 0, 1, 1.5,
        ]);
    });
});
