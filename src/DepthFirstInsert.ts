//basically, when you insert it. if its left it goes through the logic on the left and bigger it goes through logic on the right
/*
insert(node, v){
    if (!node){
        return {v}
    }

    if (node.value < v){
        insert(node.right, value)
    }
    else if (node.value >= v){
        insert(node.left, value)
    }
    else {
        node.parent = previous nodec
    }
}
//////////////chatgpt
type BinaryNode<T> = {
    value: T
    left?: BinaryNode<T>
    right?: BinaryNode<T>
}


function insert(node: BinaryNode<number> | undefined, value: number): BinaryNode<number> {
    // If the node is undefined, return a new node with the value
    if (!node) {
        return { value: value };
    }

    // If the value is less than or equal to the node's value, insert it into the left subtree
    if (value <= node.value) {
        node.left = insert(node.left, value);
    } 
    // If the value is greater than the node's value, insert it into the right subtree
    else {
        node.right = insert(node.right, value);
    }

    return node;
}


*/