import React, { Component } from 'react'
import Slider from "../Slider/Slider"
import {Layout} from 'antd'
const {Footer}=Layout
const data = [
    {
        title: "Junaid Jamshed",
        iconLocation: "data:image/jpeg;base64,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"
    },
    {
        title: "Hooria Rafiq",
        iconLocation: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5hc1g_YiwpQrT_cglg8WRdtpAHhztedEUA&usqp=CAU"

    },
    {
        title: "Amjad Sabri",
        iconLocation: "https://nettv4u.com/imagine/a/m/j/a/d/0/amjad-sabri.png"
    },
    {
        title: "Atif Aslam",
        iconLocation: "https://i1.sndcdn.com/artworks-000169116735-rag4e2-t500x500.jpg"
    },
    {
        title: "Farhan Ali Waris",
        iconLocation: "https://i.tribune.com.pk/media/images/1128501-WarisAliShah-1466622460/1128501-WarisAliShah-1466622460.jpg"
    },
    {
        title: "Farhan Ali Qadri",
        iconLocation: "https://naatsharif.com/wp-content/uploads/2018/05/About-Farhan-Ali-Qadri-300x300.jpeg"
    },
    {
        title: "Javeria Saleem",
        iconLocation: "https://pakistani.pk/wp-content/uploads/2017/06/Javeria20Saleem20-20Complete20Naat20Collections-9-1497909179.jpg"
    },
    {
        title: "Khalid Hasnain Khalid",
        iconLocation: "https://i1.sndcdn.com/avatars-000201608044-uu9kux-t500x500.jpg"
    },
    {
        title: "Rahat Fateh Ali Khan",
        iconLocation: "https://www.cokestudio.com.pk/season12/img/blogs/rfak.jpg"
    },
    {
        title: "Owais Raza Qadri",
        iconLocation: "https://thedigitalislam.com/wp-content/uploads/2019/04/Owais-Raza-Qadri-naats.jpg"
    },
    
    
    
]


class NaatHome extends Component {


    render() {
        return (<>
            {this.props.data.length > 0 ?
                <Slider data={this.props.data} player={this.props.player} title="New Naats" /> : <div></div>
            }
            {<Slider data={data} player={this.props.player} title="Artists"></Slider>}
            <Footer
            className="text-center py-3"
            style={{
              backgroundColor: "#006400",
              width:"100%",
              color: "white",
              position:"absolute",
              bottom:"0"
            }}
          >
            <div>© Ninety Nine 2020</div>
          </Footer>
        </>
        )
    }
}

export default NaatHome;