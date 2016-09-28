function main() {
    var n = parseInt(readLine());
    console.log(n);
    var maxprofit = [0,0];
    for (var i = 0; i <n; i++){
        var curprofit = readLine().split(' ');
        curprofit.sort(function(x,y){
            return y-x;
        });
        var max_today_profit=curprofit[0]+curprofit[1];
        maxprofit.push(max_today_profit);
        maxprofit.sort(function(x,y){
            return y-x;
        }).pop();
    }
    console.log(maxprofit[0]);
    
}