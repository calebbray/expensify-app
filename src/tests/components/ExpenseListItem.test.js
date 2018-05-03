import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../components/ExpensesListItem';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('Should render list item', () => {
  const wrapper = shallow(<ListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});