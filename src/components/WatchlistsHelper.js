export default class WatchlistsHelper {
    static exists(stock) {
        let allStockString = localStorage.getItem("watchlists")
        if(allStockString) {
            let allStocks = JSON.parse(allStockString); 
            return !!allStocks[stock.id]
        }
    }
    static addStock(stock) {
        let allStockString = localStorage.getItem("watchlists")
        var allStocks = {}
        if(allStockString) {
            allStocks = JSON.parse(allStockString); 
        }
        allStocks[stock.id] = stock;
        localStorage.setItem("watchlists", JSON.stringify(allStocks) )
    }
    static removeStock(stock) {
        let allStockString = localStorage.getItem("watchlists")
        if(allStockString) {
            let allStocks = JSON.parse(allStockString); 
            delete allStocks[stock.id];
            localStorage.setItem("watchlists", JSON.stringify(allStocks) )
        }
            
    }
    static getAllStocks() {
        let allStockString = localStorage.getItem("watchlists")
        if(allStockString) {
            let allStocks = JSON.parse(allStockString);
            return Object.keys(allStocks).map(key => allStocks[key])
        }
        return []
    }
}