/*Given an integer, , traverse its digits (1,2,...,n) and determine how many digits evenly divide (i.e.: count the number of times divided by each digit i has a remainder of ). Print the number of evenly divisible digits.

Note: Each digit is considered to be unique, so each occurrence of the same evenly divisible digit should be counted (i.e.: for , the answer is ).

Input Format

The first line is an integer, , indicating the number of test cases.
The subsequent lines each contain an integer, .

Constraints

Output Format

For every test case, count and print (on a new line) the number of digits in that are able to evenly divide .

Sample Input
2
12
1012

Sample Output

2
3

Explanation

The number is broken into two digits, and . When is divided by either of those digits, the calculation's remainder is ; thus, the number of evenly-divisible digits in is .

The number is broken into four digits, , , , and . is evenly divisible by its digits , , and , but it is not divisible by as division by zero is undefined; thus, our count of evenly divisible digits is .
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var m = n;
        //console.log(m,n);
        var digits=[];
        while(n > 0){
            digits.push(n%10);
            n = Math.floor(n/10);
        }
        //console.log(digits);
       // console.log(m);
        var sum;
       sum = digits.reduce(function(sum,x ){
            //console.log(sum, x , m)
            sum += (m%x==0) && (x>0);
            return sum;
        },0);
        console.log(sum);
    }

}
