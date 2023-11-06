function isObjectEmpty(object)
{
    if(object == null || object == undefined){
        return true;
    }
    return Object.keys(object).length==0
}

//testing
obj = {
    name: "jobaer"
}
console.log(isObjectEmpty(obj)) //false\
obj1={

}
console.log(isObjectEmpty(obj1))//true
console.log(isObjectEmpty(null))//true
console.log(isObjectEmpty(undefined))//true