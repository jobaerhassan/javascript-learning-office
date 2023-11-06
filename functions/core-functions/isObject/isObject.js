function isObject(value)
{
    if(value === null && value == undefined)
    {
        return false;
    }
    //Object.keys(value).length>0 == have values/keys.
    return (typeof value ==='object')
}
