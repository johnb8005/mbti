import * as T from "./lib/type.js";
export const toImgPath = (mbtiId) => {
  const n = T.MBTI[mbtiId].toLowerCase() + "-" + T.Personality[mbtiId].toLowerCase();
  return `https://static.neris-assets.com/images/personality-types/avatars/${n}.svg`;
};
export const listPersonalities = Object.values(T.MBTI).filter((x) => typeof x !== "string").map((x) => x);
export const listRoles = Object.values(T.Role).filter((x) => typeof x !== "string").map((x) => x);
export const listCognitiveFunctions = Object.values(T.CognitiveFunction).filter((x) => typeof x !== "string").map((x) => x);
