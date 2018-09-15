import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import SearchInput from './SearchInput'
export default class SearchController extends Component {
    constructor(props) {
        super(props)
        this.state = {list:[]}
    }
    render(){
        return <div>  
            <SearchInput delegate={this}></SearchInput>
            <TableView delegate ={this} datasource={this}></TableView>
        </div>
    }
    numberOfSections() {
        return 1;
    }
    
    numberOfRowsInSection() {
        return this.state.list.length
    }
    
    headerForSection(section) {
        return <div></div>
    }
    onTextChange(text) {
        console.log(text)
    }
    onSearchButtonPressed(text) {
        console.log(text)
    }
    
    
    cellAtIndexPath(section, row) {
        let stock = this.state.list[row]
        return <StockCell stock={stock} type="gainer"></StockCell>
    }
}