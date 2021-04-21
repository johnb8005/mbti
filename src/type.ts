export enum CognitiveFunction {
  Ni,
  Ne,
  Si,
  Se,
  Ti,
  Te,
  Fi,
  Fe,
}

export type MBTIComponent = [Attitude, Function1, Function2, LifeStyle];

export enum MBTI {
  INTP,
  INTJ,
  INFP,
  INFJ,
  ISTP,
  ISTJ,
  ISFP,
  ISFJ,
  ENTP,
  ENTJ,
  ENFP,
  ENFJ,
  ESTP,
  ESTJ,
  ESFP,
  ESFJ,
}

export enum Attitude {
  E,
  I,
}

export enum Function1 {
  N,
  S,
}

export enum Function2 {
  F,
  T,
}

export enum LifeStyle {
  J,
  P,
}
