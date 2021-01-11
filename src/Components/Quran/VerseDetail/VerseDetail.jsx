import React, { Component } from 'react'
import TextArea from '../SurahDetail/TextArea';
import {getData} from "../Utils/FinalQuran"
import '../Utils/quran.css'

class VerseDetail extends Component {
    state = {
        data:getData(),
        surah: []
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        const {surahId,ayahId}=this.props.match.params
        let data1 = []
        {
          this.state.data.filter(d => d.SurahNo == surahId && d.AyahNo==ayahId).map((d) => {
            return (
                data1.push(d)
    
            );
          })
        }
        this.setState({ surah: data1 });

  }

    getBismillah() {
        return <div className="row">
                <div id="bismillah" className="col-12 text-center my-2">
                    ﷽
        </div>
            </div>
    }
   
    render() {
        
        return (

            <div>{this.getBismillah()}

                <div className="container-fluid _2YLYw6-PFXwkQkNKiNXhFR ">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            {this.state.surah.map(d=>{
                                return (< TextArea
                                    verseNo={d.AyahNo}
                                    arabicText={d.OrignalArabicText}
                                    englishMeaning={d.EnglishTranslation}
                                ></TextArea>)
                            })}
                            

                        </div>
                    </div>
                </div>
                </div>
            
                );

    }
}

export default VerseDetail;