export default class BirthdayCount {
  constructor(currentDay){
    this.currentDay = new Date();
  }
}

// export default class Age {
//   constructor(earthAge, pastAge, futureAge) {
//     this.earthAge = earthAge;
//     this.pastAge = pastAge;
//     this.futureAge = futureAge;
//     this.mercuryAge = (this.earthAge / .24).toFixed(2);
//     this.venusAge = (this.earthAge / .62).toFixed(2);
//     this.marsAge = (this.earthAge / 1.88).toFixed(2);
//     this.jupiterAge = (this.earthAge / 11.86).toFixed(2);
//     this.earthPast = (this.earthAge - pastAge).toFixed(2);
//   }