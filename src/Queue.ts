//FIFO
//Algo or Datastructure? -> well. Linked list is kind of datastructure and its methods are an algo
//Queue common data structure FIFO FIFO FIFO FIFO FIFO FIFO FIFO

//A->B->C->D
//h        t

//insert E at the end of the line. [this.tail.next = E // this.tail=E]
//singly linked list
//h = head
//head = head.next
//h.next = null
//ret h.val
//constant time
//enque / deque / peek
//constrained intentionally for performance

type QNode<T> = {
    value: T
    next?: QNode<T>,
}
export default class Queue<T>{
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>
        this.length++
        if (!this.tail) {
            this.tail = this.head = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}