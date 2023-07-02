//Divide and Conquer
//split input into chunks and solve chunks and resplit again etc...

//[O ... N] -> chose P (pivot) -> whatever item and then walk the whol array. any item less than pivot is on one side, and the others are on the other side.

//my attempt
function quickSort(array: number[]): number[] {
    if (array.length === 1) {
        return array
    }
    if (array.length === 0) {
        return []
    }
    const pivot = Math.floor(Math.random() * array.length)

    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        if (i !== pivot) {
            if (array[pivot] >= array[i]) {
                left.push(array[i])
            } else {
                right.push(array[i])
            }
        }
    }

    return [...quickSort(left), array[pivot], ...quickSort(right)]
}

console.log(quickSort([1, 5, 3, 7, 2, 8, 2, 6, 1]))

//Somehow O(logN) or... O(logn^2 if it sucks)
//either choose middle element or... random element

//Primes quicksort (does it in place so its better)
function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = tmp
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot

    return idx
}

export default function primeQuickSort(array: number[]): void {
    qs(array, 0, array.length - 1);
}
//dont get it tbh.