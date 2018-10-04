import {ActionTypes} from '../actions/commonActions'
import {InitialState} from './IntitialState';
export const TopGainers = (state = InitialState.TopGainers, action) => {
    let newState = {...state}
    switch(action.type) {
        case ActionTypes.fetch_top_gainers_success:
        newState.list = action.data.list.item;
        break;
        default:
        break;
    }

    return newState;
}