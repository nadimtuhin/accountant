import moment from 'moment';

export default function getMonthName(date) {
  return moment(date, 'YYYY/MM/dddd').format('YYYY/MM');
}
