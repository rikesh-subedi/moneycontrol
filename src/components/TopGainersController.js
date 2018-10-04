import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import getData from '../mock/data';
import {TopGainers} from './API';
import TopGainersHelper from "./TopGainersHelper";
import {connect} from 'react-redux';
import {
    fetchTopGainers,
    addToWatchlist
} from '../actions/commonActions';
class TopGainersController extends Component {
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
        return <div>Top Gainer</div>
    }
    
    cellAtIndexPath(section, row) {
        let stock = this.props.list[row]
        return <StockCell stock={stock} type="gainer" addToWatchlist={this.props.addToWL}></StockCell>
    }

    componentDidMount(){
        this.setState({list: TopGainersHelper.getStocks()})
        this.fetchList()
    }

    fetchList(){
        // let request = new Request("https://cors-anywhere.herokuapp.com/"+TopGainers, new Headers({
        //     'X-Requested-With': "XmlHttpRequest"
        // }))

        // fetch(request, {mode: 'cors'})
        // .then(response=>response.json())
        // .then((data)=>{
        //     let list = {
        //         list: data.list.item
        //     }
        //     this.setState(list)
        // })
        //this.setState(getData())
        this.props.fetch();

    }

    componentWillUnmount(){
        TopGainersHelper.saveStocks(this.state.list)
    }

}
const mapStateToProps = function(state, ownprops) {
    return {
        list: state.TopGainers.list
    }
}

const mapDispatcToProps = function(dispatch, ownProps) {
     return {
        fetch: () => {
            dispatch(fetchTopGainers())
        },
        addToWL: (stock) => {
            dispatch(addToWatchlist(stock))
        }
     }
}

export default connect(mapStateToProps, mapDispatcToProps)(TopGainersController)