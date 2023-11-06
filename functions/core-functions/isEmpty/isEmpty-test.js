
function isEmpty(value)
{
    if(value === null || value === undefined){
        return true;
    }
    if(typeof value === 'string'){
        return value.trim().length==0
    }
    if(Array.isArray(value)){
        return value.length == 0
    }
    if(typeof value === 'object'){
        return Object.keys(value).length == 0
    }
    return false;
}

//testing perpose 


const obj = {
    name: "jobaer",
    age: 25,
    district: "Narsingdi"

}
console.log(isEmpty(obj)) //false
s = "           jobaer          "
console.log(s.trim())


const arr = ["jobaer", "hassan"];
console.log(Array.isArray(arr))
console.log(Array.isArray(s))

const obj2 = {
    name: "jobaer",
    age: 25,
    district: "Narsingdi"

}
console.log(Object.keys(obj).length)
const obj1 ={}
console.log(isEmpty(obj1))//true
s = "      "
console.log(isEmpty(s))//true
console.log(isEmpty(arr))