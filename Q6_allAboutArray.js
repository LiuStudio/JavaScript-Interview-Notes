var arr1=[0,1,2,3,2,4,5,2,6];
var arr2=[1,2,5,7,9,5,4,3,9];

var combineArray=function(a,b){
	return a.concat(b);
}

var shuffleArray=function(a){
	for (var i=a.length-1; i>0; i--){
		var j = Math.floor(Math.random()*i+1);
		var temp = a[j];
		a[j] = a[i];
		a[i] = temp;
	}
	return a;
}

var comp = function(a,b){
	return a-b;
}
var sortArray=function(a){
	return a.sort(comp);
}

var removeRedundentElement=function(a){
			console.log("array before operation is                     "+a.join(', '));
	 for (var i = 0; i<a.length; i++){
	 	while((a.indexOf(a[i],i+1)) != -1){
	 		var j=a.indexOf(a[i],i+1);
	 		a.splice(j,1);
	 		console.log("array is being process, remove "+a[i]+" array now is "+a.join(', '));
	 	}
	 }
	 return a;
}

console.log("array1 is "+arr1.join(', '));
console.log("array2 is "+arr2.join(', '));
var arr_comb = combineArray(arr1,arr2);
console.log("array_comb is                  "+arr_comb.join(', '));
arr_comb=shuffleArray(arr_comb);
console.log("array_comb shuffle is          "+arr_comb.join(', '));
arr_comb=sortArray(arr_comb);
console.log("array_comb sort is             "+arr_comb.join(', '));
arr_comb=shuffleArray(arr_comb);
console.log("array_comb shuffle is          "+arr_comb.join(', '));
arr_comb=removeRedundentElement(arr_comb);
console.log("array_comb remove reduncent is "+arr_comb.join(', '));

