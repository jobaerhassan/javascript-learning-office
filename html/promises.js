// console.log('task 1');

// const status = true;

// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(status){
//             resolve('task 2')
//         }
//         else{
//             reject('failed')
//         }
//     },2000)
// })

// promise
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err)
//     })
    
// console.log('task 3')

let donePayment = false;
let marks = 80

function enroll()
{
    console.log('course enrollment is in progress . ');
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(donePayment){
                resolve();
            }
            else{
                reject('Payment failed');
            }
        },2000)

    });
    return promise;
}
function progress(){
    console.log('Course on progess')
    const promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            if(marks>=80){
                resolve();
            }
            else{
                reject('you could not get enough marks to get the certificate.');
            }
        }, 3000);
    })
    return promise;
}
function getCertificate()
{
    console.log('Preparing your certificate');
    const promise = new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Congrates! You got the certificate . ");
        }, 1000);
    });
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function(err){
        console.log(err);
    })

//the code is more readable
//common catch block.
//better syntax is async await 

