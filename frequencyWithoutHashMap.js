const freq = (arr) => {
  let freqObj = {};
  
  for(let i = 0 ; i < arr.length ; i++){
    if(Object.keys(freqObj).includes(arr[i])){
      freqObj.arr[i] += 1;
    }
    else{
      freqObj.arr[i] += 1;
    }
  }
}
const arr = "adsjfdsfsfjsdjfhacabcsbajda";
const res = freq(arr);
console.log(res);
