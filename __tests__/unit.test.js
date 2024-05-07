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
  expect(isPhoneNumber("(123) 46786-7890")).toBe(false);
  expect(isPhoneNumber("hi")).toBe(false);
});
