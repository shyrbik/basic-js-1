const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let finalStr,
    basicAdd,
    times,
    separator,
    addStr,
    timesAddStr,
    addSeparator,
    result;
 (`repeatTimes` in options) ? (times = options[`repeatTimes`]) : (times = 0);
 (`separator` in options) ? (separator = `${options[`separator`]}`) : (separator = '+');
 (`addition` in options) ? (addStr = `${options['addition']}`) : (addStr = '');
 (`additionRepeatTimes` in options) ? (timesAddStr = options[`additionRepeatTimes`]) : (timesAddStr = 0);
 (`additionSeparator` in options) ? (addSeparator = `${options[`additionSeparator`]}`) : (addSeparator = '|');
 
let additionalString = '',
      basicString = '',
      extendetString = '';

  if (addStr !== '') {
    if (timesAddStr > 1) {
      basicAdd = addStr;
      additionalString = basicAdd;
      for (let i = 1; i < timesAddStr; i++) {
        additionalString = additionalString + addSeparator + basicAdd;
      }
    } else {
      basicAdd = addStr;
      additionalString = basicAdd;
    }
  } else {
    additionalString = '';
  }

  if (times > 1) {
    basicString = str + additionalString;
    finalStr = basicString;
    for (let i = 1; i < times; i++) {
      finalStr = finalStr + separator + basicString;
    }
  } else {
    finalStr = str + additionalString;
  }
  result = finalStr;
  return result;
}
