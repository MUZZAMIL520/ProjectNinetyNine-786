import React, { Component } from 'react'
import { getHadithData } from '../HadithData/HadithData'
import HadithDetail from './HadithDetail'
import './HadithDetail.css'
import CustomLayout from './../../Layout/index';

class HadithList extends Component {
    state = {
        data: getHadithData()
    }
    render() {
        let n = 0;
        return (<CustomLayout>

            <div className="container text-center" id="mostImp">
                <h1 id="hadithText" >Hadiths</h1>
                {this.state.data.filter(a => a.chapter_no == this.props.match.params.chapterNumber).map(d => {
                    return <HadithDetail data={d} ></HadithDetail>
                })}
                {console.log(this.props.match.params.chapterNumber)}
            </div>
            <br /><br /><br /><br />
        </CustomLayout>
        );
    }
}

export default HadithList;