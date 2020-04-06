export default class Time {
  static getTheTime(): string {
    const date = new Date();
    const { h, m, s } = { h: date.getHours(), m: date.getMinutes(), s: date.getSeconds() };
    const hours = h < 10 ? '0' + h : h;
    const minutes = m < 10 ? '0' + m : m;
    const seconds = s < 10 ? '0' + s : s;
    return `${hours}:${minutes}:${seconds}`;
  }

  static timeToDateObj(time: string): Date {
    const [hours, minutes, seconds] = time.split(':');
    let date = new Date();
    date.setHours(+hours);
    date.setMinutes(+minutes);
    date.setSeconds(+seconds);
    return date;
  }

  static msToHMS(ms) {
    return new Date(ms).toISOString().slice(11, 19);
  }

  static getDayType(): string[] {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = new Date().getDay();
    let displayDay = [];

    if (day !== 0 && day !== 6) {
      displayDay.push('weekdays');
    }
    return [...displayDay, days[day]];
  }

  static stripSeconds(time: string): string {
    if (!time) return;
    const [hh, mm] = time.split(':');
    return `${hh}:${mm}`;
  }

  static stripHours(time: string): string {
    if (!time) return;
    const [hh, mm, ss] = time.split(':');
    return `${mm}:${ss}`;
  }

  static HoursMinutes(time: string): string {
    if (!time) return;
    const [hh, mm, ss] = time.split(':');
    return `over ${hh !== '00' ? hh + ' uur en' : ''} ${mm} min`;
  }
}
