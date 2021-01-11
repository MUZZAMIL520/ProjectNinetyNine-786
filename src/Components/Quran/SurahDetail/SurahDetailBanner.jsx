import React, { Component } from 'react'
import VerseDown from "./VerseDown"
import DropDown from "./DropDown"
import { Link } from "react-router-dom"
import './surahDetail.css'

class SurahDetailBanner extends Component {
    state = {
        ayahNo: ""
    }

    render() {
        return (

            <>
                <img style={{ maxWidth: "100%", padding: "0%", margin: "0%" }} src="/BORDER.png" />
                <nav class="bannerNav navbar navbar-expand-lg py-1 my-0 ">
                    <ul class="nav navbar-.nav ">
                        <li class="my-auto">
                            <Link to="/"><i style={{ color: "white" }} className="fa fa-home fa-2x"></i></Link>
                        </li>
                        <li className="ml-2"><VerseDown surahId={this.props.surahId} data={this.props.data} /></li>
                        <li ><DropDown surahId={this.props.surahId} /></li>
                    </ul>
                </nav>
                <img style={{ maxWidth: "100%", padding: "0%", margin: "0%" }} src="/BORDER.png" />
            </>
        )




    }
}

export default SurahDetailBanner;
{/* <img className="py-0" style={{ maxWidth: "100%" }} src="/BORDER.png" />
                <Menu
                    style={{ backgroundColor: "#741626" }}
                    mode="horizontal"
                    className="py-auto"
                >
                    <Menu.Item key="/" >
                        <i class="fa fa-home" style={{ fontSize: "2em" }}></i>
                    </Menu.Item>
                    <Menu.SubMenu style={{ color: "white", marginRight: "0.5%" }} title={"Ayah No " + this.state.ayahNo} >

                        {this.props.data.map(d => {
                            return <Menu.Item style={{ color: "#741626" }} key={d.AyahNo} onClick={() => this.setState({ ayahNo: d.AyahNo })} >
                                {d.AyahNo}
                            </Menu.Item>
                        })
                        }
                    </Menu.SubMenu>
                    <i class="fa fa-caret-down" style={{ fontSize: "1.5em", marginLeft: "0%", color: "white" }}></i>



                </Menu>

                <img className="py-0" style={{ maxWidth: "100%" }} src="/BORDER.png" /> */}