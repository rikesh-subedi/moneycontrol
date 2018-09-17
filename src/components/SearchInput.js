import React, {Component} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons';
export default class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {text: ""}
        this._onTextChange = this._onTextChange.bind(this);
        this._onButtonPressed = this._onButtonPressed.bind(this)
    }
    render(){
       return <div style={{padding:10, fontSize:30, display:"flex", justifyContent: "center", alignItems:"center"}}>
            <input style={{fontSize:30, paddingLeft:10,marginRight:10 }} type='text' placeholder='search stock' onChange={this._onTextChange} value={this.state.text}></input>
            <a ahref="#" onClick={this._onButtonPressed}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </a>
        </div>
    }
    _onTextChange(e) {
        this.setState({text: e.currentTarget.value})
        this.props.delegate && this.props.delegate.onTextChange(this.state.text)
    }
    _onButtonPressed(e){
        this.props.delegate && this.props.delegate.onSearchButtonPressed(this.state.text)
    }
}