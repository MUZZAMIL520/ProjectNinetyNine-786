import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Surah.css'

class Surah extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="border px-1 py-1 rounded chapter-number-box">
          <span class="badgeSurahNo">{this.props.num}</span>

          <Link style={{ textDecoration: 'none' }} to={`/surahlist/${this.props.num}`} class="row flex-row" data-controller="track" data-name="chapters" data-category="1-Al-Fatihah" href="/1">
            <div class="col mt-2 mx-3 ">
              <h5 class="name text-muted ListFont">{this.props.name}</h5>
              <span class="text-nowrap text-primary english ListFont1">{this.props.meaning}</span>
            </div>

            <div class="col-5 icon mt-2 text-primary text-right">
              <span style={{ color: "#741626", fontFamily: "Calibri", fontSize: "25px" }} class={"icon-surah" + this.props.num}></span>
              <span style={{ color: "#741626", fontFamily: "Calibri", fontSize: "25px" }} class="icon-surah icon-surah-surah"></span>
            </div>
          </Link>  </div>

        {/* <Link to={`/surahlist/${this.props.num}`} class="_2UxM9CFlksUC9o7XqGCTrP row">
          <div style={{ color: "#741626", fontFamily: "Calibri" }} class="col-xs-2">{this.props.num}</div>
          <div style={{ color: "#741626", fontFamily: "Calibri", fontSize: "18px" }} class="col-xs-7">{this.props.name}</div>
          <div class="col-xs-3 text-left _26R0dcL03HfMlhTuaGv0PE">
            <span style={{ color: "#741626", fontFamily: "Calibri", fontSize: "25px", position: "absolute", right: "0%" }} class={"icon-surah" + this.props.num}></span>
          </div>
          <div class="col-xs-10 col-xs-offset-2 YjSb1vbALjiAmE0C93FXi">
            <span style={{ color: "#741626", fontFamily: "Calibri", fontSize: "10px" }} class="text-uppercase english">{this.props.meaning}</span>
          </div>
        </Link> */}
      </React.Fragment >
    );
  }
}

export default Surah;
