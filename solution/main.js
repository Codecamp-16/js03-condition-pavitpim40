// let userInput = prompt('Asking for user Input'); // null | string

// let userInput = prompt('Asking for user Input') || 'guest';

// console.log(userInput);
// Validate Input

// case 1 - userInput === null
// case 2 - userInput.trim() === ''
// case 3 - isNaN(userInput)

// Bug => null.trim()
// if (userInput.trim() === '' || userInput === null || isNaN(userInput)) {
//   alert('Invalid Input');
//   // throw new Error('Invalid Input');
// }

// Bug => null.trim()
// if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
//   alert('Invalid Input');
//   throw new Error('Invalid Input');
// }

// Logic
let x = prompt('1st Number');
let y = prompt('2nd Number');
let z = prompt('3rd Number');

if (x === null || x.trim() === '' || isNaN(x)) {
  alert('Invalid Input');
  throw new Error('Invalid Input');
}
if (y === null || y.trim() === '' || isNaN(y)) {
  alert('Invalid Input');
  throw new Error('Invalid Input');
}

if (z === null || z.trim() === '' || isNaN(z)) {
  alert('Invalid Input');
  throw new Error('Invalid Input');
}

// x มากสุด

if (x > y && x > z) {
  // console.log('X');
  if (y > z) console.log(x, y, z);
  else console.log(x, z, y);
} else if (y > x && y > z) {
  if (x > z) console.log(y, x, z);
  else console.log(y, z, x);
  // console.log('Y');
} else if (z > x && z > y) {
  if (x > y) console.log(z, x, y);
  else console.log(z, y, x);
  // console.log('Z');
}
