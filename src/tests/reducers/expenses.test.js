import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'gum',
    note: '',
    amount: 1950,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 19500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
];

test('should set default state', () => {
  const state = expensesReducer(undefined, '@@INIT');
  expect(state).toEqual([])
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = { 
    type: 'ADD_EXPENSE', 
    expense: {
      id: '4',
      description: 'expense 4',
      note: '',
      amount: 10000,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense])
});

test('should edit an expense', () => {
  const amount = 100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount)
});

test('should not edit if id not found', () => {
  const amount = 100;
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});