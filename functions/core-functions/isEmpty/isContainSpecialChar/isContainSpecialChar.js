function isContainSpecialChar(str)
{
    let regularEx = /^[A-Za-z0-9]+$/
    if(!regularEx.test(str)){
        return true;
    }
    return false;
}