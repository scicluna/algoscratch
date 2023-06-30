//Arrays are a data structure. but its super fundamental. its something availalbe in all languages...
//Except for JS

//what sucks in an array? You can't delete a part of an array, just null it
//you can't insert between two elements in an array
//its ungrowable

//Linked List.
//Singly Linked
//Doubly Linked

// A->B->C->D (nodes pointing to other nodes) //singly linked list [only one direction]
// cant just get(i), gotta go one at a time.
// often containered items

//node<T>
//val: T
//next?:Node<T>

//node has a value and a reference to another node.
//doubly linked nodes have a third property called prev?:Node<T>
//so
//node<T>
//val: T
//next?:Node<T>
//prev?:Node<T>

//deletion+insertion in linked list
//insert F into A->B->C->D
// A <-> F <--> B <--> C <--> D
//just setting nexts and prev. all are constant time
//O(1) constant time

//if we want to delete C from A <-> F <--> B <--> C <--> D
// A <-> F <-> B <-> D
//just change prev from d and next from b [B = C.prev -> B.next = C.next -> D.prev = C.prev -> C.prev = C.next = null]
//no indexes in linked lists. just access to new nodes to traverse

//get head/tail  -> head is first, tail is last in linked list
//get in general

//deletion/insertion from ends O(1)
//deletion/insertion from middle can be slow

//won't implement this because of time concerns.
//general idea below.

interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

//foundational to programming concepts -> helps understand trees and graphs etc...
