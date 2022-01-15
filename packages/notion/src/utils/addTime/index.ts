import _addDays from 'date-fns/esm/addDays'
import _addMonths from 'date-fns/esm/addMonths'
import _addYears from 'date-fns/esm/addYears'

const addTime = (date, type) => {
  switch (type) {
    case 'year':
      return _addYears(date, 1).toISOString()
    case 'month':
      return _addMonths(date, 1).toISOString()
    case 'day':
      // @hack the TimeZone to UTC is ... not great.
      return _addDays(date, 2).toISOString()
  }
  return _addDays(date, -1).toISOString()
}

export default addTime
