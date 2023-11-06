function isObject(value)
{
    if(value === null && value == undefined)
    {
        return false;
    }
    
    return (typeof value ==='object')
}
// testing 
obj = {
    name: "jobaer"
}
val = 4
console.log(isObject("jobaer"))//false
console.log(isObject(val))//false
console.log(isObject(null))//false