const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let arr = str.split(),
    finalStr,
    basicAdd,
    times,
    separator,
    addStr,
    timesAddStr,
    addSeparator,
    result;
 (`repeatTimes` in options) ? times = options[`repeatTimes`] : times = 0;
 console.log(times);
 (`separator` in options) ? separator = options[`separator`].toString() : separator = '+';
 (`addition` in options) ? addStr = options[`addition`].toString() : addStr = '';
 (`additionRepeatTimes` in options) ? timesAddStr = options[`additionRepeatTimes`] : timesAddStr = 0;
 (`additionSeparator` in options) ? addSeparator = options[`additionSeparator`].toString() : addSeparator = '|' ;
  
 if (addStr !== '') {
   if (timesAddStr > 1) {
    basicAdd = `${addStr}${addSeparator}`
    for (let i = 0; i < timesAddStr; i++) {
    basicAdd += basicAdd;
    }
    } else {
    basicAdd = `${addStr}`
    }
  }
  if (times !== 0) {
    finalStr = `${str}${basicAdd}`
    result = finalStr
    for (let i = 1; i < times; i++) {
      result = result + separator + finalStr
    
    }
    
  }
  
  return result;

  }




  