import moment from "moment";

export const getPastTime = (date?: Date) => {
  const yearDiff = moment().diff(date, "year");
  const monthDiff = moment().diff(date, "month");
  const dayDiff = moment().diff(date, "day");
  const minuteDiff = moment().diff(date, "minute");
  const secondsDiff = moment().diff(date, "seconds");

  if(yearDiff > 0) {
    return `Há ${yearDiff} anos"`
  } else if(monthDiff > 0) {
    return `Há ${monthDiff} meses`
  } else if(dayDiff > 0) {
    return `Há ${dayDiff} dias`
  } else if(minuteDiff > 0) {
    return `Há ${minuteDiff} minutos`
  } else {
    return `Há ${secondsDiff} segundos`
  }
}