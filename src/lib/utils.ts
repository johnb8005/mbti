//see https://docs.google.com/spreadsheets/d/1oHqliVK6oGoO2N75vFBcEXYj0_JuUBplljaJHDdN9FM/edit#gid=0
import * as T from "./type";

export const toComponent = (mbti: T.MBTI): T.MBTIComponent => {
  const re = (i: number, n: number, r: number[] = []) => {
    if (n === 0) {
      return r;
    }

    const remainder = i % 2;

    return re((i - remainder) / 2, n - 1, [remainder, ...r]);
  };

  return re(mbti, 4, []);
};

export const fromComponent = (cps: T.MBTIComponent): T.MBTI =>
  cps[3] + cps[2] * 2 + cps[1] * 4 + cps[0] * 8;

const functionPair = (c: T.CognitiveFunction): T.CognitiveFunction => {
  switch (c) {
    case T.CognitiveFunction.Fe:
      return T.CognitiveFunction.Ti;
    case T.CognitiveFunction.Ti:
      return T.CognitiveFunction.Fe;
    case T.CognitiveFunction.Te:
      return T.CognitiveFunction.Fi;
    case T.CognitiveFunction.Fi:
      return T.CognitiveFunction.Te;
    case T.CognitiveFunction.Ne:
      return T.CognitiveFunction.Si;
    case T.CognitiveFunction.Si:
      return T.CognitiveFunction.Ne;
    case T.CognitiveFunction.Se:
      return T.CognitiveFunction.Ni;
    case T.CognitiveFunction.Ni:
      return T.CognitiveFunction.Se;
  }
};

export const getRole = ([_, f1, f2, l]: T.MBTIComponent): T.Role => {
  /*
  ['_NT_', 'Analyst'],
  ['_NF_', 'Diplomat'],
  ['_S_J', 'Sentinel'],
  ['_S_P', 'Explorer']
   */

  if (f1 === T.Function1.N && f2 === T.Function2.T) {
    return T.Role.Analyst;
  }

  if (f1 === T.Function1.N && f2 === T.Function2.F) {
    return T.Role.Diplomat;
  }

  if (l === T.LifeStyle.J) {
    return T.Role.Sentinel;
  }
  return T.Role.Explorer;
};

export const toDominant = ([
  a,
  f1,
  f2,
  l,
]: T.MBTIComponent): T.CognitiveFunction => {
  if (a === T.Attitude.I && f1 === T.Function1.N && l === T.LifeStyle.J) {
    return T.CognitiveFunction.Ni;
  }

  if (a === T.Attitude.E && f1 === T.Function1.N && l === T.LifeStyle.P) {
    return T.CognitiveFunction.Ne;
  }

  if (a === T.Attitude.I && f1 === T.Function1.S && l === T.LifeStyle.J) {
    return T.CognitiveFunction.Si;
  }

  if (a === T.Attitude.E && f1 === T.Function1.S && l === T.LifeStyle.P) {
    return T.CognitiveFunction.Se;
  }

  if (a === T.Attitude.I && f2 === T.Function2.T && l === T.LifeStyle.P) {
    return T.CognitiveFunction.Ti;
  }

  if (a === T.Attitude.E && f2 === T.Function2.T && l === T.LifeStyle.J) {
    return T.CognitiveFunction.Te;
  }

  if (a === T.Attitude.I && f2 === T.Function2.F && l === T.LifeStyle.P) {
    return T.CognitiveFunction.Fi;
  }

  if (a === T.Attitude.E && f2 === T.Function2.F && l === T.LifeStyle.J) {
    return T.CognitiveFunction.Fe;
  }

  throw Error("unattainable code");
};

export const toAuxiliary = ([
  a,
  f1,
  f2,
  l,
]: T.MBTIComponent): T.CognitiveFunction => {
  return toDominant([
    a === T.Attitude.E ? T.Attitude.I : T.Attitude.E,
    f1,
    f2,
    l,
  ]);
};

export const toTertiary = (mbti: T.MBTIComponent): T.CognitiveFunction => {
  const d = toAuxiliary([mbti[0], mbti[1], mbti[2], mbti[3]]);
  return functionPair(d);
};

export const toInferior = (mbti: T.MBTIComponent): T.CognitiveFunction => {
  const d = toDominant([mbti[0], mbti[1], mbti[2], mbti[3]]);
  return functionPair(d);
};

//

export const findRomanticPartners = ([a, f1, f2, l]: T.MBTIComponent): [
  T.MBTIComponent,
  T.MBTIComponent
] => {
  const targetA: T.Attitude = a === T.Attitude.I ? T.Attitude.E : T.Attitude.I;
  const targetL: T.LifeStyle =
    l === T.LifeStyle.P ? T.LifeStyle.J : T.LifeStyle.P;

  const logic12: boolean =
    (a === T.Attitude.I && l === T.LifeStyle.P) ||
    (a === T.Attitude.E && l === T.LifeStyle.J);

  const s: T.Function1 = !logic12
    ? f1
    : f1 === T.Function1.S
    ? T.Function1.N
    : T.Function1.S;
  const t: T.Function2 = !logic12
    ? f2 === T.Function2.T
      ? T.Function2.F
      : T.Function2.T
    : f2;

  // results
  const r1: T.MBTIComponent = [targetA, f1, f2, targetL];
  const r2: T.MBTIComponent = [targetA, s, t, targetL];

  return [r1, r2];
};

const personalityDBMapping: [number, T.MBTI][] = [
  [1, T.MBTI.ISTJ],
  [2, T.MBTI.ESTJ],
  [3, T.MBTI.ISFJ],
  [4, T.MBTI.ESFJ],
  [5, T.MBTI.ESFP],
  [6, T.MBTI.ISFP],
  [7, T.MBTI.ESTP],
  [8, T.MBTI.ISTP],
  [9, T.MBTI.INFJ],
  [10, T.MBTI.ENFJ],
  [11, T.MBTI.INFP],
  [12, T.MBTI.ENFP],
  [13, T.MBTI.INTP],
  [14, T.MBTI.ENTP],
  [15, T.MBTI.INTJ],
  [16, T.MBTI.ENTJ],
];

export const listToPersonalityDB = (mbti: T.MBTI): string => {
  const n = personalityDBMapping.find((x) => x[1] === mbti);
  if (!n) {
    throw Error("none found");
  }
  return `https://www.personality-database.com/personality_type/${n[0]}`;
};
