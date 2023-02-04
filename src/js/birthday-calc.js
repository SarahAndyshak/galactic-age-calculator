export default class BirthdayCount {
  constructor(currentDay){
    this.currentDay = currentDay;
  }

  setCurrentDay() {
    let currentDay = new Date();
    return currentDay.toLocaleDateString();
  }

  //thinking about next step, ran out of time on Friday.
  // setBirthday() {
  //   let newBirthday = new Date();
  //   return newBirthday;
  // }
}