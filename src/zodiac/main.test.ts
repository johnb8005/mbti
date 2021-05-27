import * as M from "./main";
import * as T from "./type";

test("compatibility", () => {
  expect(M.compatibility(T.ZodiacSign.Sagittarius)).toEqual([]);
});

test("zodiacSignToElement", () => {
  expect(M.zodiacSignToElement(T.ZodiacSign.Sagittarius)).toEqual(
    T.ZodiacElement.Fire
  );
});

test("zodiacSignsByElement", () => {
  expect(M.zodiacSignsByElement(T.ZodiacElement.Fire)).toEqual([
    T.ZodiacSign.Aries,
    T.ZodiacSign.Leo,
    T.ZodiacSign.Sagittarius,
  ]);
});
