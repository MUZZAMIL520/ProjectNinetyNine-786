import React, { Component } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import Locale from 'react-jinke-music-player/lib/config/locale'
import 'react-jinke-music-player/lib/styles/index.less'
import { createRandomNum } from 'react-jinke-music-player/lib/utils'
import 'react-jinke-music-player/assets/index.css'
import "./musicPlayer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const options = {
  defaultPlayIndex: 0,
  theme: 'light',
  bounds: 'body',
  showMediaSession: true,
  clearPriorAudioLists: true,
  autoPlayInitLoadPlayList: true,
  preload: false,
  responsive: false,
  glassBg: false,
  remember: false,
  remove: true,
  defaultPosition: {
    right: 100,
    bottom: 120,
  },
  defaultPlayMode: 'order',
  mode: 'full',
  once: false,
  autoPlay: true,
  toggleMode: true,
  showMiniModeCover: true,
  showMiniProcessBar: false,
  drag: true,
  seeked: true,
  showMediaSession: false,
  showProgressLoadBar: false,
  showPlay: true,
  showReload: true,
  showDownload: false,
  showPlayMode: false,
  showThemeSwitch: true,

  // lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  // destroy player button display  [type `Boolean` default `false`]
  showDestroy: false,

  // Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  // default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  // playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: true,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,
  locale: Locale.en_US,
  // custom music player root node
  getContainer() {
    return document.body
  },
}

class MediaPlayer extends Component {

  state = {
    unmount: false,
    audioList: [],
    params: {
      ...options,
      audioLists: [],
      getAudioInstance: (audio) => {
        this.audio = audio
      },
    },
  }


  onAddAudio = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      audioLists: [
        ...this.state.params.audioLists,
      ],
    })
  }

  onAutoPlayMode = () => {
    this.updateParams({
      autoPlay: !this.state.params.autoPlay,
    })
  }

  onAutoPlayInitLoadPlayList = () => {
    this.updateParams({
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    })
  }

  onClearPriorAudioLists = () => {
    this.updateParams({
      clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
    })
  }

  onShowGlassBg = () => {
    this.onChangeKey('glassBg')
  }

  onDrag = () => {
    this.onChangeKey('drag')
  }

  onToggleMode = () => {
    this.onChangeKey('toggleMode')
  }

  onSeeked = () => {
    this.onChangeKey('seeked')
  }

  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    }
    if (key === 'light' || key === 'dark') {
      data.theme = key
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key
    }
    if (Object.values(Locale).includes(key)) {
      data.locale = key
    }
    this.setState({ params: data })
  }

  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar')
  }

  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover')
  }

  playModeShowTime = () => {
    this.updateParams({
      playModeShowTime: createRandomNum(200, 2000),
    })
  }

  changePlayIndex = () => {
    this.updateParams({
      playIndex: createRandomNum(0, this.state.params.audioLists.length - 1),
    })
  }

  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
    })
  }

  unmountPlayer = () => {
    this.setState({ unmount: true })
  }

  onPlayModeChange = (e) => {
    this.updateParams({ playMode: e.target.value })
  }




  render() {
    const { params, unmount } = this.state
    return (
      <>
        <ReactJkMusicPlayer
          {...params}
          audioLists={this.props.data}
        />

      </>
    )
  }
}

export default MediaPlayer