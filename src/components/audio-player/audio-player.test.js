import renderer from 'react-test-renderer';
import React from 'react';
import AudioPlayer from './audio-player';

describe(`<AudioPlayer/>`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<AudioPlayer src={`path.ogg`} isPlaying={false} onPlayButtonClick={jest.fn()}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
