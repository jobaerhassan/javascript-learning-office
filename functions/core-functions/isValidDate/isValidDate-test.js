function isValidDate(dateString, format) {
  const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/; 

  if (!dateRegex.test(dateString)) {
    return false; 
  }

  const [day, month, year] = dateString.split('-');

  
  const date = new Date(`${year}-${month}-${day}`);
  console.log(date.getDate())

  // Check if the date is valid
  const isValid = !isNaN(date) && date.getDate() == day && 
  date.getMonth() + 1 == month && date.getFullYear() == year;

  return isValid;
}

// Example usage
const date = '05-13-2023';
const format = 'dd-mm-yyyy';

const isValid = isValidDate(date, format);
console.log(isValid);
