import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;


class HadithCard extends Component {

    render() {
        return (
            <React.Fragment>
                <Link style={{ textDecoration: 'none' }} to="/hadithchapter">
                    <Card
                        style={{ borderRadius: "10px/10px" }}
                        hoverable
                        cover={<div><img style={{ maxWidth: "70%" }} alt="example" src={this.props.image} /></div>}
                    >
                        <Meta title={this.props.name} />
                    </Card>
                </Link>

            </React.Fragment >

        )
    }
}

export default HadithCard;