import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import {
    Row,
    Col,
    Layout
} from "antd";
const { Meta } = Card;


class SupplicationCard extends Component {

    render() {
        return (
            <React.Fragment>
                <Link style={{ textDecoration: 'none' }} >
                    <Card
                        hoverable
                        className="mx-auto my-1"
                        style={{ width: "80%" }}
                    >                   
                     <Row>
                         <div class="col-sm-4">
                         <img src={this.props.image} style={{height:"80%",width:"80%"}}></img>
                         </div>
                        <div style={{ border: "none" }} class="card shadow p-3 mb-5 bg-white rounded col-sm-8">
                        <Meta title={this.props.id} style={{margin:"2%"}}/>
                            <div class="card-body hadithDetail">
                                <h6><h3>Arabic:</h3> {this.props.arabic} </h6>
                                <p id="detail"><h3>Translation:</h3> {this.props.translation} </p>

                            </div>
                        </div>
                    </Row>

                    </Card>
                </Link>

            </React.Fragment >

        )
    }
}

export default SupplicationCard;