import React, { Component } from 'react'
import '../Hadith.css'

class HadithDetail extends Component {
    state = {}
    render() {
        const { data } = this.props;
        let c = data.text_en;
        return (
            <div style={{ border: "none" }} class="card shadow p-3 mb-5 bg-white rounded">
                <div class="card-body hadithDetail">
                    <h5 style={{ fontFamily: "Hadith", fontSize: "1.5em" }} class="card-title text-right">{data.text_ar}‏</h5>
                    <br /><br />
                    <p id="EnglishText" class="card-text">{`${c.split(':')[0]}:`}</p>
                    <p id="EnglishText" class="card-text">{c.substring(c.indexOf(':') + 1)}</p>
                    <br /><br /><br />
                    <p id="detail"> Book: Sahih Bukhari </p>
                    <p id="detail">Hadees No # <span>{data.hadith_id}</span></p>
                    <p id="detail">Chapter: <span>{data.chapter_no}</span></p>
                </div>
            </div>
        );
    }
}

export default HadithDetail;