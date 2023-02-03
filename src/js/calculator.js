export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.round(this.earthAge / .24);
    this.venusAge = Math.round(this.earthAge / .62);
    this.marsAge = Math.round(this.earthAge * 1.88);
    this.jupiterAge = Math.round(this.earthAge * 11.86);
  }

}

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