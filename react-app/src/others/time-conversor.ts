export interface timeConversorObjectType {
  hour: number;
  minute: number;
  second: number;
}

export interface dateConversorObjectType {
  weekDay: string;
  month: string;
  day: number;
  ordinal: string;
  year: number;
}

const TimeConversor = (currentDate: number) => {
  const currentLocalDate = new Date(currentDate * 1000);

  const dayOfTheMonth = (dayNumber: number) => {
    if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31){
      return 'st';
    } else if (dayNumber === 2 || dayNumber === 22){
      return 'nd';
    } else if (dayNumber === 3 || dayNumber === 23){
      return 'rd';
    } else {
      return 'th'
    }
  };
  const dayOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentYear = currentLocalDate.getFullYear();
  const currentMonth = monthOfTheYear[currentLocalDate.getMonth()];
  const currentDay = currentLocalDate.getDate();
  const currentDayOrdinal = dayOfTheMonth(currentLocalDate.getDate());
  const currentWeekDay = dayOfTheWeek[currentLocalDate.getDay()];

  const currentHour = currentLocalDate.getHours();
  const currentMinute = currentLocalDate.getMinutes();
  const currentSecond = currentLocalDate.getSeconds();

  return {
    time: {
      hour: currentHour,
      minute: currentMinute,
      second: currentSecond,
    },
    date: {
      weekDay: currentWeekDay,
      month: currentMonth,
      day: currentDay,
      ordinal: currentDayOrdinal,
      year: currentYear,
    },
  };
};

export default TimeConversor;
