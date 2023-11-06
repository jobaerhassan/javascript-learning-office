function formatCount(number) {
    if (isNaN(number) || number === null || number === undefined) {
      return "Invalid number";
    }
  
    const suffixes = ["", "k", "m", "b", "t"];
    const suffixNum = Math.floor(("" + number).length / 3);
   
    
    let shortValue = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
    if (!isFinite(shortValue)) {
      return "Invalid number";
    }
  
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
    
    // return shortValue + suffixes[suffixNum];
    return shortValue<1 ? shortValue*1000 : (shortValue+suffixes[suffixNum])
  }
  console.log(formatCount(1000))
  console.log(formatCount(30000000))
  console.log(formatCount("jobaer"))
  console.log(formatCount("100"))
  console.log(formatCount(200))

