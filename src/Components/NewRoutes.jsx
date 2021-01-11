import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import MediaPlayer from './Naat/MediaPlayer'
import { app } from '../base'
import NaatHome from "./Naat/NaatHome/NaatHome";
import NaatDetail from './Naat/NaatDetail/NaatDetail'
import CustomLayout from './Layout/index';

class NewRoutes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            naat: [],
            bool: false,
            prevVal: [],
            naatDisplay: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.player = this.player.bind(this)
        this.handleBool = this.handleBool.bind(this)
    }

    async componentDidMount() {
        await app.database().ref('/naats').on("value", snapshot => {
            const naats = []
            snapshot.forEach(snap => {
                var data = snap.val()
                naats.push({
                    title: data.title,
                    duration: data.duration,
                    artist: data.artist,
                    iconLocation: data.iconLocation,
                    audioLocation: data.audioLocation,
                    id: snap.key
                })

            });
            this.setState({ data: naats })


        });
    }
    handleBool() {
        this.setState({ bool: false })
    }
    player(id) {
        const data = this.state.data.filter(d => d.id === id)
        this.setState({ bool: true })
        const audioList1 = [
            {
                name: data[0].title,
                singer: data[0].artist,
                cover: data[0].iconLocation,
                musicSrc: data[0].audioLocation

            }
        ]
        this.setState({ naat: audioList1 })
        this.setState({ naatDisplay: data })


    }
    render() {

        return (

            <CustomLayout check="false">

                <Switch>
                    <Route path="/naats/:naatId" component={() => <NaatDetail data={this.state.naatDisplay} />} ></Route>
                    {/* <Route path="/naats" component={() => <NaatHome data={this.state.data}  ></NaatHome>} ></Route> */}
                    <NaatHome data={this.state.data} player={this.player} ></NaatHome>

                </Switch>
                {this.state.naat.length > 0 && < MediaPlayer key={this.state} bool={this.handleBool} data={this.state.naat} ></MediaPlayer>}


            </CustomLayout>
        )
    }
}

export default NewRoutes;