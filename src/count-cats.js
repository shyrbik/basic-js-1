module.exports = function countCats(array) {
  if(array.length == 0 || array == undefined)
    return 0;
  let countCats = 0;
  for(let i = 0; i < array.length; i++)
    for(let j = 0; j < array[i].length; j++) {
      if(array[i][j] == "^^")
      countCats++;
    }
  return countCats;
};
