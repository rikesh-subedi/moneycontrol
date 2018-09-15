export default class TopGainersHelper {
    static key = "TopGainersHelper";
    static saveStocks(stocks) {
        localStorage.setItem( TopGainersHelper.key, JSON.stringify(stocks))
    }

    static getStocks() {
        let stocksStr = localStorage.getItem(TopGainersHelper.key)
        if(stocksStr) {
            return JSON.parse(stocksStr)
        } 
        return []
    }
}