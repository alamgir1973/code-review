/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */

export const intersection = (array = [], values = []) => {
    const valuesSet = new Set(values);
    const result = [];
    const seen = new Set();

    for (const item of array) {
        if (valuesSet.has(item) && !seen.has(item)) {
            result.push(item);
            seen.add(item);
        }
    }

    return result;
};
