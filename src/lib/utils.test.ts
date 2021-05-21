//see https://docs.google.com/spreadsheets/d/1oHqliVK6oGoO2N75vFBcEXYj0_JuUBplljaJHDdN9FM/edit#gid=0
import * as I from "./utils";
import * as T from "./type";

const matrix = {
  [T.MBTI.INTP]: {
    dominant: T.CognitiveFunction.Ti,
    auxiliary: T.CognitiveFunction.Ne,
    tertiary: T.CognitiveFunction.Si,
    inferior: T.CognitiveFunction.Fe,
  },
  [T.MBTI.INTJ]: { dominant: T.CognitiveFunction.Ni },
  [T.MBTI.INFP]: { dominant: T.CognitiveFunction.Fi },
  [T.MBTI.INFJ]: { dominant: T.CognitiveFunction.Ni },
  [T.MBTI.ISTP]: { dominant: T.CognitiveFunction.Ti },
  [T.MBTI.ISTJ]: { dominant: T.CognitiveFunction.Si },
  [T.MBTI.ISFP]: { dominant: T.CognitiveFunction.Fi },
  [T.MBTI.ISFJ]: { dominant: T.CognitiveFunction.Si },
  [T.MBTI.ENTP]: { dominant: T.CognitiveFunction.Ne },
  [T.MBTI.ENTJ]: { dominant: T.CognitiveFunction.Te },
  [T.MBTI.ENFP]: { dominant: T.CognitiveFunction.Ne },
  [T.MBTI.ENFJ]: { dominant: T.CognitiveFunction.Fe },
  [T.MBTI.ESTP]: { dominant: T.CognitiveFunction.Se },
  [T.MBTI.ESTJ]: { dominant: T.CognitiveFunction.Te },
  [T.MBTI.ESFP]: { dominant: T.CognitiveFunction.Se },
  [T.MBTI.ESFJ]: { dominant: T.CognitiveFunction.Fe },
};

describe("to cognitive function - dominant", () => {
  const mbtiTypes: number[] = Object.keys(T.MBTI)
    .filter((x) => !isNaN(Number(x)))
    .map((x) => Number(x));

  mbtiTypes.forEach((m) => {
    test(T.MBTI[m], () => {
      const c = I.toComponent(m);
      expect(I.toDominant(c)).toEqual(matrix[m as T.MBTI].dominant);
    });
  });
});

describe("to cognitive function - non dominant", () => {
  const t = T.MBTI.INTP;
  const c = I.toComponent(t);

  test("auxiliary", () => {
    expect(I.toAuxiliary(c)).toEqual(matrix[t].auxiliary);
  });
  test("tertiary", () => {
    expect(I.toTertiary(c)).toEqual(matrix[t].tertiary);
  });
  test("inferior", () => {
    expect(I.toInferior(c)).toEqual(matrix[t].inferior);
  });
});

test("find role", () => {
  const t = T.MBTI.INTP;
  const c = I.toComponent(t);
  expect(I.getRole(c)).toEqual(T.Role.Analyst);
});

test("find romantic partner", () => {
  const t = T.MBTI.INTP;
  const c = I.toComponent(t);
  expect(I.findRomanticPartners(c)).toEqual([
    I.toComponent(T.MBTI.ENTJ),
    I.toComponent(T.MBTI.ESTJ),
  ]);
});

test("from component", () => {
  expect(I.fromComponent([1, 0, 1, 1])).toEqual(T.MBTI.INTP);
});
