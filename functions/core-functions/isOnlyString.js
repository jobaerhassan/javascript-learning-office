function formatPhoneNumber(number) {
    
    if (number.toString().length !== 10) {
      console.log('Invalid number. Please provide a 10-digit number.');
      return;
    }
    if(number.toString()[0] !== '1'){
        return "invalid Number"
    }
    // Formatting as us num:

    const formattedNumber = `(${number.toString().substring(0, 3)}) ${number.toString().substring(3, 6)}-${number.toString().substring(6)}`;
    
    
    return formattedNumber;
  }
  
  // Example usage
  const number = 2134567890;
  const formattedNumber = formatPhoneNumber(number);
  console.log(formattedNumber);
  