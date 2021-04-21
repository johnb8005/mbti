//see https://docs.google.com/spreadsheets/d/1oHqliVK6oGoO2N75vFBcEXYj0_JuUBplljaJHDdN9FM/edit#gid=0
import * as T from "./type";

export const toComponent = (mbti: T.MBTI): T.MBTIComponent => {
  switch (mbti) {
    case T.MBTI.INTP:
      return [T.Attitude.I, T.Function1.N, T.Function2.T, T.LifeStyle.P];
    case T.MBTI.INTJ:
      return [T.Attitude.I, T.Function1.N, T.Function2.T, T.LifeStyle.J];
    case T.MBTI.INFP:
      return [T.Attitude.I, T.Function1.N, T.Function2.F, T.LifeStyle.P];
    case T.MBTI.INFJ:
      return [T.Attitude.I, T.Function1.N, T.Function2.F, T.LifeStyle.J];
    case T.MBTI.ISTP:
      return [T.Attitude.I, T.Function1.S, T.Function2.T, T.LifeStyle.P];
    case T.MBTI.ISTJ:
      return [T.Attitude.I, T.Function1.S, T.Function2.T, T.LifeStyle.J];
    case T.MBTI.ISFP:
      return [T.Attitude.I, T.Function1.S, T.Function2.F, T.LifeStyle.P];
    case T.MBTI.ISFJ:
      return [T.Attitude.I, T.Function1.S, T.Function2.F, T.LifeStyle.J];
    case T.MBTI.ENTP:
      return [T.Attitude.E, T.Function1.N, T.Function2.T, T.LifeStyle.P];
    case T.MBTI.ENTJ:
      return [T.Attitude.E, T.Function1.N, T.Function2.T, T.LifeStyle.J];
    case T.MBTI.ENFP:
      return [T.Attitude.E, T.Function1.N, T.Function2.F, T.LifeStyle.P];
    case T.MBTI.ENFJ:
      return [T.Attitude.E, T.Function1.N, T.Function2.F, T.LifeStyle.J];
    case T.MBTI.ESTP:
      return [T.Attitude.E, T.Function1.S, T.Function2.T, T.LifeStyle.P];
    case T.MBTI.ESTJ:
      return [T.Attitude.E, T.Function1.S, T.Function2.T, T.LifeStyle.J];
    case T.MBTI.ESFP:
      return [T.Attitude.E, T.Function1.S, T.Function2.F, T.LifeStyle.P];
    case T.MBTI.ESFJ:
      return [T.Attitude.E, T.Function1.S, T.Function2.F, T.LifeStyle.J];
  }
};

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
