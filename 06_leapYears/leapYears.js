const leapYears = function (year) {
    const isFour = year % 4 === 0;
    const isCen = year % 100 === 0;
    const yearDiBy4H = year % 400 === 0;
  
    if (
        isFour &&
      (!isCen || yearDiBy4H)
    ) {
      return true;
    } else {
      return false;
    }
  };

// Do not edit below this line
module.exports = leapYears;
