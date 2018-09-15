import React, {Component} from "react"
const ListContainerStyle = {
    listStyleType: 'none', 
    width: '100%',
    display: 'table',
    tableLayout: 'fixed',
    padding:0
};
const ListItemStyle = {
    //display:'table-cell',
    height: 50,
    margin: 10
}
class TableView extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    renderRow(section, row) {
        return <li key={section+""+row} style={ListItemStyle}>
            {this.props.delegate.cellAtIndexPath(section, row)}
        </li>
    }
    renderSection(section) {
        return <li key={section} style={ListItemStyle}>
          <div>
            <h2> {
                this.props.datasource && this.props.datasource.headerForSection ? this.props.datasource.headerForSection(section) : ""
            }</h2>
          </div>
          <ul style={ListContainerStyle}>
            {
                this.props.datasource && 
                this.props.datasource.numberOfRowsInSection ?  
                Array.from({length: this.props.datasource.numberOfRowsInSection(section)}, (d, row) => this.renderRow(section, row))
                :alert("numberOfRowsInSection does not exist")
                
            }
          </ul>
        </li>
    }

    render(){
        return (
            <div>
                <ul style={ListContainerStyle}>
                    {
                    
                        this.props.datasource && 
                        this.props.datasource.numberOfSections ?
                        Array.from({length:(this.props.datasource.numberOfSections())}, (d, section) => this.renderSection(section)) :
                        Array.from({length:1}, (d, section) => this.renderSection(section))
                        
                    }
                </ul>
            </div>
        )
    }
}
export default TableView;