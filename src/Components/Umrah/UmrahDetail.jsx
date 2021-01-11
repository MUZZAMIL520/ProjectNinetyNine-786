import React, { Component } from 'react'
import { Link } from "react-router-dom"
import UmrahData from "./UmrahData"

// import "../Hadith.css"
import {
  Row,
  Col,
  Card
} from "antd";
import 'antd/dist/antd.css';
import UmrahCard from './UmrahCard';
import { Button } from 'bootstrap';

class UmrahDetail extends Component {
  render() {
    return (
      <>
      <h2 hoverable style={{textAlign:"center",margin:"2%",color:" #73ad21"}}>UMRAH GUIDANCE</h2>
      <section>{
        UmrahData.map((UmrahObj) => {
          return <UmrahCard name={UmrahObj.name} detail={UmrahObj.detail} image="./HajjUmrahGuide.png"/>
        })
      }
      </section>
      </>
    )
  }
}

export default UmrahDetail;