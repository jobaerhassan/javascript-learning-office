function getAvatarText(str1, str2)
{
    
    if(str1 ==null || str2 == undefined){
        return "invalid input";
    }
    temp = `${str1[0]+str2[0]}`;
     return temp;
}
console.log(getAvatarText(undefined,"Jobaer"))
console.log(getAvatarText(null, "hey"));
console.log(getAvatarText(1234, "abscs"))