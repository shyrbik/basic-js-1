const CustomError = require("../extensions/custom-error");

//module.exports = 
class DepthCalculator {
  calculateDepth(arr) {
    let numb;
  getArrayDepth(arr) {
      if (Array.isArray(arr)) return numb = 1 + Math.max(...arr.map(child => getArrayDepth(child)))
      else return numb = 0;
  }
  console.log(numb);
  return numb;
  }
};
const instance = new DepthCalculator();

console.log(instance.calculateDepth([1, 2, 3, 4, 5, [1]]));