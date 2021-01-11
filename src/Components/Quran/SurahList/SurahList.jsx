import React, { Component } from "react";
import Surah from "../SurahList/Surah";
import { getData } from "../Utils/finalSurahList";
import SearchSurah from './SearchSurah';
import Banner from '../../Banner/Banner'
import CustomLayout from "../../Layout";
import "./SurahList.css"
import {
  Row,
  Col,

} from "antd";


class SurahList extends Component {
  state = {
    data: getData(),
  };

  render() {
    return (
      <React.Fragment>
        <CustomLayout {...this.props}>
          <Banner />
          <br />
          <SearchSurah></SearchSurah>
          <div className="container-fluid" style={{ marginTop: "3em" }} >
            <h4 class="text-muted text-center">
              <span class="english undefined">
                <span id="surahHead" >SURAHS (CHAPTERS)</span>
              </span>
            </h4>


            <Row>
              <Col className="gutter-row mx-4" xs={22} sl={22} lg={7}>
                <ul className="list-unstyled">
                  {this.state.data.slice(0, 38).map((d) => {
                    return (
                      <li key={d.num} className="d-block pt-1">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
              </Col>

              <Col className="gutter-row mx-4" xs={22} sl={22} lg={7}>
                <ul className="list-unstyled">
                  {this.state.data.slice(38, 76).map((d) => {
                    return (
                      <li key={d.num} className="d-block pt-1">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
              </Col>

              <Col className="gutter-row mx-4" xs={22} sl={22} lg={7}>
                <ul className="list-unstyled">
                  {this.state.data.slice(76, 114).map((d) => {
                    return (
                      <li key={d.num} className="d-block pt-1">
                        <Surah
                          num={d.SurahNo}
                          name={d.SurahNameEnglish}
                          meaning={d.SurahMeaning}
                          arabicText={d.SurahNameArabic}
                        ></Surah>
                      </li>
                    );
                  })}
                </ul>
              </Col>


            </Row>



          </div>



        </CustomLayout >
      </React.Fragment >
    );
  }
}

export default SurahList;
