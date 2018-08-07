import React from 'react';
import {withDocument} from 'part:@sanity/form-builder'
import './SoundPlayerInput.css?raw'

/**
 * Audioplayer from https://syntax.fm/
 */
class Player extends React.Component {
  constructor(props) {
    super(props);

    let lastPlayed = 0;

    // for SSR
    if (typeof window !== 'undefined') {
      const lp = localStorage.getItem(`lastPlayed${this.props.document._id}`);
      if (lp) lastPlayed = JSON.parse(lp).lastPlayed;
    }

    this.state = {
      progressTime: 50,
      playing: false,
      duration: 0,
      currentTime: lastPlayed,
      playbackRate: 1,
      timeWasLoaded: lastPlayed !== 0
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.audio) {
      this.audio.playbackRate = nextState.playbackRate;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.document._id !== prevProps.document._id) {
      const lp = localStorage.getItem(`lastPlayed${this.props.document._id}`);
      if (lp) {
        const data = JSON.parse(lp);
        this.setState({
          currentTime: data.lastPlayed
        });
        this.audio.currentTime = data.lastPlayed;
      }
      this.audio.play();
    } else {
      localStorage.setItem(
        `lastPlayed${this.props.document._id}`,
        JSON.stringify({ lastPlayed: this.state.currentTime })
      );
    }
  }

  timeUpdate(e) {
    console.log('Updating Time');
    // Check if the user already had a curent time
    if (this.state.timeWasLoaded) {
      const lp = localStorage.getItem(`lastPlayed${this.props.document._id}`);
      if (lp) {
        e.currentTarget.currentTime = JSON.parse(lp).lastPlayed;
      }
      this.setState({ timeWasLoaded: false });
    } else {
      const { currentTime = 0, duration = 0 } = e.currentTarget;

      const progressTime = (currentTime / duration) * 100;
      if (Number.isNaN(progressTime)) return;
      this.setState({ progressTime, currentTime, duration });
    }
  };

  togglePlay () {
    const method = this.state.playing ? 'pause' : 'play';
    this.audio[method]();
  };

  scrub (e) {
    const scrubTime =
      (e.nativeEvent.offsetX / this.progress.offsetWidth) * this.audio.duration;
    this.audio.currentTime = scrubTime;
  };

  playPause() {
    this.setState({ playing: !this.audio.paused });
    const method = this.audio.paused ? 'add' : 'remove';
    document.querySelector('.bars').classList[method]('bars--paused'); // 💩
  };

  volume  (e) {
    this.audio.volume = e.currentTarget.value;
  };

  speed () {
    let playbackRate = this.state.playbackRate + 0.25;
    if (playbackRate > 2.5) {
      playbackRate = 0.75;
    }
    this.setState({ playbackRate });
  };

  render() {
    const {level, type, value, onChange, document} = this.props
    const { title, file } = document
    const {valid} = this.state
    if (!file || !file.asset) {
      return ''
    }
    const { asset: { _ref = '' } = {} } = file
    const fileUrl = _ref.split('-').length ? `https://cdn.sanity.io/files/j4iakyct/syntaxfm/${_ref.split('-')[1]}.${_ref.split('-')[2]}` : ''
    const { playing, progressTime, currentTime, duration } = this.state;

    return (
      <div className="player">
        <div className="player__section player__section--left">
          <button
            onClick={this.togglePlay}
            aria-label={playing ? 'pause' : 'play'}
          >
            <p className="player__icon">{playing ? '❚❚' : '►'}</p>
            <p>
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </button>
        </div>

        <div className="player__section player__section--middle">
          <div
            className="progress"
            onClick={this.scrub}
            ref={x => (this.progress = x)}
          >
            <div
              className="progress__time"
              style={{ width: `${progressTime}%` }}
            />
          </div>
          <h3 className="player__title">
            Playing: {title}
          </h3>
        </div>

        <div className="player__section player__section--right">
          <button onClick={this.speed} className="player__speed">
            <p>FASTNESS</p>
            <span className="player__speeddisplay">
              {this.state.playbackRate} &times;{' '}
            </span>
          </button>

          <div className="player__volume">
            <p>LOUDNESS</p>
            <div className="player__inputs">
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.1"
                id="vol10"
                className="sr-only"
              />
              <label htmlFor="vol10">
                <span className="sr-only">Volume Level 10/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.2"
                id="vol20"
                className="sr-only"
              />
              <label htmlFor="vol20">
                <span className="sr-only">Volume Level 20/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.3"
                id="vol30"
                className="sr-only"
              />
              <label htmlFor="vol30">
                <span className="sr-only">Volume Level 30/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.4"
                id="vol40"
                className="sr-only"
              />
              <label htmlFor="vol40">
                <span className="sr-only">Volume Level 40/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.5"
                id="vol50"
                className="sr-only"
              />
              <label htmlFor="vol50">
                <span className="sr-only">Volume Level 50/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.6"
                id="vol60"
                className="sr-only"
              />
              <label htmlFor="vol60">
                <span className="sr-only">Volume Level 60/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.7"
                id="vol70"
                className="sr-only"
              />
              <label htmlFor="vol70">
                <span className="sr-only">Volume Level 70/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="0.8"
                id="vol80"
                className="sr-only"
              />
              <label htmlFor="vol80">
                <span className="sr-only">Volume Level 80/100</span>
              </label>
              <input
                onChange={this.volume}
                defaultChecked
                type="radio"
                name="volume"
                value="0.9"
                id="vol90"
                className="sr-only"
              />
              <label htmlFor="vol90">
                <span className="sr-only">Volume Level 90/100</span>
              </label>
              <input
                onChange={this.volume}
                type="radio"
                name="volume"
                value="1"
                id="vol100"
                className="sr-only"
              />
              <label htmlFor="vol100">
                <span className="sr-only">Volume Level 100/100</span>
              </label>
            </div>
          </div>
        </div>

        <audio
          ref={audio => file && (this.audio = audio)}
          onPlay={this.playPause}
          onPause={this.playPause}
          onTimeUpdate={this.timeUpdate}
          onLoadedMetadata={this.timeUpdate}
          src={fileUrl}
        />
      </div>
    );
  }
}

export default withDocument(Player)

function formatTime(time) {
  // Hours, minutes and seconds
  var hrs = (~~(time / 3600)).toFixed(0);
  var mins = (~~((time % 3600) / 60)).toFixed(0);
  var secs = (time % 60).toFixed(0);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
