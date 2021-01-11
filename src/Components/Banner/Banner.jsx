import React, { Component } from 'react';
import './Banner.css'
class Banner extends Component {


    render() {
        return (
            <div className="text-center">
                <img id="border1" className="text-center" src="/BORDER.png" />
                <div id="banner">
                    <div>
                        <img id="white-logo" src="/QURANWHITE.png" alt="THE HOLY QUR'AN" />
                        <p id="quran-text">THE HOLY QUR'AN</p></div>
                    <img id="quranic-ayat" src="/QuranicAyat.png" />
                </div>
                <img id="border2" src="/BORDER.png" />
            </div>
        )
    }
}
export default Banner;