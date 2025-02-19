// Question-1
function sayHello(){
    console.log('Hello world')
}
sayHello()
// Question-2
function displayWarning(){
    console.log("Warning! System Overload")
}
displayWarning()
// Question-3
function printStatus(){
    console.log("System Status: Active")
}
printStatus()
// Question-4
function initialize(){
    console.log('Initialization Complete')
    shutDown()
}
function shutDown(){
    console.log("System Shutting Down…")
}
initialize()
// Question-5
function startProcess(){
    console.log("Process Started")
    endProcess()
}
function endProcess(){
    console.log("Process Ended")
}
// Question-6
function greetUser(Name){
    console.log("Hello",Name)
}
greetUser('Naresh')
greetUser('shiva')
// Question-7
function calculateSum(a,b){
    console.log(a+b,a-b)
}
calculateSum(2,5)
calculateSum(8,9)
// Question-8
function counDown(){
    for(var i=5;i>=1;i--){
        console.log(i)
    }
}
counDown()
// Question-9
function checkEvenOdd(num){
    if (num%2==0){
        console.log('Even')
    }
    else{
        console.log('Odd')
    }
}
checkEvenOdd(22)
checkEvenOdd(11)
// Question-10
function beginSession(){
    console.log('Session Started')
    endSession()
}
function endSession(){
    console.log('Session Ended')
}


var x=6
console.log(typeof x)
