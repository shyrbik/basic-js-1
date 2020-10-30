const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool){
    if (bool == 'true' || bool == '') {
      this.type = directMachine;
    } else {
      this.type = reverseMachine;
    }
  }
  encrypt(word, key) {
    if (this.type == 'true') {

    } else {
      
    }
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
