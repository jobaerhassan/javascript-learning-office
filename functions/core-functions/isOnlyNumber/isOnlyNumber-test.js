// function isOnlyNumber(str) {

//     const regex = /^[0-9]+$/;
//     return str.match(/^[0-9]+$/) != null;


    // return regex.test(str)==null;
//   }



//   function isOnlyNumber(str) {
//     return !isNaN(parseFloat(str)) && isFinite(str);
//   }
function test(str){
    let rex = /^[0-9]*$/;
    return  rex.test(str);
  }
  
  console.log(test("12sas"));

console.log(test('12'))