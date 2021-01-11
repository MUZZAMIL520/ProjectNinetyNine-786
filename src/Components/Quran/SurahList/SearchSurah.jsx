import React, { Component } from 'react';
import { getData } from "../Utils/finalSurahList"
import Sugestions from './Sugestions';
import './searchSurah.css'

import { Row, Col } from "antd";
import {
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
class SearchSurah extends Component {
  state = {
    query: "",
    data: getData(),
    filteredData: [],
    check: true
  };


  componentWillMount() {
    this.
      setState(this.state.data = getData())

  }

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.SurahNameEnglish.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData,
      };
    });
  };
  checking() {
    const query = this.state.query;
    if (query.length > 1)
      return <div class="B86yR7URt7CDk9ZTRWb2d">
        <Sugestions results={this.state.filteredData} ></Sugestions>
      </div>
    else
      return <div class="B86yR7URt7CDk9ZTRWb2d">
      </div>
  }

  render() {
    return (
      <React.Fragment>
        <Row className="container">
          <Col xs={24} sl={24} lg={24} md={24} xl={24} className="text-center pb-0">
            <div className="right-inner-addon">
              <CInputGroup>
                <CInput
                  type="search"
                  placeholder="Search &quot;Muzammil&quot;"
                  autoComplete="username"
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </CInputGroup>
              {this.checking()}
            </div>
          </Col>

          <div className="col-md-10 col-md-offset-1 text-center pb-0">


          </div>
        </Row>

      </React.Fragment>)
  }
}

export default SearchSurah;
{/* <a tabindex="-1">
<i className="ss-icon ss-search"></i>
</a>
<input type="search" placeholder="Search &quot;Muzammil&quot;" value={this.state.query} onChange={this.handleInputChange}></input> */}
