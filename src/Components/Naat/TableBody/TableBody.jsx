import React, { Component } from 'react'
import "../NaatDetail/NaatDetail.css"
import {Card,Row,Col} from "antd";
import 'antd/dist/antd.css';

class TableBody extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <Card id="table1">
                         <Row>
                            <Col className="gutter-row" lg={6} md={6} sm={22} xs={22} > 
                            <img id="titleImage" src={this.props.data.iconLocation} alt="Naat Image" />
                             </Col>
                             <Col id="artistName" className="gutter-row" lg={12} md={12} sm={30} xs={30}>
                             <b>{this.props.data.title}</b>
                             </Col>
                        </Row> 
                    </Card>
             </div>
        )
    }
}

export default TableBody;