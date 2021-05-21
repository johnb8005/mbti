import * as T from "./lib/type";

export const toImgPath = (mbtiId: T.MBTI) => {
  const n =
    T.MBTI[mbtiId].toLowerCase() + "-" + T.Personality[mbtiId].toLowerCase();
  return `https://static.neris-assets.com/images/personality-types/avatars/${n}.svg`;
};

export const listPersonalities: T.MBTI[] = Object.values(T.MBTI)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.MBTI);

export const listRoles: T.Role[] = Object.values(T.Role)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.Role);

export const listCognitiveFunctions: T.CognitiveFunction[] = Object.values(
  T.CognitiveFunction
)
  .filter((x) => typeof x !== "string")
  .map((x) => x as T.CognitiveFunction);
