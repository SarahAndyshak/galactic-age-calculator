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
    expect(age.mercuryAge).toEqual("62.50");
  });

  test('should create an age object for a users age in Earth, Mercury, Venus, Mars, and Jupiter years', () => {
    const age = new Age(15);
    expect(age.earthAge).toEqual(15);
    expect(age.mercuryAge).toEqual("62.50");
    expect(age.venusAge).toEqual("24.19");
    expect(age.marsAge).toEqual("7.98");
    expect(age.jupiterAge).toEqual("1.26");
  });

  test('should tell a user how many years have passed since a given birthday', () => {
    const age = new Age (10, 4);
    expect(age.earthPast).toEqual("6.00");
  });

  test('should tell a user how many years have passed since a given birthday on Mercury', () => {
    const age = new Age (56, 43);
    expect(age.mercuryPast()).toEqual("54.17");
  });

  test('should tell a user how many years have passed since a given birthday on Venus', () => {
    const age = new Age (56, 43);
    expect(age.venusPast()).toEqual("20.97");
  });

  test('should tell a user how many years have passed since a given birthday on Mars as a string', () => {
    const age = new Age (56, 43);
    expect(age.marsPast()).toEqual("6.91");
  });

  test('should tell a user how many years have passed since a given birthday on Jupiter as a string', () => {
    const age = new Age (56, 43);
    expect(age.jupiterPast()).toEqual("1.10");
  });

  test('should tell a user how many more years it will be until their birthday on Earth', () => {
    const age = new Age (56, 43, 61);
    expect(age.earthFuture()).toEqual("5.00");
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