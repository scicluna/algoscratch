//Priority queue is a good phrase
//aka a heap
//binary tree in which every child or grand child is smaller or larger than the current node (maxheap/minheap)

//minheap must have smallest number at the root
//maintain weak ordering based on their parent node
//heap condition - every node beneath me must be <= (or >= if a maxheap) than the root node
//heaps are always full trees (no empty spaces, every node always at tree level and complete. no gaps/holes)

//inserting in min heap...
//am i smaller than my parent? No? swap. repeat till top

//deleting in min heap...
//take last node in tree. delete it and move it to the top. then we take smallest of left/right and swap with root if smaller then recurse


//visualize them as though they are an arraylist...
//[50, 71, 100, 101, 80, 200, 101, 200]
//2i + 1 and 2i + 2 equal children node indexes where i is the current index

//      O
//  2i+1 2i+2

//Math.Floor((i-1)/2) finds index of parent

export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 1) {
            this.data = [];
            return out
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (leftIdx >= this.length || idx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx]
        const rightValue = this.data[rightIdx]
        const value = this.data[idx]

        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx)
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx]

        if (parentValue > value) {
            this.data[idx] = parentValue;
            this.data[parentIdx] = value;
            this.heapifyUp(parentIdx);
        }

    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2
    }
}