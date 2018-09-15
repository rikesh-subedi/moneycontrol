export default class TopLosersHelper {
    static key = "TopLosersHelper"
    static saveStocks(stocks) {
        localStorage.setItem( TopLosersHelper.key, JSON.stringify(stocks))
    }

    static getStocks() {
        let stocksStr = localStorage.getItem(TopLosersHelper.key)
        if(stocksStr) {
            return JSON.parse(stocksStr)
        } 
        return []
    }
}