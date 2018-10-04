import React, {Component} from "react";
import TableView from './TableView';
import StockCell from './StockCell';
import getData from '../mock/data';
import {TopLosers} from './API';
import TopLosersHelper from './TopLosersHelper'
import {connect} from 'react-redux';
import {fetchTopLosers} from '../actions/commonActions';
class TopLosersController extends Component {
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
        return <div>Top Losers</div>
    }
    
    cellAtIndexPath(section, row) {
        let stock = this.props.list[row]
        return <StockCell stock={stock} type="losers"></StockCell>
    }

    componentDidMount(){
        this.setState({list: TopLosersHelper.getStocks()})
        this.fetchList()
    }

    fetchList(){
        // let request = new Request("https://cors-anywhere.herokuapp.com/"+TopLosers, new Headers({
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
        TopLosersHelper.saveStocks(this.state.list)
    }

}

const mapStateToProps = function(state, ownprops) {
    return {
        list: state.TopLosers.list
    }
}

const mapDispatcToProps = function(dispatch, ownProps) {
     return {
        fetch: () => {
            dispatch(fetchTopLosers())
        },
        addToWatchlist:(stock) => {
            dispatch()
        }
     }
}

export default connect(mapStateToProps, mapDispatcToProps)(TopLosersController)