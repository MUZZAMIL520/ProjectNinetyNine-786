import React, { Component } from 'react'
import HadithCard from '../HadithCard/HadithCard'
import CustomLayout from "../../Layout/index"
import 'antd/dist/antd.css';
import {
    Row,
    Col,
    Layout
} from "antd";
const {Footer}=Layout
const data = [
    {
        name: "Al Bukhari",
        imageUrl: "/Bukhari.png"
    },
    {
        name: "Al Tirmazi",
        imageUrl: "/Tirmazi.png"
    },
    {
        name: "Al Muslim",
        imageUrl: "/Muslim.png"
    },
    {
        name: "Abu Dawood",
        imageUrl: "/Dawood.png"
    },{
        name: "Al Nisai",
        imageUrl: "/Nisai.png"
    },
    {
        name: "Sunna Ibn e Majja",
        imageUrl: "/majja.png"
    },
    {
        name: "Mishkaat",
        imageUrl: "/Mishkaat.png"
    },
    {
        name: "Musnad Ahmed",
        imageUrl: "/hambal.png"
    }]

class HadithHome extends Component {
    render() {
        return (
            <React.Fragment>

                <CustomLayout check="false">
                    <div style={{minHeight:"85.3vh"}} className="container-fluid text-center">
                        <Row>
                            {data.map(d => {
                                return <Col className="mx-auto my-1 text-center" xs={13} sm={13} lg={5} md={5} xl={5}>
                                    <HadithCard name={d.name} image={d.imageUrl} />
                                </Col>

                            })}
                        </Row>
                        
                        
                    </div>
                    <Footer
            className="text-center py-3"
            style={{
              backgroundColor: "#006400",
              width:"100%",
              color: "white",
              
            }}
          >
            <div>© Ninety Nine 2020</div>
          </Footer>
                </CustomLayout>

            </React.Fragment >

        );
    }
}

export default HadithHome;