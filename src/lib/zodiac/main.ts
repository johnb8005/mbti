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

export const toDegreeStart = (z: T.ZodiacSign): number => z * 30;
export const toDegrees = (z: T.ZodiacSign): { start: number; end: number } => {
  const start = toDegreeStart(z);
  const end = start + 30;

  return { start, end };
};

export const formatDegrees = ({ start, end }: { start: number; end: number }) =>
  start + "° to " + end + "°";

export const toSeason = (z: T.ZodiacSign): T.Season => Math.floor(z / 3);

export const toDateStart = (t: T.ZodiacSign): string => {
  switch (t) {
    case T.ZodiacSign.Aries:
      return "03-21";
    case T.ZodiacSign.Taurus:
      return "04-20";
    case T.ZodiacSign.Gemini:
      return "05-21";
    case T.ZodiacSign.Cancer:
      return "06-22";
    case T.ZodiacSign.Leo:
      return "07-23";
    case T.ZodiacSign.Virgo:
      return "08-23";
    case T.ZodiacSign.Libra:
      return "09-23";
    case T.ZodiacSign.Scorpio:
      return "10-23";
    case T.ZodiacSign.Sagittarius:
      return "11-23";
    case T.ZodiacSign.Capricorn:
      return "12-22";
    case T.ZodiacSign.Aquarius:
      return "01-20";
    case T.ZodiacSign.Pisces:
      return "02-19";
  }
};

export const toDate = (t: T.ZodiacSign) => {
  const dateStart = toDateStart(t);
  const dateEnd = dateMinusOneDay(toDateStart((t + 1) % 12));

  return dateStart + " - " + dateEnd;
};

const dateMinusOneDay = (s: string): string => {
  const [ms, ds] = s.split("-");
  const m = Number(ms);
  const d = Number(ds);

  if (isNaN(d) || isNaN(m)) {
    throw Error("m");
  }

  const mpadding = String(m).padStart(2, "0");
  const spadding = String(d - 1).padStart(2, "0");

  return mpadding + "-" + spadding;
};

export const toUnicode = (t: T.ZodiacSign): string => {
  switch (t) {
    case T.ZodiacSign.Aries:
      return "♈︎";
    case T.ZodiacSign.Taurus:
      return "♉︎";
    case T.ZodiacSign.Gemini:
      return "♊︎";
    case T.ZodiacSign.Cancer:
      return "♋︎";
    case T.ZodiacSign.Leo:
      return "♌︎";
    case T.ZodiacSign.Virgo:
      return "♍︎";
    case T.ZodiacSign.Libra:
      return "♎︎";
    case T.ZodiacSign.Scorpio:
      return "♏︎";
    case T.ZodiacSign.Sagittarius:
      return "♐︎";
    case T.ZodiacSign.Capricorn:
      return "♑︎";
    case T.ZodiacSign.Aquarius:
      return "♒︎";
    case T.ZodiacSign.Pisces:
      return "♓︎";
  }
};

export const toOpposite = (z: T.ZodiacSign): T.ZodiacSign => (z + 6) % 12;
