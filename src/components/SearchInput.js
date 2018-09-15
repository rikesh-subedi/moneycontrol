import React, {Component} from 'react' 
export default class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {text: ""}
        this._onTextChange = this._onTextChange.bind(this);
        this._onButtonPressed = this._onButtonPressed.bind(this)
    }
    render(){
       return <div>
            <input type='search' placeholder='search stock' onChange={this._onTextChange} value={this.state.text}></input>
            <button onClick={this._onButtonPressed}>Search</button>
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