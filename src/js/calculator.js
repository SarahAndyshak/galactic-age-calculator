export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return Math.round(this.earthAge / .24);
  }

  venusAge() {
    return Math.round(this.earthAge / .62);
  }

  marsAge(){
    return Math.round(this.earthAge * 1.88);
  }

  jupiterAge(){
    
  }
}

// export default class Rectangle {
//   constructor(side1, side2) {
//     this.side1 = side1;
//     this.side2 = side2;
//   }

//   getArea() {
//     return this.side1 * this.side2;
//   }
// }