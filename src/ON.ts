//Books!!
//The introduction to algorithms
//For Programmers who dont know how to datastructure and would like to do other things well too

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////BIG-O////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//O(N) -> grow based on inputs
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }
    return sum
}

//Concept for BIG-O -> as input grows, how fast does computation or memory grow?
//Growth is with respect to the input.

//one loop is O(n)

//O(2n) -> which is effectively O(n) -> always drop constants
function sum_char_codes2(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }
    return sum
}

//N is faster than N^2. however it could be irrelevant for smaller inputs and can even be faster than a high constant N

//Still O(n) even though it "could" be faster if we hit "E" right away. always consider worst case.
function sum_char_codes3(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        const charCode = n.charCodeAt(i);
        //check for capital E
        if (charCode === 69) {
            return sum;
        }
        sum += charCode;
    }
    return sum;
}

//growth respsect to input
//constants dropped
//always worst case

//O(N^2) -> loop inside of loop is o(n^2) -> and three loops is n^3 etc...
function sum_char_codes4(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            // sum += charCode
        }
    }
    return sum
}

//O(n log n) half input to search -> quicksort
//O(log n) binary search trees
//O(sqrt(n)) is rare but exists

//GROWTH IN RESPECT TO INPUT
//CONSTANTS DROPPED
//ALWAYS WORSE CASE

//space growth is not that important...