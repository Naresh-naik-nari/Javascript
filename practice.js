// function displayData(name){
//     console.log("My name is",name)
// }
// displayData('Naresh')

// function sumOfNumbers(num1=2,num2=4){
//     console.log(num1+num2)
// }
// sumOfNumbers(20,undefined)

// function productOfNumbers(num1=2,num2=4){
//     console.log(num1*num2)
// }
// productOfNumbers(20,98)

// function diffOfNumbers(num1=2,num2=4){
//     console.log(num1-num2)
// }
// diffOfNumbers(20,65)

// function divOfNumbers(num1=2,num2=4){
//     console.log(num1/num2)
// }
// divOfNumbers(20,34)

// function modOfNumbers(num1=2,num2=4){
//     console.log(num1%num2)
// }
// modOfNumbers(20,40)

// function greetWithName(greeting,name){
//     console.log(greeting,name)
// }
// greetWithName('hello','naresh')

// function trickyCount(n) {
//     if (n <= 1) return n;
//     return trickyCount(n - 1) + trickyCount(n - 2);
//    }
   
//    function wrapCount(n) {
//     return trickyCount(n) - trickyCount(n - 4);
//    }
   
//    console.log(wrapCount(6));

// function add(a,b){
//     return a+" "+b
// }
//  console.log(add('hello','Naresh'))  

// function one(){
//     return 10+20
// }
// function two(){
//     console.log(40+50)
//     return 30+40
// }
// console.log(one(),two())

// function isEven(num){
//     return num%2==0
// }
// console.log(isEven(5))

// function add(a,b){
//     return 'sai'+b
// }
// console.log(add())

function functionOne(anonymous){
    console.log(anonymous(10,20,30))
}
var functionTwo=function(a,b,c){
    console.log(a+b+c)
    return a-b-c
}
functionOne(functionTwo)