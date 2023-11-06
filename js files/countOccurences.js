const numbers = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 1];

function countOccurrences(numbers) {
    // Using the reduce() method to count the frequency of each number
    const frequencyCount = numbers.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
      return accumulator;
    }, {});
  
    return frequencyCount;
  }

console.log(countOccurrences(numbers));