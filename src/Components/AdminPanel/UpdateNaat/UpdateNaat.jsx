import React, { Component } from 'react';
import {
  CButton,
  CForm,
  CInput,
  CInputGroup,
} from "@coreui/react";
import { app } from '../../../base'
import { confirmAlert } from 'react-confirm-alert';

class UpdateNaat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist: '',
      duration: '',
      audioLocation: '',
      iconLocation: ''
    };
    this.handleUpdate = this.handleUpdate.bind(this)

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
  async componentDidMount() {
    let naats = []
    await app.database().ref(`/naats/${this.props.match.params.naatId}`).on('value', (snapshot) => {
      naats.push(snapshot.val())
      // { title: snapshot.val().title, artist: snapshot.val().artist, duration: snapshot.val().duration, audioLocation: snapshot.val().audioLocation, iconLocation: snapshot.val().iconLocation }
      this.setState({ name: snapshot.val().title, artist: snapshot.val().artist, duration: snapshot.val().duration, audioLocation: snapshot.val().audioLocation, iconLocation: snapshot.val().iconLocation })
    });


  }
  async handleUpdate(e) {
    e.preventDefault()
    confirmAlert({
      title: 'Confirm to Modify',
      message: 'Are you sure to Update record',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const { name, artist, audioLocation, duration, iconLocation } = this.state
            const data = {
              title: name,
              artist: artist,
              duration: duration,
              iconLocation: iconLocation,
              audioLocation: audioLocation
            }
            app.database().ref(`/naats/${this.props.match.params.naatId}`).update(data)

          }
        },
        {
          label: 'No',
        }
      ]
    });

  }
  render() {

    return (
      <div style={{ width: 500, height: 500, textAlign: "center", marginLeft: "30%", marginTop: "5%" }}>
        <CForm onSubmit={this.handleUpdate}>
          <h1>Update Naat</h1>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </CInputGroup>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              placeholder="Artist"
              value={this.state.artist}
              onChange={this.handleArtistChange}
            />
          </CInputGroup>
          <br />
          <CInputGroup>
            <CInput
              type="text"
              placeholder="Duration"
              value={this.state.duration}
              onChange={this.handleDurationChange}
            />
          </CInputGroup>
          <br />
          <CButton type="submit" className="btn btn-secondary">Update</CButton>
        </CForm>
      </div>
    )
  }
}

export default UpdateNaat;