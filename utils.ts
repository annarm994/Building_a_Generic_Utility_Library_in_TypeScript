/**
 * A generic identity function that returns the input value as the output value.
 * 
 * @param value - The input value of type T.
 * @returns The same value as the input value.
 */
export function identity<T>(value: T): T {
  return value;
}

/**
 * A generic function that takes an array of elements and returns a new array with the elements in reverse order.
 * 
 * @param arr - The input array of type T.
 * @returns A new array with the elements in reverse order.
 */
export function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

/**
 * A generic function that maps the values of an object to a new type using a mapping function.
 * 
 * @param obj - The input object with keys of type K and values of type V.
 * @param mapFn - The mapping function that converts values from type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
export function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U> {
  const result = {} as Record<K, U>;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = mapFn(obj[key]);
    }
  }
  return result;
}

/**
 * A generic function that filters elements of an array based on a predicate function.
 * 
 * @param arr - The input array of type T.
 * @param predicate - The predicate function that tests each element.
 * @returns A new array with the elements that satisfy the predicate function.
 */
export function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
  return arr.filter(predicate);
}