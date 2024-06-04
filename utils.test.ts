import { identity, reverseArray, mapObject, filterArray } from './utils';

// Test identity function
console.log(identity<number>(1)); // Should print 1
console.log(identity<string>('hello')); // Should print "hello"

// Test reverseArray function
console.log(reverseArray<number>([1, 2, 3])); // Should print [3, 2, 1]
console.log(reverseArray<string>(['a', 'b', 'c'])); // Should print ['c', 'b', 'a']

// Test mapObject function
console.log(mapObject({ a: 1, b: 2 }, x => x.toString())); // Should print { a: "1", b: "2" }
console.log(mapObject({ a: 1, b: 2 }, x => x * 2)); // Should print { a: 2, b: 4 }

// Test filterArray function
console.log(filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)); // Should print [2, 4]
console.log(filterArray<string>(['apple', 'banana', 'cherry'], x => x.startsWith('b'))); // Should print ['banana']
