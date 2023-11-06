
const object1 = {
    name : "joaber",
    age: 50,
    city:"dhaka"
}
const object2 = {
    name : "joaber",
    age: 50,
    city:"dhaka"
}
console.log(object1 === object2)
let x = 10
let y = x;

console.log(x == y);



function a(val) {
    console.log(val);
}
console.log(typeof(NaN))
console.log('hi'*5) //->returns NaN
 let a = 6
 let b =10
 if(a<b){
    console.log(a)
 }

const obj = {
    name: 'jobaer',
    city: 'Dhaka',
    age : 24,
    property: {
      test: "passed",
      status: "Available",
      Earnings: "Not good"
    }

  }
var output = '';
for(var property in obj){
    output+= property + ':' + obj[property];
}
console.log(output)
console.log(typeof obj.property === 'object');
if(typeof obj.property === 'object'){
    console.log(obj.length);
}


console.log(Object.is('1',1))
console.warn("this is warning")