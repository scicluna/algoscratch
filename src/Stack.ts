//still linked lists
// Node<T> -> value:<T> next?: <T> prev?: <T>

//A<-B<-C<-D
//t        h

//only add/remove from head(which is at the end in a stack)
//pretty much a reverse queue

//push/pop/peek operations

//constant O(1)

type Node<T> = {
    value: T
    prev?: Node<T>
}

export default class Stack<T>{
    public length: number;
    private head?: Node<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++
        if (!this.head) {
            this.head = node
        }
        else {
            node.prev = this.head
            this.head = node;
        }
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }
        else {
            const head = this.head as Node<T>
            this.head = head.prev

            //some languages, you would need to free up the head mem after using it

            return head.value
        }
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}