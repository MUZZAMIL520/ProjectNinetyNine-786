import React, { Component } from "react";
import ArabicText from "./ArabicText";
import { Row, Col } from 'antd'
import './surahDetail.css'






class TextArea extends Component {
  state = {};
  render() {

    return (
      <React.Fragment>
        <Row >
          <Col span={24}>
            <div style={{ border: "none", }} class="mb-1  rounded">
              <div class="card-body surahDetailDesign">
                <h1 className="text-right my-2 arabicText">
                  <ArabicText arabicText={this.props.arabicText} verseNo={this.props.verseNo}></ArabicText>
                </h1>
                <div
                  className="_3lGHjbOJzvx3DuyRwynz_u"
                >
                  <h4 className="montserrat">Sahih International</h4>
                  <h2 className="times-new">
                    <p >{this.props.englishMeaning}</p>
                  </h2>
                </div>

              </div>
            </div>

          </Col>

        </Row>

        {/* <div className="row false sZx-fa6AirbM7nH-BV0hj">
          <div className="col-md-12 col-sm-12">
            <h1 className="_18GCvKRhcweklf213h5OkX text-right text-arabic">
              <p>
                <ArabicText arabicText={this.props.arabicText} verseNo={this.props.verseNo}></ArabicText>
              </p>
            </h1>
            <div
              id="trans96343"
              className="_3lGHjbOJzvx3DuyRwynz_u false translation"
            >
              <h4 className="montserrat">Sahih International</h4>
              <h2 className="text-left text-translation times-new">
                <small className="english">{this.props.englishMeaning}</small>
              </h2>
            </div>
            <div>

            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default TextArea;
