const { settings, trades, markets, orderBook, volumeCounters, heatmapCandles } = require("./controllers/requests");
const tensorChart = require('./index');
//use with exchange and currencie Pair
const tensor = new tensorChart('binance', 'BNBBTC')
//const {socket} = require("./controllers/socket");
//tensor.chart('5min').then(data => {
//    console.log(data)
//})

//tensor.tradingViewChart('5min').then(data => {
//    console.log(data)
//})

tensor.tradingViewSymbols(null).then(data => {
    console.log(data)
})
//socket('reg', 'binanceBTCUSDT')

//settings('binance', 'BNBBTC').then(data => {
//    console.log(data)
//})

//trades('binance', 'BNBBTC').then(data => {
//    console.log(data)
//})

//markets().then(data => {
//    console.log(data)
//})

//orderBook('binance', 'BTCUSDT', 1).then(data => {
//    console.log(data)
//})

//volumeCounters('binance', 'BTCUSDT').then(data => [
//    console.log(data)
//])

//heatmapCandles('binance', 'BTCUSDT', '5min').then(data => {
//    console.log(data)
//})