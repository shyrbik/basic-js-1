const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    } else if (Array.isArray(arr)) {
      return Math.max(...arr.map((item) => this.calculateDepth(item))) + 1;
    } else {
      return 0;
    }
  }
};