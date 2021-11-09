//palindrome check using two pointers
const is_palindrome = function(str) {

  var left = 0
  var right = str.length - 1

  while (right > left) {

      if (str.charAt(left) != str.charAt(right)) {
          return false
      }
      
      left++
      right--
  }
  
  return true

}
console.log(is_palindrome("asdfdsa"));
