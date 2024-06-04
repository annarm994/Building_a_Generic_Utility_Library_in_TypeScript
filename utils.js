"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArray = exports.mapObject = exports.reverseArray = exports.identity = void 0;
/**
 * A generic identity function that returns the input value as the output value.
 *
 * @param value - The input value of type T.
 * @returns The same value as the input value.
 */
function identity(value) {
    return value;
}
exports.identity = identity;
/**
 * A generic function that takes an array of elements and returns a new array with the elements in reverse order.
 *
 * @param arr - The input array of type T.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray(arr) {
    return arr.slice().reverse();
}
exports.reverseArray = reverseArray;
/**
 * A generic function that maps the values of an object to a new type using a mapping function.
 *
 * @param obj - The input object with keys of type K and values of type V.
 * @param mapFn - The mapping function that converts values from type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
function mapObject(obj, mapFn) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
exports.mapObject = mapObject;
/**
 * A generic function that filters elements of an array based on a predicate function.
 *
 * @param arr - The input array of type T.
 * @param predicate - The predicate function that tests each element.
 * @returns A new array with the elements that satisfy the predicate function.
 */
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
exports.filterArray = filterArray;
