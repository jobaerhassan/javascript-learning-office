const integ =1
const arr=['1','2','3']
console.log(isArray(integ)) //false
console.log(isArray(arr)) //true



function isArray(value)
{
    
    if(value == null || value == undefined){
        return false;
    }
    if(Array.isArray(value)) 
    {
        return Array.length>0;
    }
    return false;
}