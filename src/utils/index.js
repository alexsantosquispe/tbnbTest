import moment from 'moment'

export const getCurrentDate = () => {
  return moment().format()
}

export const formatDate = (date) => {
  if (date) {
    const dateFormated = moment(date).format('LL')
    return dateFormated
  }
  return date
}

export const friendlyFormat = (date) => {
  if (date) {
    const currentDate = moment().format()
    const prevDate = moment(date).format()
    const difference = differenceOfDays(prevDate)
    if (isEqual(currentDate, prevDate)) {
      return moment(prevDate).format('LT')
    } else if (difference === 1) {
      return 'Yesterday'
    }
    return moment(prevDate).format('LL')
  }
  return date
}

export const isEqual = (dateOne, dateTwo) => {
  if (dateOne && dateTwo) {
    return moment(dateOne).format('L') === moment(dateTwo).format('L')
  }
  return false
}

export const differenceOfDays = (date) => {
  if (date) {
    const currentDate = moment().format('L')
    const previousDate = moment(date).format('L')
    const difference = moment(currentDate).diff(moment(previousDate), 'days')
    return difference
  }
  return 0
}
