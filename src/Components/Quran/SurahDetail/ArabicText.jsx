import React, { Component } from "react";
import './surahDetail.css'

class ArabicText extends Component {
  render() {
    return (
      <>
        <p style={{ fontFamily: 'QuranFont', wordSpacing: "5px", padding: "0%", margin: "0%" }} >
          {this.props.arabicText} </p>
        <span style={{ fontFamily: "Calibri", fontSize: "0.5em" }}  >&#xFD3E;{this.props.verseNo}&#xFD3F;</span>

      </>
    );
  }
}

export default ArabicText;
