export default class Time {
  static getTheTime() {
    const date = new Date();
    const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return currentTime;
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
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const day = new Date().getDay() - 1;
    let displayDay = [];

    if (day < 6) {
      displayDay.push('weekdays');
    }
    return [...displayDay, days[day]];
  }
}
