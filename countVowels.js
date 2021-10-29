const vowels = ["a", "e", "i", "o", "u"];
function reverseStr(str){
  let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
const str = prompt("Enter a string : ");
const revStr = reverseStr(str);
document.write(revStr);
