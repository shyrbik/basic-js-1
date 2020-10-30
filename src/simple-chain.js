const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'curArray' : [],
  'result' : '',
  getLength() {
    let currentChain = this.curArray,
        length = currentChain.length;
         console.log('length' + currentChain.length);
         this.result = '';
        return +length;
   
  },
  addLink(value) {
    let currentChain = this.curArray;
    currentChain.push(`( ${value} )`);
  
  this.curArray = currentChain;
  console.log('currentChain = ' + currentChain)
  this.result = '';
  return this;
  },
  removeLink(position) {
    if (position % 1 !== 0) {
      this.curArray = [];
      this.result = '';
    throw Error();
    }
    let currentChain = this.curArray,
        realPos = position - 1;
    if (realPos > currentChain.length) throw Error();
    currentChain.splice(realPos, 1);
    this.curArray = currentChain;
    console.log('currentChain = ' + currentChain)
    this.result = '';
    return this;
  },
  reverseChain() {
   let reversedChain = [],
       currentChain = this.curArray,
       numb = currentChain.length;
   for (let i = 0; i < numb; i++) {
  
   reversedChain.push(currentChain.pop());
   }
   this.curArray = reversedChain;
   console.log('reversedChain = ' + reversedChain)
   this.result = '';
  return this;
  },
  finishChain() {
  let currentChain = this.curArray;
  this.result = currentChain.join('~~');
  console.log('this.result = ' + this.result);
  this.curArray = [];
    return this.result;
  },
  
};
//console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
module.exports = chainMaker;