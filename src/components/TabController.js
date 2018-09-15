import React, {Component, } from "react"
export default class TabController extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedChild: props.children.length ? props.children[0]: props.children
        }
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <div className='RSViewContainer' style={this._getContainerStyle()}>
                    {
                        this.state.selectedChild
                    }
                </div>
                <div className='RSTabContainer' style={this._getTabStyle()}>
                   {
                       this.props.children.length && this.props.children.map((d, i)=> {
                           return <div key= {i} className='RSTabItem' style={this._getTabItemStyle()}>
                           <a href='#' onClick={(e) => { e.preventDefault(); this._selectTab(i)}}> 
                            {d.props.title}
                           </a>
                           </div>
                       })
                   }
                </div>
                
            </div>
        )
    }

    _selectTab(index) {
        this.setState({selectedChild: this.props.children[index]})
    }

    _getTabStyle() {
        return {
            height:50,
            width:'100%',
            position:'absolute',
            bottom:0,
            backgroundColor:'white',
            display:'flex',
            justifyContent:'space-evenly'
        }
    }
    _getTabItemStyle() {
        return {
            backgroundColor: 'white',
            margin:5,
            height:"80%"
        }
    }
    _getContainerStyle(){
        return {
            overflowY:'scroll',
            height:'calc(100% - 60px)'
        }
    }
}