import Time from '../../../utils/Time';
import { DepTimes, IndexOfClosestDepTime } from '../../../constants/FerryTime.interface';

function nextDepartureTimeIndexes(depTimes: DepTimes, currentTime: string): IndexOfClosestDepTime[] {
  return Object.keys(depTimes).map(key => ({
    name: key,
    value: depTimes[key].findIndex(time => time > currentTime),
  }));
}

function nextDepartureTimeIndexObj(closestTimeIndexes: IndexOfClosestDepTime[], name: string): IndexOfClosestDepTime {
  return closestTimeIndexes.find(time => time.name === name);
}

export function nextDepartureTimeIndex(name: string, depTimes: DepTimes, currentTime: string): number {
  const closestTimeIndexes = nextDepartureTimeIndexes(depTimes, currentTime);
  const soonestDepTimeIndex = nextDepartureTimeIndexObj(closestTimeIndexes, name);
  return soonestDepTimeIndex ? soonestDepTimeIndex.value : 0;
}

export function nextDepartureTime(name: string, depTimes: DepTimes, currentTime: string): string {
  const soonestDepTimeIndex = nextDepartureTimeIndex(name, depTimes, currentTime);
  if (!soonestDepTimeIndex || soonestDepTimeIndex < 0) {
    return;
  }
  return Time.msToHMS(
    Math.abs(
      (Time.timeToDateObj(depTimes[name][soonestDepTimeIndex]) as any) - (Time.timeToDateObj(currentTime) as any),
    ),
  );
}
