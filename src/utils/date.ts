export const breakoutDate = (date: Date) => {
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
}

// checks if date1 is before date2 in terms of day, month, and year
export const dateIsBeforeOtherDate = ({date1, date2}: {date1: {
  day: number,
  month: number,
  year: number
}; date2: {
  day: number,
  month: number,
  year: number
}}) => {
  if (date1.year < date2.year) {
    return true;
  }

  if (date1.year === date2.year && date1.month < date2.month) {
    return true;
  }

  if (date1.year === date2.year && date1.month === date2.month && date1.day < date2.day) {
    return true;
  }

  return false;
}
