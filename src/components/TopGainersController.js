import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import getData from '../mock/data';
import {TopGainers} from './API';
import TopGainersHelper from "./TopGainersHelper";
export default class TopGainersController extends Component {
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
        return <div>Top Gainer</div>
    }
    
    cellAtIndexPath(section, row) {
        let stock = this.state.list[row]
        return <StockCell stock={stock} type="gainer"></StockCell>
    }

    componentDidMount(){
        this.setState({list: TopGainersHelper.getStocks()})
        this.fetchList()
    }

    fetchList(){
        let request = new Request("https://cors-anywhere.herokuapp.com/"+TopGainers, new Headers({
            'X-Requested-With': "XmlHttpRequest"
        }))

        fetch(request, {mode: 'cors'})
        .then(response=>response.json())
        .then((data)=>{
            let list = {
                list: data.list.item
            }
            this.setState(list)
        })
        //this.setState(getData())
    }

    componentWillUnmount(){
        TopGainersHelper.saveStocks(this.state.list)
    }

}