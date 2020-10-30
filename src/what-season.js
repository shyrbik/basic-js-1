const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
let errUn = 'Unable to determine the time of year!';
if ((date === null) || (date === undefined)) return errUn;
 if (date.getTime() % 1 !== 0) return "Error";
let errErr = 'Error';
let check = date.toString.call(date);
let string = date.toString();
if (check !== string) return errErr;
  let month = date.getMonth();
  let seasons = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]];
    let result;
    for (let i = 0; i < seasons.length; i++) {
        let currentArray = seasons[i];
        let index = currentArray.indexOf(month);
        if (index !== -1) {
             result = i;
        }
    }
    let currentMonth;
    switch (result) {
        case 0:
          currentMonth = 'winter';
        break;
        case 1:
          currentMonth = 'spring';
        break;
        case 2:
          currentMonth = 'summer';
        break;
        case 3:
          currentMonth = 'autumn';
        break;
    }
    return currentMonth;
    }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

