import { deepFlat } from './solution.js';

describe('deepFlat', () => {
    test('flattens nested number arrays', () => {
        expect(deepFlat([1, 2, [3, 4], [5, [6, 7]]])).toEqual([
            1, 2, 3, 4, 5, 6, 7,
        ]);
    });

    test('flattens nested number arrays', () => {
        expect(deepFlat(['a', ['b', [['c'], ['d']], 'e']])).toEqual([
            'a',
            'b',
            'c',
            'd',
            'e',
        ]);
    });
});
