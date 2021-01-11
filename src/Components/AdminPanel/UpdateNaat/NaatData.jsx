import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { app } from '../../../base';
import Loader from 'react-loader-spinner'
import { confirmAlert } from 'react-confirm-alert';

export class NaatData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
            run: true
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        let naats = []
        app.database().ref('/naats').on('value', (snapshot) => {
            snapshot.forEach((child) => {

                naats.push({
                    name: child.val().title,
                    artist: child.val().artist,
                    duration: child.val().duration,
                    id: child.key
                });
            });
            this.setState({ isLoading: false })
            this.setState({ data: naats })
        });

    }

    handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this Naat',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const data = this.state.data.filter(d => d.id !== id)

                        app.database().ref('/naats').child(id).remove()
                        this.setState({ data: data })
                    }
                },
                {
                    label: 'No',
                }
            ]
        });

    }

    render() {
        const { data } = this.state
        return (
            <React.Fragment>
                {data && data.map(d => {
                    return <div key={d.id} className="row text-center shadow bg-white" style={{ width: "80%", heigth: "auto", marginLeft: "10%", marginTop: "5%" }}>
                        <div className="col-md-2"><b>{d.name}</b></div>
                        <div className="col-md-2"><b>{d.artist}</b></div>
                        <div className="col-md-2"><b>{d.duration}</b></div>
                        <div className="col-md-3">
                            <Link to={`/updateNaat/${d.id}`}>
                                <button className="btn btn-secondary">Update</button>
                            </Link>
                            &nbsp;&nbsp;
                                <button id={d.id} onClick={() => this.handleDelete(d.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                })}
                {this.state.isLoading && <div className="text-center"><Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}


                /><p>Files are Loading Please Wait</p></div>}

            </React.Fragment>
        )
    }
}

export default NaatData
