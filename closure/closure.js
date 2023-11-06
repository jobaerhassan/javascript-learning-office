// var num1 = 2;

// const sum = function() {
//     var num2 = 3;
//     return function() {
//         return num1 + num2;
//     }
// }
// const myFunc = sum();
// console.dir(myFunc);
// var a = 10;
// function bankAccount(initialBalance) {
//     var balance = initialBalance ;
//     return function() {
//         return balance;
//     }
// }
// var account = bankAccount(10000);
// console.dir(account)

// function stopWatch() {
//     var startTime = Date.now();
//     function getDelay() {
//         console.log(Date.now() - startTime);
//     }
//     return getDelay;77209
// }
// var timer = stopWatch();
// console.dir(timer)

// for(let i=0;i<1008934134; i++){
//     result = i*99999999;
// }
// timer()
//  console.log(timer);
//  for(let i=0;i<1008934134; i++){
//     result = i*99999999;
// }
// timer()
// console.log(timer);

//closure in async function

function async() {
    var a = 20;
    setTimeout(() => {
        console.log(a);
    }, 3000);
}
async()