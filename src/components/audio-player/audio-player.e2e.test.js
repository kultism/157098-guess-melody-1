import Enzyme, {mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

describe(`<AudioPlayer/>`, () => {
  it(`shows play icon when it's not playing`, () => {
    const audioPlayer = mount(<AudioPlayer
      src={src}
      onPlayButtonClick={jest.fn()}
      isPlaying={false}
    />);
    const playButton = audioPlayer.find(`button.track__button`);

    expect(playButton.hasClass(`track__button--play`)).toEqual(true);
  });

  it(`shows pause icon when it's playing`, () => {
    const audioPlayer = mount(<AudioPlayer
      src={src}
      onPlayButtonClick={jest.fn()}
      isPlaying={true}
    />);
    const playButton = audioPlayer.find(`button.track__button`);

    expect(playButton.hasClass(`track__button--pause`)).toEqual(true);
  });

  it(`fires onPlayButtonClick callback on play button click`, () => {
    const spy = jest.fn();

    const audioPlayer = mount(<AudioPlayer
      src={src}
      onPlayButtonClick={spy}
      isPlaying={true}
    />);

    const playButton = audioPlayer.find(`button.track__button`);
    playButton.simulate(`click`);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
