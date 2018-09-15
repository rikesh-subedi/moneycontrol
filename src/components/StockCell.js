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
        this.state = props.stock
        this._addToWatchList = this._addToWatchList.bind(this);
        //this.url = "https://hacker-news.firebaseio.com/v0/item/"+this.state.id+".json"
        //this.url = "/dist/mock/"+this.state.id+".json"
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
                    <span className='stk-id' >{this.state.id}</span>
                    <span className='stk-short-name'>{this.state.shortname}</span>
                   </div>
                   <div className ='stk-mid-content'>
                    <span className ='stk-last-value'>{this.state.lastvalue}</span>
                    <span className ='stk-volume'> vol {this.state.volume}</span>
                   </div>
                   <div className ='stk-right-content'>
                    <div>
                    <span className='stk-arrow'>
                    
                    {this.state.percentchange < 0 ? <FontAwesomeIcon icon={faCaretDown} style={{color: 'red'}}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCaretUp} style={{color: 'green'}}></FontAwesomeIcon>}
                    </span>
                    {this.state.percentchange < 0 ? <span className='stk-change-pc stk-negative'>{this.state.percentchange}%</span> : <span className='stk-change-pc stk-positive'>{this.state.percentchange}%</span> }
                    </div>
                    <div style={{marginLeft:50}}>
                    { WatchlistsHelper.exists(this.state) ? <button>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                </button> :  <button onClick={this._addToWatchList}>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </button> }

                   
                    </div>
                    
                   </div>
                   
                </div>
            </div>
        )
    }
    _addToWatchList(e) {
        WatchlistsHelper.addStock(this.state)
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