function isValidUSPhoneNumber(number) {
    
    //remove non digits
    const cleanedNumber = number.replace(/\D/g, '');
    // console.log(cleanedNumber)
    if (cleanedNumber.length !== 10) {
      return false;
    }
  
    if (cleanedNumber.charAt(0) !== '1') {
      return false;
    }
  
    if (cleanedNumber.charAt(1) === '0' || cleanedNumber.charAt(1) === '1') {
      return false;
    }
  
    return true;
  }
  console.log(isValidUSPhoneNumber("1-555-123-456"));
  console.log(isValidUSPhoneNumber("+1-555-123-456"));
  console.log(isValidUSPhoneNumber("+1-555-123-4567"));
  