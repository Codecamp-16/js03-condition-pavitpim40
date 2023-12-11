// โครงสร้าง if
// SYNTAX : if (condition) { code ที่ทำเมื่อ condition == true}
// Condition : Boolean, Compare, Logical

// ################################
//  Ex.1
// if (3 > 5) {
//   // IF-Block
//   console.log("It's true");
// }

// ################################
//   Ex.2
let studentPoint = 49; // Pass 50

if (studentPoint >= 50) {
  console.log('You Passed');
}

// ################################
// Ex.3 : Michelin Star (if - else if)
// Syntax : else if (condition) { code }

// Range 1,2,3
// let star = 3;

// if (star === 3) {
//   console.log('Michelin 3 Stars');
// } else if (star >= 2) {
//   console.log('Michelin 2 Stars');
// }
// console.log('จบการรายงาน');
/*
Bug : Logical with IF
if (star === 3) {
  console.log('Michelin 3 Stars');
}

if (star >= 2) {
  console.log('Michelin 2 Stars');
}
*/

// ################################
// Ex.4 : Michelin Star (if - else if - else )

// Range 1,2,3
// let star = -99;

// if (star === 3) {
//   console.log('Michelin 3 stars');
// } else if (star === 2) {
//   console.log('Michelin 2 stars');
// } else if (star === 1) {
//   console.log('Michelin 1 stars');
// } else {
//   console.log('Invalid Michelin Star');
// }

// ################################
// Ex.5 : High Score

// let userScore = 888;
// let highestScore = 888;

// if (userScore > highestScore) {
//   console.log('Congratulation for new highestScore', userScore);
// } else {
//   console.log('Thankyou');
// }

// ################################
// Ex.6 : Syntactic Sugar ละปีกกา

// let score = 70;

// if (score > 80) console.log('Grade A');
// else console.log('Below A');

// ################################
// Ex.7 : Nested Condition (Password Validation)

// Required Password : len > 6 , no white space
// let password = '1234567';

// if (password.length > 6) {
//   // valid-len
//   // console.log('Valid-length');

//   // ถ้ามี White Space : Invalid Password
//   // if (password.indexOf(' ') !== -1) {
//   //   console.log('Invalid Password, White space Include');
//   // } else {
//   //   console.log('Valid Password');
//   // }

//   // if (password.indexOf(' ') == -1) {
//   //   console.log('Valid Password');
//   // } else {
//   //   console.log('Invalid Password, White space Include');
//   // }

//   if (!password.includes(' ')) {
//     //!"C CCCCC".include(" ") => !true => false
//     // !"CCCCCCC".include(" ") => !false => true
//     console.log('Valid Password');
//   } else {
//     console.log('Invalid Password, White space Include');
//   }
// } else {
//   console.log('Too Short');
// }

// ################################
// Ex.7B : Nested Condition => One Level Condition
let password = '1234 5678';

if (password.length > 6 && !password.includes('')) {
  console.log('Valid Password');
} else {
  console.log('Invalid Password');
}

// ################################
// Ex.8 : กินฟรีถ้าต่ำกว่า 10 ขวบ หรือแก่กว่า 65 ขวบ
let age = 66;

if (age < 10 || age > 65) {
  console.log('ได้รับสิทธิ์ ทานฟรี');
} else {
  console.log('จ่ายตังค์มาซะดีๆไอ้หนู');
}
