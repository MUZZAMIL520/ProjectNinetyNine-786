import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "./Menu.css"
import { Link } from 'react-router-dom'
import CustomLayout from './../Layout/index';

import { Row, Col, Layout, Card } from "antd";

const { Footer } = Layout
const { Meta } = Card
const data = [
    {
        name: "HOLY QURAN",
        imageUrl: "/QURAN.png",
        link: "/surahList"
    },
    {
        name: "HADITH",
        imageUrl: "/HADITH.png",
        link: "/hadith"
    },
    {
        name: "NAAT",
        imageUrl: "/NAAT.png",
        link: "/naats"
    },
    {
        name: "ZAKAT",
        imageUrl: "/Zakat.png",
        link: "/zakaat"
    },
    {
        name: "UMRAH GUIDANCE",
        imageUrl: "/HajjUmrahGuide.png",
        link: "/umrah"
    },
    {
        name: "SUPPLICATIONS",
        imageUrl: "/Supplication.png",
        link: "/supplication"
    },
    {
        name: "PRAYER'S TIMING",
        imageUrl: "/Timings.png",
        link: "/prayer"
    }
]
class Menu extends Component {

    render() {


        return (
            <CustomLayout check="false">
                <div style={{ minHeight: "81.8vh" }} className="text-center">
                    <Row className="mt-4" style={{ paddingTop: "7%" }}>
                        {data.map(d => {
                            return <Col className="mx-auto my-1 text-center" xs={13} sm={13} lg={5}>
                                <Link style={{ textDecoration: 'none' }} to={d.link}>
                                    <Card
                                        style={{ borderRadius: "10px/10px" }}
                                        hoverable
                                        cover={<div><img style={{ maxWidth: "80%" }} alt="example" src={d.imageUrl} /></div>}
                                    >
                                        <Meta title={d.name} />
                                    </Card>
                                </Link>

                            </Col>
                        })}


                    </Row>
                </div>
                <Footer
                    className="text-center py-3 footer"
                    style={{
                        backgroundColor: "#006400",
                        width: "100%",
                        color: "white",
    
                    }}
                >
                    <div>© Ninety Nine 2020</div>
                </Footer>
            </CustomLayout>



        )
    }
}

export default Menu;