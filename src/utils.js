import * as T from "./lib/type.js";
export const toImgPath = (mbtiId) => {
  const n = T.MBTI[mbtiId].toLowerCase() + "-" + T.Personality[mbtiId].toLowerCase();
  return `https://static.neris-assets.com/images/personality-types/avatars/${n}.svg`;
};