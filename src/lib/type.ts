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
  ENFJ,
  ENFP,
  ENTJ,
  ENTP,
  ESFJ,
  ESFP,
  ESTJ,
  ESTP,
  INFJ,
  INFP,
  INTJ,
  INTP,
  ISFJ,
  ISFP,
  ISTJ,
  ISTP,
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

export enum Role {
  Analyst,
  Diplomat,
  Sentinel,
  Explorer,
}

// taken from https://www.16personalities.com/personality-types
export enum Personality {
  Logician = MBTI.INTP,
  Architect = MBTI.INTJ,
  Mediator = MBTI.INFP,
  Advocate = MBTI.INFJ,
  Virtuoso = MBTI.ISTP,
  Logistician = MBTI.ISTJ,
  Adventurer = MBTI.ISFP,
  Defender = MBTI.ISFJ,
  Debater = MBTI.ENTP,
  Commander = MBTI.ENTJ,
  Campaigner = MBTI.ENFP,
  Protagonist = MBTI.ENFJ,
  Entrepreneur = MBTI.ESTP,
  Executive = MBTI.ESTJ,
  Entertainer = MBTI.ESFP,
  Consul = MBTI.ESFJ,
}
