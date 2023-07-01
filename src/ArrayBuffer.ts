//Ring Buffers
//like an array list...
//but instead of 0 as the head and length as the tail...
//we have index based head and tail instead. and the others are just "buffer"
//buffer makes shit easier to que/deque by alot. same with push/pop. unless you go off the edge... JK
//if you go off one side... it loops to other????? this.tail % len
// if tail exceeds head after a loop... you're screwed and need to resize.

//get - push/pop O(1)
//un/shift o(n)

//unshift is add one to start
//shift is remove one to start

