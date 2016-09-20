// I Gessel solved this in 1972 with a surprisingly simple test.
// N is a Fibonacci number if and only if 5xN^2 + 4 or 5xN^2 – 4 is a square number.



var isFib = function(x){
	var issquarenumber = function(sq){
		return Math.sqrt(sq) %1 ===0;
	} 

	var pow2 = Math.pow(x,2);
	var scenario1 = pow2*5+4;
	var scenario2 = pow2*5-4;

	if(issquarenumber(scenario1) || issquarenumber(scenario2)){
		return true;
	}
	return false;

};