import { useContext } from "react";
import WeatherContext from "../store/weather-context";

export interface timeConversorObjectType {
  hour: {
    hour: number,
    period: string
  };
  minute: number;
  second: number;
}

export interface dateConversorObjectType {
  weekDay: string;
  month: {
    spelled: string;
    numb: number;
  };
  day: number;
  ordinal: string;
  year: number;
}

const TimeConversor = (currentDate: number) => {
  const { units } = useContext(WeatherContext);
  
  const currentTimezoneOffset = new Date().getTimezoneOffset();
  const currentLocalDate = new Date((currentDate + currentTimezoneOffset*60) * 1000);

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
  const currentMonth = {
    spelled: monthOfTheYear[currentLocalDate.getMonth()],
    numb: currentLocalDate.getMonth() + 1
  };
  const currentDay = currentLocalDate.getDate();
  const currentDayOrdinal = dayOfTheMonth(currentLocalDate.getDate());
  const currentWeekDay = dayOfTheWeek[currentLocalDate.getDay()];

  const imperialHours = (hour: number) => {
    if (hour === 0){
      return {hour: 12, period:'AM'};
    } else if (hour === 12) {
      return {hour: 12, period:'PM'};
    } else if (hour > 12) {
      return {hour: hour - 12, period:'PM'};
    } else{
      return {hour: hour, period:'AM'}
    }
  };

  const currentHour = units === 'imperial' ? imperialHours(currentLocalDate.getHours()) : {hour: currentLocalDate.getHours(), period: ''};
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
