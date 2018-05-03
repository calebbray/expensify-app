import moment from 'moment';

//Filters Reducer
const filtersDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersDefault, action) => {
  switch(action.type) {
    case 'FILTER_TEXT':
      return {
        ...state,
        text: action.text
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

export default filtersReducer;