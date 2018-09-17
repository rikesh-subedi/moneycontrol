import React, {Component, } from "react"
export default class TabController extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedIndex: 0,
            children: props.children
        }
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <div className='RSViewContainer' style={this._getContainerStyle()}>
                    {
                        this.state.children.length ? this.state.children[this.state.selectedIndex]: this.state.children
                    }
                </div>
                <div className='RSTabContainer' style={this._getTabStyle()}>
                   {
                       this.props.children.length && this.props.children.map((d, i)=> {
                           let isSelected = i == this.state.selectedIndex;
                           return <div key= {i} className='RSTabItem' style={this._getTabItemStyle(isSelected)}>
                           <a  style = {{textDecoration:'none', color: !isSelected ? "tomato" : "white"}} href='#' onClick={(e) => { e.preventDefault(); this._selectTab(i)}}> 
                            {d.props.title}
                           </a>
                           </div>
                       })
                   }
                </div>
                
            </div>
        )
    }

    _getSelectedStyle(isSelected) {
        return isSelected ? {
            backgroundColor: "tomato"
        } : {
            backgroundColor: "white"
        };
    }
    _selectTab(index) {
        this.setState({selectedIndex: index})
    }

    _getTabStyle(isSelected) {
        return {
            height:50,
            width:'100%',
            position:'absolute',
            bottom:0,
            display:'flex',
            // justifyContent:'space-evenly'
        }
    }
    _getTabItemStyle(isSelected) {
        return {
            backgroundColor:isSelected ? "tomato" : "white",
            padding:5,
            flex:1,
            color: !isSelected ? "tomato" : "white",
            textAlign:'center',
            alignSelf:'center'
        }
    }
    _getContainerStyle(){
        return {
            overflowY:'scroll',
            height:'calc(100% - 60px)'
        }
    }
}