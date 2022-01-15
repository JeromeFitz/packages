import _addDays from 'date-fns/addDays/index.js'
import _addMonths from 'date-fns/addMonths/index.js'
import _addYears from 'date-fns/addYears/index.js'

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
