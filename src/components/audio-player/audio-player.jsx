import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({src, isPlaying, onPlayButtonClick}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioEl = audioRef.current;

    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  });

  return (
    <div className="game__track">
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        onClick={onPlayButtonClick}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef}/>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
