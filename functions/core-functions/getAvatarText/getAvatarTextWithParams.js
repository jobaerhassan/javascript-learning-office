function getAvatarTextwithParams(obj,pram1,pram2)
{
    getAvatarText(obj[pram1], obj[pram2])
}
const obj = {
    firstName: "jobaer",
    lastName: "hassan",
}
getAvatarTextwithParams(obj,"firstName","lastName");


function getAvatarText(str1, str2)
{
    
    if(!isNaN(str1) || !isNaN(str2)){
        return "invalid input";
    }
    let temp = str1[0]+str2[0];
    console.log(temp)
}
// console.log(getAvatarText(undefined,"Jobaer"))