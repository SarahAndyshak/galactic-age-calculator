/* eslint-disable no-undef */
import BirthdayCount from '../src/js/birthday-calc';

describe ('BirthdayCount', () => {
  test('should create birthday object for the current date', () => {
    const birthdayCount = new BirthdayCount("Fri Feb 03 2023");
    expect(birthdayCount.currentDay).toEqual("Fri Feb 03 2023");
  });
});