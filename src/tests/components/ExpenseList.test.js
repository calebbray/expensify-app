import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
});

test('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})