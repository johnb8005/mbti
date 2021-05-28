import * as T from "./type.js";
export const isEnum = (max, min = 0) => (e) => e >= min || e <= max;
export const isElement = isEnum(3);
export const isSign = isEnum(11);
export const zodiacSignToElement = (z) => {
  const r = z % 4;
  if (!isElement(r)) {
    throw Error("can't match to an element");
  }
  return r;
};
export const list = Object.keys(T.ZodiacSign).filter((x) => !isNaN(Number(x))).map((x) => Number(x));
export const zodiacSignsByElement = (zodiacElement) => list.filter((x) => zodiacSignToElement(x) === zodiacElement);
export const toHouse = (z) => z + 1;
export const toPolarity = (z) => z % 2 === 0;
export const toModality = (z) => z % 3;
export const toDegreeStart = (z) => z * 30;
export const toDegrees = (z) => {
  const start = toDegreeStart(z);
  const end = start + 30;
  return {start, end};
};
export const formatDegrees = ({start, end}) => start + "° to " + end + "°";
export const toSeason = (z) => Math.floor(z / 3);
export const toDateStart = (t) => {
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
export const toDate = (t) => {
  const dateStart = toDateStart(t);
  const dateEnd = dateMinusOneDay(toDateStart((t + 1) % 12));
  return dateStart + " - " + dateEnd;
};
const dateMinusOneDay = (s) => {
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
export const toUnicode = (t) => {
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
export const toOpposite = (z) => (z + 6) % 12;
export const toTwins = (z) => {
  const twin1 = (z + 4) % 12;
  const twin2 = (z + 12 - 4) % 12;
  return [twin1, twin2];
};
export const formatTwins = ([t1, t2]) => {
  return T.ZodiacSign[t1] + " " + T.ZodiacSign[t2];
};
