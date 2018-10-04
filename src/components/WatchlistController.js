import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import getData from '../mock/data';
import WatchlistsHelper from './WatchlistsHelper';
import {fetchWatchlist} from '../actions/commonActions';
import {connect} from 'react-redux';

class WatchlistController extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (<div>
            <TableView datasource={this} delegate={this}></TableView>
        </div>)
        
    }
    numberOfSections() {
        return 1;
    }
    
    numberOfRowsInSection() {
        return this.props.list.length
    }
    
    headerForSection(section) {
        return <div>Watchlist</div>
    }
    
    cellAtIndexPath(section, row) {
        let stock = this.props.list[row]
        return <StockCell stock={stock} addToWatchlist={()=>{}}></StockCell>
    }

    componentDidMount(){
        this.props.fetch()
        
    }
}
const mapStateToProps = function(state, ownprops) {
    return {
        list: state.Watchlist.list
    }
}

const mapDispatcToProps = function(dispatch, ownProps) {
     return {
        removeFromWatchlist:(stock_id) => {

        },
        fetch: () => {
            dispatch(fetchWatchlist())
        }
     }
}

export default connect(mapStateToProps, mapDispatcToProps)(WatchlistController)