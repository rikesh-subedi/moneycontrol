import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import SearchInput from './SearchInput';
import {Search} from './API';
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
        this.fetchResult(text)
    }
    
    
    cellAtIndexPath(section, row) {
        let stock = this.state.list[row]
        return <StockCell stock={stock} ></StockCell>
    }

    fetchResult(query){
        let request = new Request("https://cors-anywhere.herokuapp.com/"+Search+"&query="+query, new Headers({
            'X-Requested-With': "XmlHttpRequest"
        }))
        fetch(request, {mode: 'cors'})
        .then(response=>response.json())
        .then((data)=>{
            let list = data.result
            .filter(item => item.category === "Stock")
            .map(item => {
                return item
            })
            this.setState({list: list});
        })
    }
}