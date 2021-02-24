const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 
 //минимальное число ходов, необходимое для решения головоломки, равно 2n − 1, где n — число дисков[
 let turns = Math.pow(2, disksNumber) - 1;
 let time = turns / turnsSpeed * 3600;
 let result = {};
 time = Math.floor(time);
 turns = Math.floor(turns);
 result["turns"] = turns;
 result["seconds"] = time;
 return result;
};
