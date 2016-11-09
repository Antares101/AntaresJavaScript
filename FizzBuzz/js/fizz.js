function fizzBuzz(num){
	for(var i = 1; i <= num; i++){
		
		if(esDivisible(i,3) && esDivisible(i,5)){
			document.write("FizzBuzz");
		}
		else if(esDivisible(i,3)){
			document.write("Fizz");
		}
		else if(esDivisible(i,5)){
			document.write("Buzz");
		}
		else{
			document.write(i);
		}

		document.write("<br/>");
	}
}

function esDivisible(numero, divisor){
	var ret = false;
	if(numero % divisor == 0) 
		ret = true;	
	return ret;
}