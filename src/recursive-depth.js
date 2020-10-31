const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result;
    if (Array.isArray(arr)){
    if (Array.isArray(arr) && arr.length === 0) {
            return 1
        }
        result = 1 + Math.max(...arr.map(checkChild => this.calculateDepth(checkChild)))
        return result
    } else{ 
    return 0
    }
  }
};