//Set Text Filter
export const setTextFilter = (filter = '') => ({
  type: 'FILTER_TEXT',
  filter
})

//Sort By Date
export const sortByDate = () => ({
  type: 'SORT_DATE'
})

//Sort By Amount
export const sortByAmount = () => ({
  type: 'SORT_AMOUNT'
})

//Set Start Date
export const setStartDate = (startDate = undefined) => ({
  type: 'START_DATE',
  startDate
})

//Set End Date
export const setEndDate = (endDate = undefined) => ({
  type: 'END_DATE',
  endDate
})