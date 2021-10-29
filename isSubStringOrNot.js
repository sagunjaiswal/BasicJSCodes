const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');
if(str.includes(checkString)) {
    document.write(`The string contains ${checkString}`);
} else {
  document.write(`The string does not contain ${checkString}`);
}
