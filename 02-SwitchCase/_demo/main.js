// let studentPoint = 25; // fullScore
let studentPoint = Number(prompt('Enter Student Score'));

// Strict Type
switch (studentPoint) {
  case 25:
  case 20:
    console.log('Full Score'); // point === 25 || point === 20
    break;
  case 15:
    console.log('75% of Full Score');
    break;
  case 10:
    console.log('50% of Full Score');
    break;
  default:
    console.log('You failed, under 50%');
}
