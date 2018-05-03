import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../../actions/filters';
import moment from 'moment';

test('Should set the text filter', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'FILTER_TEXT',
    filter: 'test'
  })
});

test('Should set the text filter default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'FILTER_TEXT',
    filter: ''
  })
});

test('Should sort by the date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_DATE'
  })
});

test('Should sort by the amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_AMOUNT'
  })
});

test('Should set the end date', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'END_DATE',
    endDate: moment(0)
  })
});

test('Should set the start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'START_DATE',
    startDate: moment(0)
  })
});