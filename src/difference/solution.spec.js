import { difference } from '../difference/solution.js';

describe('compare difference', () => {
    test(' [1, 2, 1], [2, 3]-> [1]', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });
    test(' [2, 1], [2, 3]-> [1]', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
});
