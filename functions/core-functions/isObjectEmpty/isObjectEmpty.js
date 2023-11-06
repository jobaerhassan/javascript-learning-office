function isObjectEmpty(object)
{
    if(object == null || object == undefined){
        return true;
    }
    return Object.keys(object).length==0
}
