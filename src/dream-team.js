module.exports = function createDreamTeam(arr) {
    if (arr == undefined || arr == null) {
      return false;
    }
  
    let name = '';
  
    for (i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == typeof (String())) {
        name +=  arr[i].trim()[0];
      }
    }
  
    name = name.toUpperCase().split("").sort().join("");
  
    return name;
  };
  