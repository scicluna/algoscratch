//common for complex projects to end up as trees
//recursion

//your file system is a tree for example
//each directory has subdirectories that have sub directories etc...
//the dom is a tree etc...

//terminology:
/*
root - the most parent node
height - the longest path from the most parent to the most child
binary tree - tree with at most two children (left/right)
general tree - a tree with 0 or more children
binary search tree - a tree with a specific ordering to the ndoes and at most 2 children
leaves - a node without any children
balanced - a tree is balanced when any nodes left and right children have the same height
branching factor- the amount of children a tree has.
*/

//traversals:
/*
traversal - where you try to visit every node
"visit" a node and then recurse
pre/recurse/post
*/

//print all nodes in a binary tree
type BinaryNode<T> = {
    value: number
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}
function preOrderBinaryTree(head: BinaryNode<number>): number[] {
    const path = []

    path.push(head.value)

    if (head.left) {
        path.concat(preOrderBinaryTree(head.left))
    }

    if (head.right) {
        path.concat(preOrderBinaryTree(head.right))
    }

    return path.flat()
}

//primes
function walker(curr: BinaryNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    //pre
    path.push(curr.value);

    //recurse
    walker(curr.left, path);
    walker(curr.right, path);

    //post
    return path;
}
function primePreOrderBinaryTree(head: BinaryNode<number>): number[] {
    return walker(head, [])
}

//post order, move path.push(curr.value) after walkers
//in order, move path.push(curr.value) between walkers (who cares)

//depth first traversal always goes left first. (in order)
//implicitly a stack