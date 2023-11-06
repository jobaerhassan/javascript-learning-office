function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    
    var color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  
    return color;
  }
  console.log(generateRandomColor())
  //gives us the hex code of Random color ---> #39e3e7 , #712c7d