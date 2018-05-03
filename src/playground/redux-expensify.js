import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = ({ description = '', note = '', amount = 0,createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: { 
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

//Remove Expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//Edit Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//Set Text Filter
const setTextFilter = (filter = '') => ({
  type: 'FILTER_TEXT',
  filter
})

//Sort By Date
const sortByDate = () => ({
  type: 'SORT_DATE'
})

//Sort By Amount
const sortByAmount = () => ({
  type: 'SORT_AMOUNT'
})

//Set Start Date
const setStartDate = (startDate = undefined) => ({
  type: 'START_DATE',
  startDate
})

//Set End Date
const setEndDate = (endDate = undefined) => ({
  type: 'END_DATE',
  endDate
})

//Expenses Reducer
const expensesDefault = [];

const expensesReducer = (state = expensesDefault, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...state,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

//Filters Reducer
const filtersDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersDefault, action) => {
  switch(action.type) {
    case 'FILTER_TEXT':
      return {
        ...state,
        text: action.filter
      };
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch &&  textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  }) 
}

//STORE CREATION
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsub = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate())

//store.dispatch(setStartDate('125'));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));
//store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: 'paosidffs',
      description: 'Jan Rent',
      none: 'final payment',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //can be date or amount
    startDate: undefined,
    endDate: undefined
  }
}