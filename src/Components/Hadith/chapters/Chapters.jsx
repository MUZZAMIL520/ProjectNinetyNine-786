import React, { Component } from 'react';
import HadithChapter from '../HadithChapter/HadithChapter';
import { getChapters } from '../HadithData/Chapters';
// import '../HadithChapter/HadithChapter.css'
import CustomHeader from "../../Layout/index"
import { Row } from 'antd'

class Chapters extends Component {
    state = {
        data: getChapters()
    }
    render() {
        let n = 0;
        return (

            <React.Fragment>
                <CustomHeader>
                    <div className="container">
                        <h1 className="text-center">Chapters</h1>
                        <div>
                            {this.state.data.map(d => {
                                n++;
                                return <HadithChapter data={d} number={n} ></HadithChapter>
                            })}</div>
                    </div>           </CustomHeader>
            </React.Fragment>


        );
    }
}

export default Chapters;