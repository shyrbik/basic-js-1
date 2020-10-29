const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
let i,
    thisArray = arr,
    doubleNext = `--double-next`,
    doublePrev = `--double-prev`,
    discardNext = `--discard-next`,
    discardPrev = `--discard-prev`,
    resultArr = [];
     if (!(Array.isArray(thisArray))) throw Error;
    for (i = 0; i < thisArray.length; i++) {
      let next = thisArray[i + 1],
          prev = thisArray[i - 1],
          currentPos = thisArray[i];
      switch (currentPos) {
        case doubleNext:
          if (i === (thisArray.length - 1)) {
            break;
          } else {
            resultArr.push(next, next);
            i++;
            break;
          }
        case doublePrev:
          if (i === 0) {
            break;
          } else { 
            resultArr.push(prev)
            break;
        }
        case discardNext:
          if (i === (thisArray.length - 1)) {
            break;
          }
          if ((thisArray[i + 2] === doublePrev) || (thisArray[i + 2] === discardPrev)) {
          i += 2;
          break;
          }else {
          i++
          break;
          }
        case discardPrev:
          if (i === 0) {
            break;
          } else {
            resultArr.pop();
            break;
        }
        default: 
        resultArr.push(currentPos);
    }
  }
  return resultArr;
}