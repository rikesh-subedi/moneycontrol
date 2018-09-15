import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import getData from '../mock/data';
import WatchlistsHelper from './WatchlistsHelper';

export default class WatchlistController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
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
        return this.state.list.length
    }
    
    headerForSection(section) {
        return <div>Watchlist</div>
    }
    
    cellAtIndexPath(section, row) {
        let stock = this.state.list[row]
        return <StockCell stock={stock}></StockCell>
    }

    componentDidMount(){
        this.fetchList()
        
    }

    fetchList(){
        let stocks = WatchlistsHelper.getAllStocks()
        this.setState({'list': stocks})
        
    }

}