import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import {
    Row,
    Col,
    Layout
} from "antd";
const { Meta } = Card;


class UmrahCard extends Component {

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
                         <img src={this.props.image} style={{height:"100%",width:"100%"}}></img>
                         </div>
                        <div style={{ border: "none" }} class="card shadow p-3 mb-5 bg-white rounded col-sm-8">
                        <Meta title={this.props.name} style={{margin:"2%"}}/>
                            <div class="card-body hadithDetail">
                                <p > {this.props.detail} </p>
                            </div>
                        </div>
                    </Row>

                    </Card>
                </Link>

            </React.Fragment >

        )
    }
}

export default UmrahCard;