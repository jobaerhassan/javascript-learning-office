function checkPasswordStrength(password){
    if(typeof password !== 'string')
    {
        return false;
    }
    const minLength = 8;
    const minUpperCase = 1;
    const minLowerCase = 1;
    const minNumbers = 1;
    //special character
    
    if(password.length < minLength){
        return false;
    }
    if(!password.match(/[A-Z]/g) || password.match(/[A-Z]/g).length<minUpperCase){
        return false;
    }
    if(!password.match(/[a-z]/g) || password.match(/[a-z]/g).length < minLowerCase)
    {
        return false;
    }
    if (!password.match(/[0-9]/g) || password.match(/[0-9]/g).length < minNumbers) {
        return false;
    }
    return true;

}
console.log(checkPasswordStrength("jobaer1"))
console.log(checkPasswordStrength("joFbaer1"))
console.log(checkPasswordStrength("joba@Fer1"))
console.log(checkPasswordStrength("23241"))
console.log(checkPasswordStrength(2342342))
console.log(checkPasswordStrength("live123ABC"))