import React, { Component } from 'react'
import TableDetail from "../TableDetail/TableDetail"
import "./NaatDetail.css"
import TableBody from '../TableBody/TableBody'

class NaatDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            naat: []
        }

    }
    componentDidMount() {
        this.setState({ naat: this.props.data })

    }
    render() {
        return (

            <div className="Container">
                {this.state.naat.length !== 0 ? <React.Fragment>
                    <TableBody data={this.state.naat[0]} />
                    <table className="table table-hover" style={{ width: "70%", marginLeft: "14%" }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th style={{ fontFamily: "calibri", fontSize: "1.2em" }}>TITLE</th>
                                <th style={{ fontFamily: "calibri", fontSize: "1.2em" }}>ARTIST</th>
                                <th><i className="fa fa-clock-o fa-2x"></i></th>
                                <th></th>
                            </tr>
                        </thead>
  
                        {this.state.naat.map(d => {
                            return <TableDetail data={d} />
                        })}

                    </table>
                    </React.Fragment> : <div></div>}
                    
                <br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default NaatDetail;