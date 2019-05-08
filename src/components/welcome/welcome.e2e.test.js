import Enzyme, {shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './welcome';

Enzyme.configure({adapter: new Adapter()});

describe(`<Welcome />`, () => {
  const handleClick = jest.fn();

  it(`simulates click on start button`, () => {
    const wrapper = shallow(<Welcome
      errorsCount={0}
      gameTime={0}
      onStartButtonClick={handleClick}/>
    );

    const startButton = wrapper.find(`button`);

    startButton.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
