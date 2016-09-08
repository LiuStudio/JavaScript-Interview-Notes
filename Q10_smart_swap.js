var a=3;
var b=4;
var smartSwap=function(a,b){
	a=[b,b=a][0];
	return [a,b];	
}
console.log("a=", a , "b=", b);
var result;

result = smartSwap(a,b);
a=result[0];
b=result[1];

console.log("a=", a , "b=", b);

console.log(result);