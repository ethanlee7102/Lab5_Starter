// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("valid phone numbers", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
  expect(isPhoneNumber("123 456-7890")).toBe(true);
});

test("invalid phone numbers", () => {
  expect(isPhoneNumber("(123) 45-7890")).toBe(false);
  expect(isPhoneNumber("hi")).toBe(false);
});

test("valid emails", () => {
  expect(isEmail("ethanlee7@gmail.com")).toBe(true);
  expect(isEmail("email@yahoo.net")).toBe(true);
});

test("invalid emails", () => {
  expect(isEmail("ethanlee7@gmail.comasdfasdf")).toBe(false);
  expect(isEmail("emailyahoonet")).toBe(false);
});

test("valid passwords", () => {
  expect(isEmail("Hellos")).toBe(true);
  expect(isEmail("helloagain")).toBe(true);
});

test("invalid passwords", () => {
  expect(isEmail("4Hellos")).toBe(true);
  expect(isEmail("helloagainthisisgonnabetoolong")).toBe(true);
});

