import {InitialState} from './IntitialState';
import {ActionTypes} from '../actions/commonActions';
import WatchlistHelper from '../components/WatchlistsHelper';
export const Watchlist = (state = InitialState.Watchlists, action) => {
    let newState = {...state};
    switch(action.type) {
        case ActionTypes.add_to_watchlist:
        newState.list.push(action.data)
        WatchlistHelper.addStock(action.data)
        break;
        case ActionTypes.fetch_watchlist_success:
        newState.list = action.data
        break;
        default:
        break;
    }
    return newState;
}