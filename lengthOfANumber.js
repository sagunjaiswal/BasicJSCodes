let num = 123489;
let len = 0;
while(num > 0){

	len++;
  num = parseInt(num/10);
}
console.log(len);
