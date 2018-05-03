import React from 'react';
import toJSON from 'enzyme-to-json';
import NotFound from '../../components/NotFound';
import { shallow } from 'enzyme';

test('should render not found page', () => {
  const wrapper = shallow(<NotFound />);
  expect(toJSON(wrapper)).toMatchSnapshot();
}) 