const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') return false;
  let sampleActNumb = parseInt(sampleActivity);
  if (isNaN(sampleActNumb)) return false;
  if ((sampleActNumb < 1) || (sampleActNumb > 15)) return false;

  let ln = MODERN_ACTIVITY / sampleActNumb;
  let k =  0.693 / HALF_LIFE_PERIOD;
  let time = Math.log(ln) / k;
  return time;
}
