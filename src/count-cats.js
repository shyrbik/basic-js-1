//const CustomError = require("../extensions/custom-error");
module.exports  = function countCats(Array) {
  let cats = 0,
      cat = '^^';
  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array[i].length; j++) {
      if (Array[i][j] === cat) {
        cats += 1;
      }
    }
  }
return cats;
  // remove line with error and write your code here
};
