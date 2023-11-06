/*let text = "Learn with Sumit is all about teaching web developement skills \
and techniques in an efficient and practical manner.If you are just getting \
started in web developement , Learn with Sumit has all the tools you need to learn the \
newest and most popular technologies to convert you from a no stack to full stack developer.\
Learn with sumit also deep dives into advanced topiccs using";

let regEx = /sumit/ig;
const arr = text.match(regEx);
console.log(arr ? arr.length: "No mathes")
 // first time occurences of sumit
 console.log(text.search(regEx)) */

 //position finding 2nd problem

//  function LinearSearch(arr, char)
//  {
//     for(let x = 0; x< arr.length; x++)
//     {
//         if(arr[x] === char) return x;
//     }
//     return "Not found"
//  }
//  const arrr = ['a','b','c','d','e'];
//  console.log(LinearSearch(arrr,'x'))

//longest string in the array finding and showing the index of that string

// function longestArr(arr)
// {
//     let maxSize = -1;
//     let indx = 0;
//     let n = arr.length
//     for(let i=0;i<n;i++){
//         if(arr[i].length>maxSize){
//             maxSize = Math.max(maxSize,arr[i].length);
//             indx = i;
//         }
//     }
//     console.log(`index is ${indx}`);
//     console.log(`Highest length is ${maxSize}`);
// }
// longestArr(["jfoadjfa","adfadf","fygasofaksdgfasdfa"])

//1-100 which numbers are divisible by 3,5,3 and 5 

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }
// let text = ""
// for(let i in myObj.cars)
// {
//     text+=    
//     for(let j in myObj.cars.models)
//     {

//     }
// findMax()
// console.log(findMax(1,2,3,4))
// function findMax(){
//   let maxx = -Infinity;
//   for(let i=0;i<arguments.length;i++)
//   { 
//     if(arguments[i]>maxx){
//       maxx = arguments[i];
//     }
//   }
//   return maxx;
// }

// closure

// function temp(){

//   let counter =0;
//   return function (){
//     counter+=1;
//   }
//   // return a dd;

// }
// const x = temp();
// console.dir(x)
// x();
// x();
// console.dir(temp)

// class car {
//   constructor(model, color)
//   {
//     this.model = model;
//     this.color = color;
//   }
//   get getModel(){
//     return this.model;
//   }
//   set getModel(x){
//     this.model = x;
//   }
//   run(){
//     console.log(`${this.model} is running`);
//   }
// }
// class brand extends car{
//   constructor(model, color,fuelInLiter , Capacity){
//     super(model, color)
//     this.fuelInLiter = fuelInLiter;
//     this.Capacity = Capacity;
//   }

// }
// const bmw = new brand("bmw", "red", "200kg", 20)
// bmw.getModel="bmwww"
// console.log(bmw)


// console.log('line 1 code')
// setTimeout(()=>console.log('line 2 code'), 2000)
// console.log('line 3 code')


//closure in js

// function add(){
//     let count = 0;
//     return function(){
//         count++;

//         return count;
//     }
// }

// const x = add();
// console.dir(x)

//asychronus with callback and setTimeOut

let donePayment = true;
let marks = 80
function enroll(callback)
{
    console.log('enrollment process is started');
    setTimeout(()=>{
        if(donePayment){
            console.log('payment completed')
            callback();
        }
        else{
            console.log('Please done your payment procedure!!')
        }
    },2000)
}

function progress(callback)
{
    console.log('progress started!')
    setTimeout(()=>{
       callback() ;
    },3000)
}
function getCertificate()
{
    if(marks >= 80){
        console.log('your certificate is sent!!');
    }else{
        console.log('you are not eligible to get certificate!!');
    }
}

enroll(function(){
    progress(getCertificate)
})

// enroll(progress(getCertificate))














