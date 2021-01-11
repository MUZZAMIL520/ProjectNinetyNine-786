import React, { Component } from 'react'
import { Link } from "react-router-dom"
import SupplicationData from "./SupplicationData"
import SupplicationCard from "./SupplicationCard"
import {
  Row,
  Col,
  Card
} from "antd";
import 'antd/dist/antd.css';

class SupplicationDetail extends Component {
  render() {
    return (
      <>
      <h2 hoverable style={{textAlign:"center",margin:"2%",color:" #73ad21"}}>SUPPLICATIONS</h2>
      <section>{
        SupplicationData.map((Supplication) => {
          return <SupplicationCard id={Supplication.id} arabic={Supplication.arabic} translation={Supplication.translation}  image="./Supplication.png"/>
        })
      }
      </section>
      </>
    )
  }
}

export default SupplicationDetail;