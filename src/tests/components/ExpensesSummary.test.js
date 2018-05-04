import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235123412} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});