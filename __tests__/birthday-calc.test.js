/* eslint-disable no-undef */
import BirthdayCount from '../src/js/birthday-calc';

describe ('BirthdayCount', () => {
  
  test('should create birthday object for the current date', () => {
    const birthdayCount = new BirthdayCount("Fri Feb 03 2023");
    expect(birthdayCount.currentDay).toEqual("Fri Feb 03 2023");
  });

  test('should create set the current day based on time of user input', () => {
    const birthdayCount = new BirthdayCount("2/3/2023");
    expect(birthdayCount.setCurrentDay()).toEqual("2/3/2023");
  });

  // test('should capture the user birthday input', () => {
  //   const birthdayCount = new BirthdayCount("2/3/2023");
  //   expect(birthdayCount.setBirthday()).toEqual("6/14/1981");
  // });
});