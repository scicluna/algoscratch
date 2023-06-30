//practice with just .length


//Linear Search ----- a[0 ... n] search(arr, v) ---- check each position for v
//Always O(n) since worst case is that it isnt in the array
export default function linearSearch(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

//Binary Search ---- a[0 ... n] search(arr, v) ---- check half the positions for v... if its ordered
//My Way O(LogN)
export function binarySearch(haystack: number[], needle: number, left: number = Math.floor(haystack.length / 2), right: number = haystack.length): boolean {
    if (haystack[left] === needle) return true
    if (left === right) return false
    if (haystack[left] > needle) {
        right = left
        left = Math.floor(right / 2)
    } else {
        left = left + Math.ceil(((right - left) / 2)) // [0,1,2,3,4,5,6,7,8,9,10]
    }
    return binarySearch(haystack, needle, left, right)
}

//Primes Way
//Psuedo -- search(arr, lo, hi, target) -- when lo == hi, we're done --
//mid = lo + (hi-lo)/2
// v= arr[m] -- if v = target return true
// else if v > m -- lo = mid+1
// else if v < m -- hi = mid
// while loop (lo < hi)
export function primeBinarySearch(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length

    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const val = haystack[mid];

        if (val === needle) {
            return true;
        }
        else if (val > needle) {
            hi = mid;
        }
        else {
            lo = mid + 1;
        }
    } while (lo < hi);
    return false;
}

//CRYSTAL BALL INTERVIEW PROBLEM
//
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way
//
// Find the point at which the crystal ball will break where as the last point it wont break
//
// Array like [f,f,f,f,f,f,t,t,t,t,t,t,t] -> figure out first t
//O(sqrtN)
function crystalBall(array: boolean[]): number {
    const jumpAmt = Math.floor(Math.sqrt(array.length));
    let start = 0
    for (let i = jumpAmt; i < array.length; i += jumpAmt) {
        if (array[i] === false) {
            start = i
        }
    }
    for (let i = start; i < array.length; i++) {
        if (array[i] === true) {
            return i
        }
    }
    return -1
}

console.log(crystalBall([false, false, false, false, false, false, true, true, true]))