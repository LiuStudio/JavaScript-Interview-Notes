/*Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

Input Format

The first line contains a single string, . 
The second line contains an integer, .

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0 
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1 
Because all of the first  letters of the infinite string are a, we print  on a new line.
*/

function main() {
    var s = readLine();
    var n = parseInt(readLine());
    
    var arr_str_cnt = s.trim().split('').reduce(function(cnt,x){
        if (x ==='a') cnt++;
        return cnt
    },0);
    
    var repeat_cnt = arr_str_cnt*Math.floor((n/s.length));
    var reststr_size = n%(s.length);
    var str_arr = s.trim().split('');
    //console.log(str_arr);
    var restcnt = 0;
    for (var i = 0; i<reststr_size; i++){
        if (str_arr[i] === 'a'){
            restcnt++;
        }
    }
    var total_cnt = repeat_cnt+restcnt;
   /* console.log(s.length);
    console.log (Math.floor((n/s.length)));
    console.log(arr_str_cnt);
    console.log(repeat_cnt);
    */
    console.log(total_cnt);
    
}