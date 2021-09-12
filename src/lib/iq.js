import * as T from "./type.js";
export const iqsDist = [
  [T.MBTI.ISTJ, 330, 6.83, 6.92],
  [T.MBTI.ISFJ, 132, 2.73, 6.82],
  [T.MBTI.INFJ, 231, 4.78, 1.79],
  [T.MBTI.INTJ, 364, 7.53, 2.62],
  [T.MBTI.ISTP, 156, 3.23, 4.16],
  [T.MBTI.ISFP, 104, 2.15, 5.4],
  [T.MBTI.INFP, 503, 10.41, 3.89],
  [T.MBTI.INTP, 582, 12.05, 3.54],
  [T.MBTI.ESTP, 155, 3.21, 6.52],
  [T.MBTI.ENFP, 127, 2.63, 9.37],
  [T.MBTI.ESFP, 746, 15.45, 7.6],
  [T.MBTI.ENTP, 548, 11.35, 4.89],
  [T.MBTI.ESTP, 188, 3.89, 14.97],
  [T.MBTI.ESFJ, 160, 3.31, 13.97],
  [T.MBTI.ENFJ, 220, 4.55, 3.61],
  [T.MBTI.ENTJ, 282, 5.84, 3.93]
].sort((a, b) => a[2] / a[3] - b[2] / b[3]);
