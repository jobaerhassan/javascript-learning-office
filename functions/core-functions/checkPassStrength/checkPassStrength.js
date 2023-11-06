function checkPasswordStrength(password){
    if(typeof password !== 'string')
    {
        return false;
    }
    const minLength = 8;
    const minUpperCase = 1;
    const minLowerCase = 1;
    const minNumbers = 1;
    
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