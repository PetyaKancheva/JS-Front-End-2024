//1 Bitcoin	11949.16 lv.
// 1 g of gold	67.51 lv.
function solve(inputArr){
    let firstDayToBuyBitcoin;
    let totalMoney=0;
    let currentMoney=0;
    let bitcoinCount=0;
   for( let i=0;i<=inputArr.length-1;i++)
    {
            let gold= inputArr[i];
            let currentDay=i+1;
            if((currentDay%3===0)){
                gold*=0.7;
            }

            currentMoney=gold*67.51;

            totalMoney+=currentMoney;

            while (totalMoney>=11949.16){

                totalMoney-=11949.16;
                bitcoinCount++;
                if(bitcoinCount===1){
                    firstDayToBuyBitcoin=currentDay;
                }
            }
   }
   console.log(`Bought bitcoins: ${bitcoinCount}`);
   if(firstDayToBuyBitcoin){
    console.log(`Day of the first purchased bitcoin: ${firstDayToBuyBitcoin}`);
   }
   console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
solve([3124.15, 504.212, 2511.124])