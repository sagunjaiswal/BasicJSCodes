let stringCombinations = (str) => {
let strLength = str.length;
let result = [];
let currentIndex = 0;
while (currentIndex < strLength) {
	let char = str.charAt(currentIndex);
	let x;
	let arrTemp = [char];
	for (x in result) {
	arrTemp.push("" + result[x] + char);
	}
	result = result.concat(arrTemp);
	currentIndex++;
}
return result;
};
console.log(stringCombinations("dog"));
