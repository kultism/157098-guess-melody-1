import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {src} = this.props;

    return (
      <div className="game__track">
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio src={src}/>
        </div>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default AudioPlayer;
