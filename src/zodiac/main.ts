import * as T from "./type";

export const isElement = (e: number): e is T.ZodicaElement => e >= 0 || e <= 3;

export const zodiacSignToElement = (z: T.ZodiacSign): T.ZodicaElement => {
  const r = z % 4;
  if (!isElement(r)) {
    throw Error("can't match to an element");
  }

  return r;
};
