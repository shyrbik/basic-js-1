const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date == null || date == undefined || date == false) {
    return 'Unable to determine the time of year!';
  }else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw Error;
}
  let month = date.getMonth();
  if (month === 11 || month <= 1) {
    return ('winter');
  }
  if (month >= 2 && month <= 4) {
    return ('spring');
  }
  if (month >= 5 && month <= 7) {
    return ('summer');
  }
  if (month >= 8 && month <= 10) {
    return ('autumn');
  }
};