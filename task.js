//part1
let stocks=[
    {symbol:"MD", price:100, sector: "tech"},
    {symbol:"DR", price:200, sector: "clothing"},
    {symbol:"CK", price:300, sector: "cosmetics"},
    {symbol:"LV", price:1500, sector: "industry"},
    {symbol:"Apple", price:4000, sector: "tech"},
]


//part2
const updatePrice=(arr)=>{
    const stockIndex=Math.floor(Math.random() * (arr.length))  //random index of the array // it generates number between 0-5 and 5 is exclusive
    const percentChange=Math.random()-0.5                    //random percentage change between -0.5 and 0.5, so there can be both decrease and increase in the price randomly
    arr[stockIndex].price*=percentChange+1
    return arr
}

setInterval(() => {
    console.log(updatePrice(stocks));
}, 1000);
//console.log(updatePrice(stocks));

//part3
const sectorStock=(sectorname)=>{
    const result=stocks.filter(stock=>stock.sector===sectorname)
    return result
}

console.log(sectorStock("tech"));

//part4
const minThreshold=100
const maxThreshold=200

const ckeckingStock=(arr)=>{
    const filteredStock=arr.filter(stock=>stock.price>minThreshold && stock.price<maxThreshold)
    filteredStock.forEach(stock => {
        console.log(`symbol:${stock.symbol},current price:${stock.price}`);
    });
}
setTimeout(() => {
    ckeckingStock(stocks)
}, 2000);