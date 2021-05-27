import * as T from "./type";

export const isEnum =
  <A extends number>(max: number, min: number = 0) =>
  (e: number): e is A =>
    e >= min || e <= max;

export const isElement = isEnum<T.ZodicaElement>(3);

export const isSign = isEnum<T.ZodiacSign>(11);

export const zodiacSignToElement = (z: T.ZodiacSign): T.ZodicaElement => {
  const r = z % 4;
  if (!isElement(r)) {
    throw Error("can't match to an element");
  }

  return r;
};

export const compatibility = (
  _z: T.ZodiacSign
): { zodiacSign: T.ZodiacSign; level: number }[] => [];

export const zodiacSignsByElement = (
  zodiacElement: T.ZodicaElement
): T.ZodiacSign[] =>
  Object.keys(T.ZodiacSign)
    .filter(
      (x) => typeof x === "number" && zodiacSignToElement(x) === zodiacElement
    )
    .map((x) => x as any as T.ZodiacSign);
