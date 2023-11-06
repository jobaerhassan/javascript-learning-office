function isContainSpecialChar(str)
{
    if(str === null || str === undefined) return false;
    let regularEx = /^[A-Za-z0-9]+$/
    if(!regularEx.test(str)){
        return true;
    }
    return false;
}
console.log(isContainSpecialChar('jobaer$'))
console.log(isContainSpecialChar('$$'))
console.log(isContainSpecialChar('123'))
console.log(isContainSpecialChar('null'))
console.log(isContainSpecialChar('ABC'))
console.log(isContainSpecialChar(undefined))