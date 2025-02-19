// Question-1
function processNumbers(num1,num2,callback){
       return callback(num1,num2)
}
var result=processNumbers(3,4,function(x,y){
    return x+y
})
console.log("Sum:",result)

// Question-2
function greet(callback){
    return callback("Alice!") 
}
var res=greet(function(name){
    return "Hello,"+name
})
console.log(res)

// Question-3
function calculate(x,y,callback){
        return callback(x,y)
}
var res=calculate(10,5,function(x,y){
    return x-y
})
console.log("Difference:",res)







