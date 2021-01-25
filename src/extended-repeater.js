const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let lastStr = '';

  if (options.repeatTimes === undefined) {
    return str + options.addition;
  }

  for (let i = 0; i < options.repeatTimes; i++) {

     lastStr += str;

    if (options.separator === undefined) options.separator = "+";
    if (options.addition === undefined) options.addition = "";


    addStr = options.addition + options.additionSeparator;
    addStr = addStr.repeat(options.additionRepeatTimes - 1);
    addStr += options.addition

    lastStr += addStr;

    if (i != options.repeatTimes - 1) {
      lastStr += options.separator;
    }

  }

  return lastStr;
};