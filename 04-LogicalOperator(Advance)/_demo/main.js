// ### Logical OR ( || ) => First Truth / Last one

// Expression : "Hello" || 0
// Evaluate Boolen : true || false => true
// (Evaluated) Return : "Hello"

// null || undefined || "CC" || 16 || "" // "CC"
//"" || 0 || undefined || null // null

// ## Logical AND (&&) => First False / Last one

// Expression : null && 1
// Evaluate Boolen : false && true => false
// (Evaluated) Return : null
null && 1;

'CC' && 16 && 42 && null && console.log('All True'); // null
// true && true && true && false && (Stop Evaluated)

// "CC" && 16 && 42 && true && console.log("All True")

let username = 'CCCCCCCCCCC';
username.length > 5 && 'password'.length > 3 && console.log('Login');
