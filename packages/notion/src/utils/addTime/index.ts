import {
  addDays as _addDays,
  addMonths as _addMonths,
  addYears as _addYears,
} from 'date-fns'

const addTime = (date, type) => {
  switch (type) {
    case 'day':
      // @hack the TimeZone to UTC is ... not great.
      return _addDays(date, 2).toISOString()
    case 'month':
      return _addMonths(date, 1).toISOString()
    case 'year':
      return _addYears(date, 1).toISOString()
  }
  return _addDays(date, -1).toISOString()
}

export default addTime
