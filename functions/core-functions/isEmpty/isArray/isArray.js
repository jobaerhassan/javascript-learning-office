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