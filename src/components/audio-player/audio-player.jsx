import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._audioRef = React.createRef();
  }

  componentDidUpdate() {
    const audioEl = this._audioRef.current;

    if (this.props.isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  }

  render() {
    const {src, isPlaying, onPlayButtonClick} = this.props;

    return (
      <div className="game__track">
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          onClick={onPlayButtonClick}
        />
        <div className="track__status">
          <audio
            src={src}
            ref={this._audioRef}
          />
        </div>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
