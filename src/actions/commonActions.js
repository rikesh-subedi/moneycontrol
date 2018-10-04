import {TopGainers, TopLosers} from '../components/API';
import WatchlistHelper from '../components/WatchlistsHelper';

export const ActionTypes = {
    fetch_top_gainers: "FETCH_TOP_GAINERS",
    fetch_top_gainers_success: "FETCH_TOP_GAINERS_SUCCESS",
    fetch_top_losers: "FETCH_TOP_LOSERS",
    fetch_top_losers_success: "FETCH_TOP_LOSERS_SUCCESS",
    add_to_watchlist: "ADD_TO_WATCHLIST",
    fetch_watchlist: 'FETCH_WATCHLIST',
    fetch_watchlist_success : 'FETCH_WATCHLIST_SUCCESS'
}


export const fetchTopGainers = () => {
    return (dispatch) => {
        let request = new Request("https://cors-anywhere.herokuapp.com/"+TopGainers, new Headers({
            'X-Requested-With': "XmlHttpRequest"
        }))
        fetch(request, {mode: 'cors'})
        .then(response=>response.json())
        .then((data)=>{
            dispatch(fetchTopGainerSuccess(data))
        })
    }
}

export const fetchTopGainerSuccess = (data) => {
    return {
        type: ActionTypes.fetch_top_gainers_success,
        data: data
    }
}

export const fetchTopLosers = () => {
    return (dispatch) => {
        let request = new Request("https://cors-anywhere.herokuapp.com/"+TopLosers, new Headers({
            'X-Requested-With': "XmlHttpRequest"
        }))
        fetch(request, {mode: 'cors'})
        .then(response=>response.json())
        .then((data)=>{
            dispatch(fetchTopLoserSuccess(data));
        })
    }
}

export const fetchTopLoserSuccess = (data) => {
    return {
        type: ActionTypes.fetch_top_losers_success,
        data: data
    }
}

export const addToWatchlist = (stock) => {
    return {
        type: ActionTypes.add_to_watchlist,
        data: stock
    }
}
export const fetchWatchlist = () => {
    return (dispatch) => {
        dispatch(fetchWatchlistSuccess(WatchlistHelper.getAllStocks()))
    }
}

export const fetchWatchlistSuccess = (data) => {
    return {
        type: ActionTypes.fetch_watchlist_success,
        data: data
    }
}