import Enzyme, {mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  answers: [
    {
      picture: `path.jpg`,
      artist: `John Snow`,
    },
    {
      picture: `path.jpg`,
      artist: `Jack Daniels`,
    },
    {
      picture: `path.jpg`,
      artist: `Jim Beam`,
    }
  ]
};

describe(`<ArtistQuestionScreen/>`, () => {
  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();

  it(`toggles state's isPlaying on onPlayButtonClick execution from AudioPlayer props`, () => {
    const artistQuestionScreen = mount(<ArtistQuestionScreen question={question} onAnswer={jest.fn()}/>);
    const audioPlayer = artistQuestionScreen.find(`AudioPlayer`);

    audioPlayer.props().onPlayButtonClick();
    expect(artistQuestionScreen.state(`isPlaying`)).toEqual(true);

    audioPlayer.props().onPlayButtonClick();
    expect(artistQuestionScreen.state(`isPlaying`)).toEqual(false);
  });
});
