function isOnlyNumber(str) {

    const regex = /^[0-9]+$/;
    return str.match(regex) != null;

  }


console.log(isOnlyNumber('12'))