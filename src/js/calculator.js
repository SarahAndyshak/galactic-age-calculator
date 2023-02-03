export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return this.earthAge * .24;
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