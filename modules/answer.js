import {add,sub,mult} from './forumula.js'

console.log(add(12,12),sub(12,2),mult(12,12))


// Fix Option 1 (Recommended)
// forumula.js

// Change to named exports:

// export function add(a, b) {
//   return a + b;
// }

// export function sub(a, b) {
//   return a - b;
// }

// export function mult(a, b) {
//   return a * b;
// }
// index.js

// Your code will work:

// import { add, sub, mult } from './forumula.js';

// console.log(add(12, 12), sub(12, 2), mult(12, 12));
// Fix Option 2 (If you want to keep default export)
// forumula.js (your current)
// function add(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }
// function mult(a,b){
//   return a*b;
// }
// export default { add, sub, mult };
// index.js

// Import like this:

// import formula from './forumula.js';

// console.log(
//   formula.add(12, 12),
//   formula.sub(12, 2),
//   formula.mult(12, 12)
// );