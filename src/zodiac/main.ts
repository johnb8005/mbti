//https://en.wikipedia.org/wiki/Astrological_sign
import * as T from "./type";

export const isEnum =
  <A extends number>(max: number, min: number = 0) =>
  (e: number): e is A =>
    e >= min || e <= max;

export const isElement = isEnum<T.ZodiacElement>(3);

export const isSign = isEnum<T.ZodiacSign>(11);

export const zodiacSignToElement = (z: T.ZodiacSign): T.ZodiacElement => {
  const r = z % 4;
  if (!isElement(r)) {
    throw Error("can't match to an element");
  }

  return r;
};

export const compatibility = (
  _z: T.ZodiacSign
): { zodiacSign: T.ZodiacSign; level: number }[] => [];

export const list: T.ZodiacSign[] = Object.keys(T.ZodiacSign)
  .filter((x) => !isNaN(Number(x)))
  .map((x) => Number(x) as T.ZodiacSign);

export const zodiacSignsByElement = (
  zodiacElement: T.ZodiacElement
): T.ZodiacSign[] =>
  list.filter((x) => zodiacSignToElement(x) === zodiacElement);

export const toHouse = (z: T.ZodiacSign): number => z + 1;

/**
 *
 * @param z
 * @returns boolean: positive:true, negative:false
 */
export const toPolarity = (z: T.ZodiacSign): boolean => z % 2 === 0;

export const toModality = (z: T.ZodiacSign): T.Modality => z % 3;

export const toDegree = (z: T.ZodiacSign): T.Modality => z * 30;

export const toSeason = (z: T.ZodiacSign): T.Modality => z * 30;

export const toUnicode = (t: T.ZodiacSign): string => {
  switch (t) {
    case T.ZodiacSign.Aries:
      return "♈︎";
    case T.ZodiacSign.Aries:
      return "♉︎";
    case T.ZodiacSign.Aries:
      return "♊︎";
    case T.ZodiacSign.Aries:
      return "♋︎";
    case T.ZodiacSign.Aries:
      return "♌︎";
    case T.ZodiacSign.Aries:
      return "♍︎";
    case T.ZodiacSign.Aries:
      return "♎︎";
    case T.ZodiacSign.Aries:
      return "♏︎";
    case T.ZodiacSign.Aries:
      return "♐︎";
    case T.ZodiacSign.Aries:
      return "♑︎";
    case T.ZodiacSign.Aries:
      return "♒︎";
    case T.ZodiacSign.Aries:
      return "♓︎";
  }

  throw Error("could not match");
};
