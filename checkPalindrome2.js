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
/*
The split('') method converts the string into individual array characters.
const arrayValues = string.split(''); // ["h", "e", "l", "l", "o"]
The reverse() method reverses the position in an array.
// ["o", "l", "l", "e", "h"]
const reverseArrayValues = arrayValues.reverse();
The join('') method joins all the elements of an array into a string.
const reverseString = reverseArrayValues.join(''); // "olleh"*/
