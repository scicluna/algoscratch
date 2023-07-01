//Better than array/linked list

//[0 ... 3] if it has one item in it.. it has length 1 and capacity of 3
//get(idx)
//if idx >= len throw error
//push(val:T)
//push/pop up to capacity
//pop():T|und
//len-1 grab out value then decrement length

//if len = cap... it just increases capacity and moves mem somewhere else
//bad with enque, deque, great with push pop

//linked list vs array list ---- it depends
//Push/Popping alot -> both are fine, but array list a bit more convenient
//Queue/Enque -> want linked list
//Random index better on array, easier to "traverse"