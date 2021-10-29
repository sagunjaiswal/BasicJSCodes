function isPalindrome(str){
  const revStr = str.split('').reverse().join('');
  if(revStr !== str)
    return false;
  return true;
}
const str = prompt("Enter a string : ");
if(isPalindrome(str)){
  document.write("It is a palindrome");
}
else{
  document.write("It is not a palindrome");
}
