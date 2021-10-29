function isPalindrome(str){
  const strLen = str.length;
  for(let i = 0 ; i  < strLen/2 ; i++){
    if(str.charAt(i) !== str.charAt(str.length-i-1))
      return false;
  }
  return true;
}
const str = prompt("Enter a string : ");
if(isPalindrome(str)){
  document.write("It is a palindrome");
}
else{
  document.write("It is not a palindrome");
}
