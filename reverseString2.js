function reverseStr(str){
  let revStr = str.split('').reverse().join('');
  return revStr;  
}
const str = prompt("Enter a string : ");
const revStr = reverseStr(str);
document.write(revStr);
