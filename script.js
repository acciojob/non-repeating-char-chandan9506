function firstNonRepeatedChar(s) {
 // Write your code here
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		if(obj[s[i]]  == undefined){
				obj[s[i]] = 1;
		}
		else{
			  obj[s[i]] = ++obj[s[i]];
		}
	}
  console.log(obj);
	for(let t in obj){
		if(obj[t] === 1){
		  return t;
		}
	}
	return null
}


const input = prompt("Enter a string");
alert
(firstNonRepeatedChar(input)); 
