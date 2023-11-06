// const status = false;
// console.log('task 1')
// const promise = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         if(status){
//             resolve('task 2')
//         } else {
//             reject('failed');
//         }
//     },2000)
// })
// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// console.log('task 3')

const paymentSuccess = false;
const marks = 80;
function enroll(){
    console.log('course enrollment is in progress')
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(paymentSuccess){
                resolve();
            }else {
                reject('payment failed');
            }
        },2000)
    })
    return promise;
}
function progress(){
    console.log('course on progress');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks >= 80){
                resolve();
            }else{
                reject('you could not get enough marks to get the certificate')
            }
        },2000)
    })
    return promise;
}
function getCertificate(){
    console.log('preparing your certificate');
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Congrates,you got the certificate")
        },1000)
    })
    return promise;
}
enroll()
    .then(progress)
    .then(getCertificate)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))