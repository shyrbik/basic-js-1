const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    if (type === false) {
      this.type = 'reverse';
    } else {
      this.type = 'direct';
    }
  }
 
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error();
    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyLong = key;
    let cryptedArr = [];
    while (keyLong.length < message.length) {
      keyLong += key;
    }
    let messageArray = message.toUpperCase().split('');
    let keyArray = keyLong.toUpperCase().split('');
   
    for (let i = 0; i < messageArray.length; i++) {
       function checkIndexMes(index) {
    return index === messageArray[i]
    }
      let messageNumb = alfabet.findIndex(checkIndexMes);
      if (messageNumb === -1) {
        keyArray.splice(i, 0, messageArray[i]);
        cryptedArr.push(messageArray[i]);
      } else {
        function checkIndexKey(index) {
          return index === keyArray[i]
          }
        let keyNumb = alfabet.findIndex(checkIndexKey);
        let sum = messageNumb + keyNumb;
        //console.log(`i = ${i}, symb = ${messageArray[i]}, messageNumb = ${messageNumb}, keyNumb = ${keyNumb}, sum = ${sum}`)
        while (sum > 25) {
          sum = Math.abs(sum - 26);
        }
        cryptedArr.push(alfabet[sum]);
      }
    }
    if (this.type === 'direct') {
      return cryptedArr.join('');
    } else {
      let reversedArr = [];
      for (let i = cryptedArr.length; i >= 0; i++){
      reversedArr.push(cryptedArr[i]);
      return cryptedArr.join('');  
      }
    }
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw Error();
    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyLong = key;
    let deCryptedArr = [];
    let sum;
    while (keyLong.length < message.length) {
      keyLong += key;
    }
    let messageArray = message.toUpperCase().split('');
    let keyArray = keyLong.toUpperCase().split('');
    console.log(`keyArray = ${keyArray}`)
    for (let i = 0; i < messageArray.length; i++) {
      function checkIndexMes(index) {
        return index === messageArray[i]
        }
      let messageNumb = alfabet.findIndex(checkIndexMes);
      if (messageNumb === -1) {
        keyArray.splice(i, 0, messageArray[i]);
        deCryptedArr.push(messageArray[i]);
      } else {
        function checkIndexKey(index) {
          return index === keyArray[i]
          }
        let keyNumb = alfabet.findIndex(checkIndexKey);
        if (messageNumb > keyNumb) { 
         // console.log ('m>K');
        sum = Math.abs(messageNumb - keyNumb)
        } else {
         // console.log ('m<K');
        sum = Math.abs(messageNumb + 26 - keyNumb)
        }
        //console.log(`sum = ${sum}, messageNumb = ${messageNumb}, keyNumb = ${keyNumb}`)
        while (sum > 25) {
          sum = Math.abs(sum - 26);
        }
        deCryptedArr.push(alfabet[sum]);
      }
    }
    if (this.type === 'direct') {
      return deCryptedArr.join('');
    } else {
      let reversedArr = [];
      for (let i = deCryptedArr.length; i >= 0; i++){
      reversedArr.push(deCryptedArr[i]);
      return deCryptedArr.join('');  
      }
    }
  }    
  }
  //const directMachine = new VigenereCipheringMachine();
 //console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) //'LEARN FRONTEND DEVELOPMENT :)'

module.exports = VigenereCipheringMachine;
