// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("valid phone number1", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test("valid phone number2", () => {
  expect(isPhoneNumber("123 456-7890")).toBe(true);
});

test("invalid phone number1", () => {
  expect(isPhoneNumber("(123) 45-7890")).toBe(false);
});
test("invalid phone number2", () => {
  expect(isPhoneNumber("hi")).toBe(false);
});

test("valid email1", () => {
  expect(isEmail("ethanlee7@gmail.com")).toBe(true);
});
test("valid email2", () => {
  expect(isEmail("email@yahoo.net")).toBe(true);
});

test("invalid email1", () => {
  expect(isEmail("ethanlee7@gmail.comasdfasdf")).toBe(false);
});
test("invalid email2", () => {
  expect(isEmail("emailyahoonet")).toBe(false);
});

test("valid password1", () => {
  expect(isStrongPassword("Hellos")).toBe(true);
});
test("valid password2", () => {
  expect(isStrongPassword("helloagain")).toBe(true);
});

test("invalid password1", () => {
  expect(isStrongPassword("4Hellos")).toBe(false);
});
test("invalid password2", () => {
  expect(isStrongPassword("helloagainthisisgonnabetoolong")).toBe(false);
});

test("valid date1", () => {
  expect(isDate("01/01/2020")).toBe(true);
});
test("valid date2", () => {
  expect(isDate("1/1/2021")).toBe(true);
});

test("invalid date1", () => {
  expect(isDate("01//0001")).toBe(false);
});
test("invalid date2", () => {
  expect(isDate("a day")).toBe(false);
});

test("valid color1", () => {
  expect(isHexColor("#ABC")).toBe(true);
});
test("valid color2", ("#123456") => {
  expect(isHexColor("1/1/2021")).toBe(true);
});

test("invalid color1", () => {
  expect(isHexColor("#ABCD")).toBe(false);
});
test("invalid color2", ("#blue") => {
  expect(isHexColor("1/1/2021")).toBe(false);
});
