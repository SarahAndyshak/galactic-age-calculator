import Age from '../src/js/calculator.js';

describe ('Age', () => {

  test('should create an age object for a users age in Earth years', () => {
    const age = new Age(5);
    expect(age.earthAge).toEqual(5);
  });

  test('should create an age object for a users age in Earth years and Mercury years', () => {
    const age = new Age(5);
    expect(age.earthAge).toEqual(5);
    expect(age.mercuryAge).toEqual(21);
  });

  // test('should return a users age in Mercury years', () => {
  //   const age = new Age(5);
  //   expect(age.mercuryAge()).toEqual(21);
  // });

  // test('should return a users age in Venus years', () => {
  //   const age = new Age(5);
  //   expect(age.venusAge()).toEqual(8);
  // });

  // test('should return a users age in Mars years', () => {
  //   const age = new Age(5);
  //   expect(age.marsAge()).toEqual(9);
  // });

  // test('should return a users age in Jupiter years', () => {
  //   const age = new Age(5);
  //   expect(age.jupiterAge()).toEqual(59);
  // });



});



// import Triangle from './../src/js/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });

//   test('should correctly determine whether three lengths make an scalene triangle', () => {
//     const scalTriangle = new Triangle(2,3,4)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });

// });