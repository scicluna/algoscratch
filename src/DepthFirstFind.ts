import { BinaryNode } from "./Trees";

//binary search tree. a classic apparently
//BST

/*
Just a binary tree but with a few rules...
left must be <= and right must be > to root
lot like the quicksort algo

want to find value V...

find(n,v):bool{
    if (!n){
        return false
    }
    if (n.value === v){
        return true
    }
    if (n.value < v){
        return find(n.right, v)
    }
    return find(n.left, v)
}

//check base case... if there is no node, return false since we didnt find it
//if the value is found return true
//if the value of the node is less than the value we're looking for, that means its on the right if its there. so return find (n.right, v)
//and opposite if its smaller or equal we check left.

complexity is O(h) where h is the height of the tree
*/
