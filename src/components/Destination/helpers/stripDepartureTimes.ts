import { FerryTime } from '../../../constants/FerryTime.interface';

export function stripDepartureTimes(ferryTimes: FerryTime[], currentDayNames: string[]): string[] {
  return ferryTimes.reduce((acc, ferryTime) => {
    // check if one of currentDayNames is represented in schedule.validFor
    const schedules = ferryTime.schedules.filter(schedule =>
      currentDayNames.some(day => schedule.validFor.includes(day)),
    );
    const times = schedules.map(schedule => schedule.times);
    const departure = times.map(time => time.map(t => t.departure));
    return [...acc, ...departure.flat()];
  }, []);
}
