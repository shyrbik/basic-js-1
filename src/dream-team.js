const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
 // throw new CustomError('Not implemented');
 if (Array.isArray(arr)) {
 let letters = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) === 'string') {
    let word = arr[i];
    word = word.replace(/\s+/g, '');
    letters.push(word[0].toUpperCase());
  }
}
letters = letters.sort();
let result = letters.join('');
return result;
  // remove line with error and write your code here
}
return false
};
