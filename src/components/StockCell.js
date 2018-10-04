import React, {Component} from "react"
import './StockCell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import WatchlistsHelper from './WatchlistsHelper';
const StockCellStyle = {
    container: {
        backgroundColor:'white',
        height:'100%',
        borderRadius:"10px",
        border: "1px solid gray",
        boxShadow:"9px 5px 16px"
    }
    
}
class StockCell extends Component {
    constructor(props){
        super(props)
        this._addToWatchList = this._addToWatchList.bind(this);
        this.state = { stock: props.stock}
    }

    _formatedDate(dateInt){
        let date = new Date(dateInt);
        return date.toDateString();
    }
    render(){
        return (
            <div style={StockCellStyle.container}>
                <div style={{height:40, padding: 10, display:'flex'}} className='stk-content-wrapper'>
                   <div className ='stk-left-content'>
                    <span className='stk-id' >{this.state.stock.id}</span>
                    <span className='stk-short-name'>{this.state.stock.shortname}</span>
                   </div>
                   <div className ='stk-mid-content'>
                    <span className ='stk-last-value'>{this.state.stock.lastvalue}</span>
                    <span className ='stk-volume'> vol {this.state.stock.volume}</span>
                   </div>
                   <div className ='stk-right-content'>
                    <div>
                    <span className='stk-arrow'>
                    
                    {this.props.stock.percentchange < 0 ? <FontAwesomeIcon icon={faCaretDown} style={{color: 'red'}}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretUp} style={{color: 'green'}}></FontAwesomeIcon>}
                    </span>
                    {this.props.stock.percentchange < 0 ? <span className='stk-change-pc stk-negative'>{this.state.stock.percentchange}%</span> : <span className='stk-change-pc stk-positive'>{this.state.stock.percentchange}%</span> }
                    </div>
                    <div style={{marginLeft:50}}>
                    { WatchlistsHelper.exists(this.state.stock) ? <button>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </button> :  <button onClick={() => {
                    this._addToWatchList(this.state.stock)
                }}>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </button> }

                   
                    </div>
                    
                   </div>
                   
                </div>
            </div>
        )
    }
    _addToWatchList(e) {
        WatchlistsHelper.addStock(this.state.stock)
        this.forceUpdate()
    }

    fetchNews(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            })
    }
    componentDidMount(){
        //this.fetchNews()
    }
}

export default StockCell;