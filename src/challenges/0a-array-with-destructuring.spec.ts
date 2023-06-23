import {
  firstMeal,
  secondMeal,
  thirdMeal,
} from "./0a-array-with-destructuring";

test("meal variables have correct values", () => {
  expect(firstMeal).toBe("Breakfast");
  expect(secondMeal).toBe("Lunch");
  expect(thirdMeal).toBe("Dinner");
});
