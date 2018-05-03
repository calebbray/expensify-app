import filterReducer from '../../reducers/filters';
import moment from 'moment'

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@init' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_DATE' }
  const state = filterReducer(currentState, action)
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'filter';
  const action = {
    type: 'FILTER_TEXT',
    text: text
  }
  const state = filterReducer(undefined, action)
  expect(state.text).toBe(text);
});


test('should set startDate filter', () => {
  const date = moment();
  const action = {
    type: 'START_DATE',
    startDate: date
  }
  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(date)
});

test('should set endDate filter', () => {
  const date = moment();
  const action = {
    type: 'END_DATE',
    endDate: date
  }
  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(date)
});