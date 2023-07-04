//comparing two binary trees to see if htey are equal in both shape and structure.

//my attempt
import { BinaryNode } from "./Trees";
function binaryCompare(head1: BinaryNode<number> | undefined, head2: BinaryNode<number> | undefined): boolean {

    if (!head1 && !head2) {
        return true;
    }

    if (!head1 || !head2 || head1.value !== head2.value) {
        return false;
    }

    return binaryCompare(head1.left, head2.left) && binaryCompare(head1.right, head2.right)
}

//Depth First Search (checking left first) maintains shape unlike BreadthFirstSearch
