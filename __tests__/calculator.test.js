/* eslint-disable no-undef */
import Age from '../src/js/calculator.js';

describe ('Age', () => {

  test('should create an age object for a users age in Earth years', () => {
    const age = new Age(15);
    expect(age.earthAge).toEqual(15);
  });

  test('should create an age object for a users age in Earth years and Mercury years', () => {
    const age = new Age(15);
    expect(age.earthAge).toEqual(15);
    expect(age.mercuryAge).toEqual(21);
  });

  test('should create an age object for a users age in Earth, Mercury, Venus, Mars, and Jupiter years', () => {
    const age = new Age(15);
    expect(age.earthAge).toEqual(15);
    expect(age.mercuryAge).toEqual(21);
    expect(age.venusAge).toEqual(8);
    expect(age.marsAge).toEqual(2);
    expect(age.jupiterAge).toEqual();
  });

  test('should tell a user how many years have passed since a given birthday', () => {
    const age = new Age (10, 4);
    expect(age.earthPast).toEqual(6);
  });

  test('should tell a user how many years have passed since a given birthday on Mercury', () => {
    const age = new Age (10, 4);
    expect(age.mercuryPast()).toEqual(25);
  });

  test('should tell a user how many years have passed since a given birthday on Venus', () => {
    const age = new Age (56, 43);
    expect(age.venusPast()).toEqual("20.97");
  });

  test('should tell a user how many years have passed since a given birthday on Mars as a string', () => {
    const age = new Age (56, 43);
    expect(age.venusPast()).toEqual("");
  });  

});

// Original tests for original prototypes
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