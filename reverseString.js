function reverseStr(str){
  let revStr = "";
  for(let i = str.length - 1 ; i >= 0 ; i--){
    revStr+=str[i];
  }
  return revStr;
}
const str = prompt("Enter a string : ");
const revStr = reverseStr(str);
document.write(revStr);
