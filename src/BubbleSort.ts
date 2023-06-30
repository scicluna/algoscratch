//Bubble sort!!
//super easy! Awesome!
//What is it? -> (any X of I <= XI + 1) -> [1,3,7,4,2] -> starts at 0, if im larger than you, swap positions.
//Single iteration causes largest item to flow to the last spot. Must repeat it for each item.
// N -> N-1 -> N-2 -> N-N+1
// sum of numbers in a range is just (N+1)  * (N/2) (for 0 - 100 its 101*50 crazy shit.)
// O(n^2 + n) -> drop +n (insignificant values) -> so its O(n^2)

//first try :)
function myBubbleSort(arr: number[]): number[] {
    let n = arr.length - 1
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        n--;
    }
    return arr;
}

//Primes try
function primeBubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

