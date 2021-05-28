import * as M from "./main";
import * as T from "./type";

test("compatibility", () => {
  expect(M.toTwins(T.ZodiacSign.Sagittarius)).toEqual([
    T.ZodiacSign.Aries,
    T.ZodiacSign.Leo,
  ]);
});

test("zodiacSignToElement", () => {
  expect(M.zodiacSignToElement(T.ZodiacSign.Sagittarius)).toEqual(
    T.ZodiacElement.Fire
  );
});

test("list", () => {
  expect(M.list.length).toEqual(12);
});

test("zodiacSignsByElement", () => {
  expect(M.zodiacSignsByElement(T.ZodiacElement.Fire)).toEqual([
    T.ZodiacSign.Aries,
    T.ZodiacSign.Leo,
    T.ZodiacSign.Sagittarius,
  ]);
});

test("to house", () => {
  expect(M.toHouse(T.ZodiacSign.Aries)).toEqual(1);
  expect(M.toHouse(T.ZodiacSign.Libra)).toEqual(7);
});

test("to polarity", () => {
  expect(M.toPolarity(T.ZodiacSign.Aries)).toEqual(true);
  expect(M.toPolarity(T.ZodiacSign.Libra)).toEqual(true);
  expect(M.toPolarity(T.ZodiacSign.Cancer)).toEqual(false);
});

test("to modality", () => {
  expect(M.toModality(T.ZodiacSign.Aries)).toEqual(T.Modality.Cardinal);
  expect(M.toModality(T.ZodiacSign.Libra)).toEqual(T.Modality.Cardinal);
  expect(M.toModality(T.ZodiacSign.Cancer)).toEqual(T.Modality.Cardinal);
});

test("to degree", () => {
  expect(M.toDegreeStart(T.ZodiacSign.Cancer)).toEqual(90);
  expect(M.toDegreeStart(T.ZodiacSign.Libra)).toEqual(180);
  expect(M.toDegreeStart(T.ZodiacSign.Aquarius)).toEqual(300);
});
