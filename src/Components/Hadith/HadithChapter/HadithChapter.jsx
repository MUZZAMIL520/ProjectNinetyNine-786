import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import "../Hadith.css"
import {
  Row,
  Col,
  Card
} from "antd";
import 'antd/dist/antd.css';


class HadithChapter extends Component {
  render() {
    return (

      <Link style={{ textDecoration: 'none' }} to={`/hadithchapter/${this.props.number}`}>
        <Card
          hoverable
          className="mx-auto my-1"
          style={{ width: "80%" }}
        >
          <Row >
            <Col className="gutter-row " xs={2} sl={2} lg={2} md={2}><b>{this.props.number}</b></Col>
            <Col className="gutter-row" xs={20} sl={20} lg={20} md={20}>{this.props.data.Chapter}</Col>

          </Row>
        </Card>
      </Link>
    )
  }
}

export default HadithChapter;