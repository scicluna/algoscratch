//searching a binary tree
//opposite of depth first search // queue instead of stack
//going to visit one level of the tree at a time

// 7 -> 23 -> 8 -> pop off 7, head is 23

//runtime is O(n)
//javascript array makes it o(n^2)

import { BinaryNode } from "./Trees"

function breadthFirstSearch(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;
        if (curr.value === needle) {
            return true;
        }
        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right)
        }
    }

    return false
}
