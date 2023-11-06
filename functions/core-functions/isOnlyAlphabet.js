function isOnlyAlphabet(str) {


    const regularEx = /^[A-Za-z]+$/;
  
    return regularEx.test(str);
  }
  console.log(isOnlyAlphabet("jobaer"))