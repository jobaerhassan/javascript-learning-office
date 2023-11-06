function isOnlyString(str)
{
    if(str == null || str == undefined) return false
    if(typeof str === 'number' || typeof str === 'object' || typeof str === 'array')
    {
        return false;
    }
    if(matchAll(str))
    {
        return true;
    }
    return false;
}
function matchAll(str)
{
    let regularEx = /^[A-Za-z0-9]+$/
    return regularEx.test(str)
}
console.log(isOnlyString("jobaerhassan1"))
console.log(isOnlyString("898989@"))
console.log(isOnlyString("ABC"))
console.log(isOnlyString(null))
console.log(isOnlyString(undefined))
console.log(isOnlyString(124))//false