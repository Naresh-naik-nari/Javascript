// Q-1
// Arrow Function: 
// The Function which does not have function keyword and function name and denoted by => is known as Arrow Function.
// Arrow Functions are introduced in ES6 to increase the readability of anonymous function. 
// Arrow Functions are shorthand property of anonymous functions.

// Arrow Function Expression;
// -->An arrow Function Not use function keyword and used ==>"arrow"
// Syntax;
var refeerenceVariable=(parameter)=>{
    // statements
    return 
} 
// Traditionl function expression;
//  In a traditional function expression, the function keyword is used, and the function is more verbose
// syntax;
var functionName=function(parameter){
    // statement
    return
}

// Q-2
function add(a,b){
    return a+b
}
// Arrow Function;
var add=(a,b)=>{
    return a+b
}
console.log(add(2,4))
var add=(a,b)=>a+b;
console.log(add(2,4))
// Q-3
function square(n){
    return n*n
}
// Implicit Return
var square=(n)=>{
    return n*n
}
console.log(square(4))
var square=n=>n*n;
console.log(square(6))

// Q-4
// Single Parameter Syntax:
//  The syntax becomes shorter and easier to read when you have only one parameter, making your code cleaner

// syntax;
var parameter=a=>a*2;
console.log(parameter(3))

//Q-5
// Concise Body (Implicit Return): 
// the arrow function has only one expression, and the return is implicit. The value 
// of the expression is returned automatically. 

// Syntax;
var cubeImplicit=n=>n*3
console.log(cubeImplicit(9))
// Block Body (Explicit Return): 
// the arrow function has a block body, which requires curly braces {}.
// Since there's more than one statement (or you explicitly want to return something), we need to use the return keyword.

// syntax;
var cubexplicit=(n)=>{
    return n*n*n
}
console.log(cubexplicit(9))

// Q-6
var sub=(a,b)=>{
    return b-a
}
console.log(sub(5,9))
 
// Q-7
var message=()=>"Hello, World!"
console.log(message())
