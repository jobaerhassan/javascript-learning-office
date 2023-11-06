function generateRandomColor(hexcode) {
    
    
    firstTwo = hexcode[1];
    hexcode = hexcode.substring(2);
    temp = Math.floor(Math.random()*10);
    temp+=hexcode
    temp = '#'+temp;
    console.log(temp);

  }
  
  
 generateRandomColor('#FF0000')#5F0000;



// // Example usage
// const hex =
// const relatedColor = generateRelatedColor(hex);
// console.log(relatedColor);
