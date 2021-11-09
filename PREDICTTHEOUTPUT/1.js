const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b);


/*Output:

{ x: 3, y: 2 }
{ x: 3, y: 2 }
Reason: both the object are pointing to same reference.*/
