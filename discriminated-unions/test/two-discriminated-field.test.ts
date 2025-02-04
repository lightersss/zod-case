import { schema } from "../two-discriminated-field";

test("discriminated unions with two fields", () => {
  expect(
    schema.safeParse({
      name: "Mike",
      age: 18,
      hasPet: false,
      role: "admin",
      adminKey: "123456",
    }).success
  ).toBe(true);

  expect(
    schema.safeParse({
      name: "Mike",
      age: 18,
      hasPet: false,
      role: "admin",
      adminKey: "123456",
    }).success
  ).toBe(true);

  expect(
    schema.safeParse({
      name: "Mike",
      age: 18,
      hasPet: true,
      petName: "PuppyA",
      role: "user",
      userID: 1,
    }).success
  ).toBe(true);

  expect(
    schema.safeParse({
      name: "Mike",
      age: 18,
      hasPet: false,
      petName: "PuppyA",
      role: "user",
      userID: 1,
    }).success
  ).toBe(true);
});
