import React, { Component } from "react";
import "./surahDetail.css";
import { getData } from './../Utils/FinalQuran';
import SurahDetailBanner from './SurahDetailBanner';
import Section from "./Section";
import CustomLayout from "../../Layout/index"


class SurahDetail extends Component {
  state = {
    data: getData(),
    surah: []
  };
  componentDidMount() {
    window.scrollTo(0, 0)
    // this.changeVerse()
    let data1 = []
    {
      this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
        return (
          data1.push(d)

        );
      })
    }

    this.setState(this.state.surah = data1);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      let data1 = []
      {
        this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
          return (
            data1.push(d)

          );
        })
      }

      this.setState({ surah: data1 });
    }
  }



  getBismillah() {
    if (this.props.match.params.surahId != 1)

      return (
        <div class="row">
          <div id="bismillah" class="col-12 text-center my-3">
            ﷽
      </div>
        </div>)
  }



  render() {
    return (
      <React.Fragment>
        <CustomLayout>
          < div className="container-fluid px-0">
            <br /><br />
            <SurahDetailBanner surahId={this.props.match.params.surahId} data={this.state.surah} />
            {this.getBismillah()}


            <div className="container-fluid px-5">
              {this.state.data.filter(d => d.SurahNo == this.props.match.params.surahId).map((d) => {
                return (<Section id={d.AyahNo} d={d} ></Section>
                );
              })}
            </div>

          </div >
        </CustomLayout>
      </React.Fragment>
    );
  }
}

export default SurahDetail;
