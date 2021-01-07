const { showCompletionScript } = require("yargs");

function palindrome (str) {
  
  let regExp = /[\W_]/g;

  let reversedStrArr = [];
  let reversedStr = "";
  
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    
    reversedStrArr.unshift(element)

  }

  for (let j = 0; j < reversedStrArr.length; j++) {
    const element = reversedStrArr[j];
    
    reversedStr = reversedStr + element;
  }

  console.log(reversedStrArr);
  console.log(reversedStr);

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }

}

console.log(palindrome ('A Man, A Plan, A Canal-Panama'));