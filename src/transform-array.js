const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let i,
    thisArray = arr,
    doubleNext = `--double-next`,
    doublePrev = `--double-prev`,
    discardNext = `--discard-next`,
    discardPrev = `--discard-prev`;
    
    if (!(Array.isArray(thisArray))) throw Error;
for (i = 0; i < thisArray.length; i++) {
    let next = thisArray[i + 1];
    let prev = thisArray[i - 1];
    
  if (thisArray[i] === doubleNext) {
    if (i === (thisArray.length - 1)) {
      thisArray.pop();
    } else {
    thisArray.splice(i, 1, next);
    i -= i;
    continue;
  }
  }
  if (thisArray[i] === doublePrev) {
    if (i === 0) {
      thisArray.shift();
    } else { 

    thisArray.splice(i, 1, prev);
  }
  }
  if (thisArray[i] === discardNext) {
    if (i === (thisArray.length - 1)) {
      thisArray.pop();
      continue;
    } else if ((thisArray[i + 2] === doublePrev) || (thisArray[i + 2] === discardPrev)) {
    thisArray.splice(i, 3);
    }else {
    thisArray.splice(i, 2);
    i -= i;
    continue;
    }
  }
  if (thisArray[i] === discardPrev) {
    if (i === 0) {
      thisArray.shift();
    } else {
    thisArray.splice(prev, 2);
  }
  }
}
  return thisArray;
};
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here