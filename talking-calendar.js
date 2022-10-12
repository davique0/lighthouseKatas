const talkingCalendar = function(date) {
  let dateArr = date.split('/');
  dateArr[2] = Number(dateArr[2]);
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let ending = '';
  switch(dateArr[2]) {
    case 1:
      ending = 'st';
      break;
    case 2:
      ending = 'nd';
      break;
    case 3:
      ending = 'rd';
      break;
    default:
      ending = 'th';
  } 
  return months[dateArr[1] - 1] + ' ' + dateArr[2] + ending + ',' + ' ' + dateArr[0] 
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));