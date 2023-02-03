export default class Age {
  constructor(earthAge, pastAge) {
    this.earthAge = earthAge;
    this.pastAge = pastAge;
    this.mercuryAge = (this.earthAge / .24).toFixed(2);
    this.venusAge = (this.earthAge / .62).toFixed(2);
    this.marsAge = (this.earthAge / 1.88).toFixed(2);
    this.jupiterAge = (this.earthAge / 11.86).toFixed(2);
    this.earthPast = (this.earthAge - pastAge).toFixed(2);
  }

  mercuryPast() {
    return ((this.earthAge - this.pastAge) / .24).toFixed(2);
  }

  venusPast() {
    return ((this.earthAge - this.pastAge) / .62).toFixed(2);
  }

  marsPast() {

  }
}

// Old format of original constructor and prototypes
// export default class Age {
//   constructor(earthAge) {
//     this.earthAge = earthAge;
//   }

//   mercuryAge() {
//     return Math.round(this.earthAge / .24);
//   }

//   venusAge() {
//     return Math.round(this.earthAge / .62);
//   }

//   marsAge(){
//     return Math.round(this.earthAge * 1.88);
//   }

//   jupiterAge(){
//     return Math.round(this.earthAge * 11.86);
//   }
// }