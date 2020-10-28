const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
if (date === null || date === undefined) return 'Unable to determine the time of year!';
// if (date.length !== 7) return "Error"
let check = date.toString.call(date);
let string = date.toString();
if (check !== string) return "Error";
  let month = date.getMonth();
  let seasons = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]];
    let result;
    for (let i = 0; i < seasons.length; i++) {
        console.log('i = ' +i);
        let currentArray = seasons[i];
        console.log('currentArray: ' + currentArray)
        let index = currentArray.indexOf(month);
        console.log('index = ' + index)
        if (index !== -1) {
             result = i;
             console.log('result = ' + result)
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
