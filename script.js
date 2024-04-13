function firstNonRepeatedChar(s) {
 // Write your code here
		let x_or = s[0].charCodeAt();
	for (let i=1 ; i < s.length ; i++){
	  x_or = x_or ^ s[i].charCodeAt();
	}
	if (x_or != 0)
	  return String.fromCharCode(x_or);
   else return "null";
	
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
