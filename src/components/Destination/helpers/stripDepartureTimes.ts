import { FerryTime } from '../../../constants/FerryTime.interface';

export const stripDepartureTimes = (ferryTimes: FerryTime[], currentDayNames: string[]): string[] =>
  ferryTimes.reduce((acc, ferryTime) => {
    /* check if one of currentDayNames is represented in schedule.validFor */
    const schedules = ferryTime.schedules.filter(schedule =>
      currentDayNames.some(day => schedule.validFor.includes(day)),
    );
    const times = schedules.map(schedule => schedule.times);
    const departure = times.map(time => time.map(t => t.departure));
    return [...acc, ...departure.flat()];
  }, []);

export const matchingDestinations = (destination, ferryTimes) =>
  ferryTimes.filter(ferryTime => ferryTime.journey.destination.fullname === destination.port.fullName);
