import {ActionTypes} from '../actions/commonActions'
import {InitialState} from './IntitialState';
export const TopLosers= (state = InitialState.TopLosers, action) => {
    let newState = {...state}
    switch(action.type) {
        case ActionTypes.fetch_top_losers_success:
        newState.list = action.data.list.item;
        break;
        default:
        break;
    }

    return newState;
}