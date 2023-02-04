export default class BirthdayCount {
  constructor(currentDay){
    this.currentDay = currentDay;
  }

setCurrentDay() {
    let currentDay = new Date();
    return currentDay.toDateString();
  }
}