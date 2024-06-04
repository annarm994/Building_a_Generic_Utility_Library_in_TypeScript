# Building_a_Generic_Utility_Library_in_TypeScript
Assignment_Building a Generic Utility Library in TypeScript

# TypeScript Generics Utility Library

TypeScript generics to create a utility library that provides functions for array and object manipulation. The utility functions include a generic identity function, an array reversal function, an object mapper function, and an array filtering function. 

## Setup Your Environment

1. **Ensure TypeScript is installed and set up in your environment**:
    ```bash
    npm install -g typescript
    ```

2. **Initialize your project**:
    ```bash
    mkdir ts-generics-utility
    cd ts-generics-utility
    npm init -y
    ```

3. **Install TypeScript locally**:
    ```bash
    npm install typescript --save-dev
    ```

4. **Create a `tsconfig.json` file**:
    ```bash
    npx tsc --init
    ```

## Functions

A generic identity function that takes an argument of type `T` and returns a value of type `T`.

```typescript
export function identity<T>(value: T): T {
  return value;
}
