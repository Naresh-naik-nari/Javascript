// Scenario 1: Online Food Delivery
// online food ordering system like UberEats or Zomato
function orderReceived() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Received")
reject("Order Failed")
        }, 1000)
    })
}
function preparingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Food Preparing")
reject("Food Preparing Failed")
        }, 3000)
    })
}
function packingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Food Packing")
    reject("Food packing failed")
        }, 2000)
    })
}
function assigingDelivery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Assigning a delivery person")
    reject("Assigning a delivery person is failed")
        }, 2000)
    })
}
function deliveringFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Food Delivering")
          reject("food delivering is failed")
        }, 4000)
    })
}
orderReceived()
    .then(res => {
        console.log(res);
        return preparingFood();
    })
    .then(res => {
        console.log(res);
        return packingFood();
    })
    .then(res => {
        console.log(res);
        return assigingDelivery();
    })
    .then(res => {
        console.log(res);
        return deliveringFood();
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.error(err)
    })

// Scenario 2: Movie Ticket Booking
// a movie ticket booking system like BookMyShow.
function selectingSeats(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("selecting seats")
            // reject("selecting seat is failed")
        },2000)
    })
}
function processingPayment(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Processing Payment")

        },3000)
    })
}
function generatingTicket(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Generating Ticket")
        },1000)
    })
}
function sendingEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Sending Confirmation Email")
        },2000)
    })
}
selectingSeats()
      .then(res=>{
        console.log(res);
        return processingPayment();
      })
      .then((res)=>{
        console.log(res);
        return generatingTicket();
      })
      .then((res)=>{
        console.log(res);
        return selectingSeats();
      })
      .then(res=>{
        console.log(res)
      })
      .catch((err)=>{
        console.error(err)
      })


// Scenario 3: Car Service Center
// Question:
// You are simulating a car servicing system. The servicing process includes:
function car_checkin(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Car Checking In")
            // reject("car not checked")
        },1000)
    })
}
function oilChange(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Oil change completed")
            // reject("Oil change Failed")
        },2000)
    })
}
function engine_Check(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Engin Check completed");
            // reject("Engine check failed")
        },3000)
    })
}
function car_Wash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Car Wash is completed")
            // reject("Car wash is Failed")
        },2000)
    })
}
function final_check(){
    return new Promise((resolve, reject) => {
        resolve("Final Quality is completed")
        // reject("final quality is failed")
    },2000)
}
car_checkin()
.then((res)=>{console.log(res);
    return oilChange();
})
.then((res)=>{
    console.log(res);
    return engine_Check()
})
.then((res)=>{
    console.log(res);
    return car_Wash()
})
.then((res)=>{
    console.log(res);
    return final_check()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})

// Scenario 4: Laptop Repair Service
// Question:
// A laptop repair center follows these steps to fix a laptop
function diagnosingIssue() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Diagnosing Issue is completed");
                        // reject("Diagnsing Issue is Failed")
                }, 3000)
        })
}
function replacingParts() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Replacing Faulty Parts completed");
                        // reject("Replacing Faulty Parts Failed")
                }, 4000)
        })
}
function updatingSoftware() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Updating Software is completed");
                        // reject("Updating Software is failed")
                }, 2000)
        })
}
function finalTesting() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Final Testing completed");
                        // reject("Final Testing is Failed")
                }, 2000)
        })
}
function returningCustomer() {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Returning to Customer completed")
                        // reject("eturning to Customer Failed")
                }, 1000)
        })
}
diagnosingIssue()
        .then((res) => {
                console.log(res);
                return replacingParts();
        })
        .then((res) => {
                console.log(res);
                return updatingSoftware();
        })
        .then((res) => {
                console.log(res);
                return finalTesting();
        })
        .then((res) => {
                console.log(res);
                return replacingParts();
        })
        .then((res) => {
                console.log(res)
        })
        .catch((err) => {
                console.error(err)
        })


// Scenario 5: Online Course Enrollment
// Question:
// A student is enrolling in an online course. The process includes
function checking_course(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(" Checking course availability completed");
            // reject(" Checking course availability is Failed")
        },1000)
    })
}
function processingPyment(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("processing payment completed");
            // reject("processing payment is Failed")
        },3000)
    })
}
function generating_Id(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(" Generating enrollment ID completed");
            // reject(" Generating enrollment ID is Failed")
        },1000)
    })
}
function sending_materials(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Sending course materials completed");
            // reject("sending course materials Failed")
        },2000)
    })
}
function live_Classes(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(" Granting access to live classes completed");
            // reject(" Granting access to live classes Failed")
        },2000)
    })
}
checking_course()
.then((res)=>{
    console.log(res);
    return processingPyment()
})
.then((res)=>{
    console.log(res);
    return generating_Id()
})
.then((res)=>{
    console.log(res);
    return sending_materials();
})
.then((res)=>{
    console.log(res);
    return live_Classes()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})