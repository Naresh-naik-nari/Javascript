//Q-1  Create an Array
arr=[22,3,4,2,"naresh",4]
console.log(arr)

//Q-2  Access an Element
arr=[22,3,4,2,"naresh",4]
console.log(arr[3])

// Q-3  Change an Element
arr=[22,3,4,2,"naresh",4]
console.log(arr)
arr[1]=45
arr[0]=100
console.log(arr)

// Q-4  Find Length
arr=[22,3,4,2,"naresh",4]
console.log(arr.length)

// Q-5 Add an Element (Push)
arr=[22,3,4,2,"naresh",4]
console.log(arr)
arr.push(99)
console.log(arr)

// Q-6 Remove the Last Element (Pop)
arr=[22,3,4,2,"naresh",4]
console.log(arr)
arr.pop()
console.log(arr)

// Q-7  Loop Through an Array
arr=[22,3,4,2,"naresh",4]
for(i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

// Q-8  Check if an Element Exists
arr=[22,3,4,2,"naresh",4]
console.log(arr.includes(2))
function existValue(value){
    arr=[22,3,4,2,"naresh",4]
    for(i=0;i<arr.length-1;i++){
        if(i==value){
            console.log(value)
        }
    }
}
existValue(2)

// Q-9  Copy an Array
arr=[22,3,4,2,"naresh",4]
console.log(arr)
var i=arr.slice()
console.log(i)

// Q-10  Convert Array to String
arr=[22,3,4,2,"naresh",4]
console.log(arr.join( ))