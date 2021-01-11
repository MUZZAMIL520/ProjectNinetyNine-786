import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import React, { Component,useState } from 'react';
import { Link } from "react-router-dom";
import "./Prayer.css"
import PrayerLayout from '../Layout/PrayerLayout';

import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 10,
    },
  };

export default class Prayer extends Component {
    state={
        city:"",
        country:"",
        data:[],
        isDisplayed:false
    }
    countryHandler=(e)=>{
        this.setState({country:e.target.value})
    }
     cityHandler=(e)=>{
        this.setState({city:e.target.value})
  }
  displayPrayers=()=>{
      this.setState({data:[]})
    fetch("/timingsByAddress?address="+this.state.city, {
        "method": "GET",
        "headers": {
          "address":this.state.city,
            "Content-Type": "application/json"
          }
      })
      .then((response) => response.json())
      .then((response) => {
          if(response.status=="OK"){
            this.setState({data:[...this.state.data,response.data.timings]})
            this.setState({isDisplayed:true})
          }
          else{
            this.setState({data:[...this.state.data,{Message:"Please enter Valid Country/City"}]})
            this.setState({isDisplayed:true})
              
          }
       })


  }
    render() {
        return (
            <div>
                <PrayerLayout>
                    <div style={{ marginLeft: "2%", marginTop: "2%" }}>
                        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>FIND PRAYER'S TIMING</h1>
                        <Row>
                            <Col sm={16} xs={16} lg={20} md={18} xl={20}>
                                <Form {...layout}  className="prayerForm">
                                    <Form.Item
                                        name="Country"
                                        label="Country"
                                    >
                                        <Input value={this.state.country} placeholder="Please Enter Your Country" onChange={this.countryHandler}/>
                                    </Form.Item>
                                    <Form.Item
                                        name="City"
                                        label="City"
                                    >
                                        <Input value={this.state.city} placeholder="Please Enter Your City" onChange={this.cityHandler}/>
                                    </Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={this.displayPrayers}>
                                        FIND PRAYERS TIMING
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    {this.state.isDisplayed && <ReactFlexyTable className="prayerCustomStyling " data={this.state.data} />}
                </PrayerLayout>
            </div>
        )
    }
}