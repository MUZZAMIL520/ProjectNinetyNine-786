import React, { Component } from 'react'
import ".././NaatDetail/NaatDetail.css"

class TableDetail extends Component {

    downloadFile(url) {

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
    }
    render() {
        return (

            <tbody>
                <tr>
                    <th scope="row"><i style={{ cursor: "pointer" }} className="fa fa-play-circle-o fa-2x"></i></th>
                    <td>{this.props.data.title}</td>
                    <td>{this.props.data.artist}</td>
                    <td>{this.props.data.duration}</td>
                    <td><i onClick={() => { this.downloadFile(this.props.data.audioLocation) }} style={{ cursor: "pointer" }} className="fa fa-download"></i></td>
                </tr>
            </tbody>
            
        )
    }
}

export default TableDetail;