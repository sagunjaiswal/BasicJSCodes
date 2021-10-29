function reverseStr(str){
  let count = 0;
    for (let letter of str.toLowerCase()) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' ) {
            count++;
        }
    }
    return count
}
const str = prompt("Enter a string : ");
const revStr = reverseStr(str);
document.write(revStr);
