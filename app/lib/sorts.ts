function bubbleSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    const n = arr.length;
    const compare = compareFn || ((a, b) => (a > b ? 1 : a < b ? -1 : 0)); // Default ascending order

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: Stop if no swaps
    }

    return arr;
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 5, 8]

const strings = ["banana", "apple", "cherry"];
console.log(bubbleSort(strings)); // Output: ["apple", "banana", "cherry"]

// Custom comparison for descending order
console.log(bubbleSort(numbers, (a, b) => b - a)); // Output: [8, 5, 3, 2, 1]
