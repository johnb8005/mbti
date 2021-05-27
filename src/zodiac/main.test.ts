import * as M from "./main";
import * as T from "./type";

test("compatibility", () => {
  expect(M.compatibility(T.ZodiacSign.Sagittarius)).toEqual([]);
});

test("zodiacSignToElement", () => {
  expect(M.zodiacSignToElement(T.ZodiacSign.Sagittarius)).toEqual(
    T.ZodicaElement.Fire
  );
});
