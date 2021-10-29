const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');
if(str.indexOf(checkString) !== -1) {
    document.write(`The string contains ${checkString}`);
} 
else {
    document.write(`The string does not contain ${checkString}`);
}
