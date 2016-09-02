var fibonacci =function(n){
	if(n==0) {
		return;
	}
	if(n==1){
		return [0,1];
	}

	if (n>1) {
		var fib=fibonacci(n-1);
		fib.push(fib[fib.length-1]+fib[fib.length-2]);

		return fib;
	}
}

console.log(fibonacci(1).join(','));
console.log(fibonacci(2).join(','));
console.log(fibonacci(3).join(','));
console.log(fibonacci(4).join(','));
//fibonacci(3);
//fibonacci(4);

/*


var fibonacci = (function(){
var arr = [];

this.recursive = function(n){
if (n===0){
return 0;
}else if (n <= 2){ 
return 1;
}
return(this.recursive(n-1) + this.recursive(n-2));
};

return function(n){
for (var i=0; i<n; i++){="" arr.push(this.recursive(i));="" }="" return="" arr;="" }="" })();="" console.log(fibonacci(10));="">

*/