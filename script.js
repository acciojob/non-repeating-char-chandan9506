function firstNonRepeatedChar(s) {
 // Write your code here
	let map = new Map();
	let str = s.split("");
	for (let i = 0; i < str.length; i++) {
		if (map.has(str[i])) {
			map.set(str[i] , map.get(str[i])+1);
		}
		else{
			map.set(str[i] , 1);
		}
	}
	for (let [key,value] of map.entries()) {
		if value==1 return key;
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
