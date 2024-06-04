"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// Test identity function
console.log((0, utils_1.identity)(1)); // Should print 1
console.log((0, utils_1.identity)('hello')); // Should print "hello"
// Test reverseArray function
console.log((0, utils_1.reverseArray)([1, 2, 3])); // Should print [3, 2, 1]
console.log((0, utils_1.reverseArray)(['a', 'b', 'c'])); // Should print ['c', 'b', 'a']
// Test mapObject function
console.log((0, utils_1.mapObject)({ a: 1, b: 2 }, x => x.toString())); // Should print { a: "1", b: "2" }
console.log((0, utils_1.mapObject)({ a: 1, b: 2 }, x => x * 2)); // Should print { a: 2, b: 4 }
// Test filterArray function
console.log((0, utils_1.filterArray)([1, 2, 3, 4], x => x % 2 === 0)); // Should print [2, 4]
console.log((0, utils_1.filterArray)(['apple', 'banana', 'cherry'], x => x.startsWith('b'))); // Should print ['banana']
