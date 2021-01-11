import React, { Component } from 'react';
import {
  CForm,
  CInput,
  CInputGroup,
} from "@coreui/react";
import validate from 'react-joi-validation';
import Joi from 'joi-browser'
import { app } from '../../../base';
import Loader from 'react-loader-spinner'


var schema = {
  name: Joi.string().required(),
  artist: Joi.string().required(),
  duration: Joi.string().required()
};

let file, file2 = null
class AddNaat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist: '',
      duration: '',
      naatFile: null,
      imageFile: '',
      audioLocation: '',
      iconLocation: ''
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  handleArtistChange = (event) => {
    this.setState({
      artist: event.target.value
    });
  }
  handleDurationChange = (event) => {
    this.setState({
      duration: event.target.value
    });
  }
  handleNaatFileChange = (event) => {
    file = event.target.files[0]
  }
  handleImageFileChange = (event) => {
    file2 = event.target.files[0]
  }

  async handleAdd(e) {
    e.preventDefault()

    await app.database().ref('naats').push({
      title: this.state.name,
      artist: this.state.artist,
      duration: this.state.duration,
      audioLocation: this.state.audioLocation,
      iconLocation: this.state.iconLocation
    }).then(() => alert("Data Saved Succesfully"),
      this.setState({ name: '', artist: '', duration: '', naatFile: null, imageFile: null, audioLocation: '', iconLocation: '' })
    );

  }

  async handleUpload(e) {

    e.preventDefault()
    if (file != null && file2 != null) {
      this.setState({ isLoading: true })

      await app.storage().ref().child(`naats/${file.name}`).put(file).then(function (snapshot) {

      });
      await app.storage().ref().child(`icons/${file2.name}`).put(file2).then(function (snapshot) {

      });

      await app.storage().ref(`naats/${file.name}`).getDownloadURL()
        .then((url) => {
          this.setState({ audioLocation: url })

        })
      await app.storage().ref(`icons/${file2.name}`).getDownloadURL()
        .then((url) => {
          this.setState({ iconLocation: url })
          this.setState({ isLoading: false })
          this.setState({ name: file.name })
        })
    }

  }


  render() {
    const { isLoading } = this.state

    return (
      <div style={{ width: 500, height: 500, textAlign: "center", marginLeft: "30%", marginTop: "5%" }}>
        <h1>Add Naat</h1>
        <br />
        <CForm onSubmit={(this.handleUpload)}>

          <CInputGroup className="text-left">
            <label><b>Naat (MP3)</b></label>
              &nbsp; &nbsp; &nbsp; &nbsp;
                <input
              type="file"
              name="NaatFile"
              accept=".mp3"
              onChange={this.handleNaatFileChange}
            >
            </input>
          </CInputGroup>
          <br />
          <CInputGroup className="text-left">
            <label><b>Image</b></label>
              &nbsp; &nbsp; &nbsp; &nbsp;
                <input
              type="file"
              name="ImageFile"
              onChange={this.handleImageFileChange}
            >
            </input>
          </CInputGroup>

          <div className=" text-center"><CInput className="btn btn-primary text-center" type="submit" value="Upload"></CInput></div>
          {isLoading && <div><Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}

          /><p>Files are uploading Please Wait</p></div>}
        </CForm>

        <CForm onSubmit={this.handleAdd}>

          <br />
          <CInputGroup>
            <CInput
              type="text"
              name="Name"
              placeholder="Name"
              autoComplete="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </CInputGroup>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              name="Artist"
              placeholder="Artist"
              autoComplete="Artist"
              value={this.state.artist}
              onChange={this.handleArtistChange}
            />
          </CInputGroup>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              name="Duration"
              placeholder="Duration"
              autoComplete="Duration"
              value={this.state.duration}
              onChange={this.handleDurationChange}
            />
          </CInputGroup>

          <br />
          {this.state.audioLocation && <div className="row">
            <h5>Audio Location</h5>
            <p>{this.state.audioLocation}</p>
          </div>}
          <br />
          {this.state.iconLocation && <div className="row">
            <h5>Icon Location: </h5>
            <p>{this.state.iconLocation}</p>
          </div>}
          <CInput className="btn btn-primary" type="submit" value="Add"></CInput>

        </CForm>
      </div>
    )
  }
}


validate(AddNaat, { joiSchema: schema })
export default AddNaat;

