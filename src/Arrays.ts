//const a = [] isn't actually an array... huh...
// [0 ... N] // array is just a big piece of memory
//array is just a continuous memory space

const a = new ArrayBuffer(6); //ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a)
a8[0] = 45 //Uint8Array(6) [ 45, 0, 0, 0, 0, 0 ]
a8[2] = 45 //Uint8Array(6) [ 45, 0, 45, 0, 0, 0 ]

const a16 = new Uint16Array(a)
a16[2] = 0x4535 //Uint16Array(3) [ 45, 45, 17717 ]
console.log(a16)

//confusing. but this is what he means by "array" and not "list" like a = []
//array buffer exists. new Uint8Array is a view of that array. about interpreting the memory space. very confusing
//multiply width times type... might need to rewatch this segment idk wtf hes talking about.
//cant just grow an array. this makes sense in regards to csharp/java arrays.
//a+width*offset
//getting a spot from an array is constant time (not o(n)) -> it just instantly jumps to that position (doesnt grow with input)

//fixed size - continguous memory chunks
//can't grow it
//no insertAt or push or pop. you can write them though
//Traditional arrays have no methods. but [] is a javascript array object LOL

//now... we're going to pretend that JS has arrays even though it totes doesn't.
//only have access to the .length property of an array apparently.
