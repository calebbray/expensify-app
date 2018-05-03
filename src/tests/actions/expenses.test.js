import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: 1 })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1
  })
})

test('Should setup edit action object', () => {
  const action = editExpense(1, { note: 'Update' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: { note: 'Update' }
  })
})

test('Should setup add expense with provided', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    },

  })
});

test('Should setup add expense with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
});