import * as T from "./type";

// taken from https://www.truity.com/sites/default/files/fillpdf/personalityandincomereport2019.pdf or alternatively truity.com/type-income-2019

// Average Income by Personality Type (Age 21+)
export const incomes: [T.MBTI, { incomes: { value: number; n: number } }][] = [
  [T.MBTI.ENFJ, { incomes: { n: 2572, value: 47292 } }],
  [T.MBTI.ENFP, { incomes: { n: 2706, value: 42228 } }],
  [T.MBTI.ENTJ, { incomes: { n: 1886, value: 59993 } }],
  [T.MBTI.ENTP, { incomes: { n: 1513, value: 54103 } }],
  [T.MBTI.ESFJ, { incomes: { n: 1314, value: 47902 } }],
  [T.MBTI.ESFP, { incomes: { n: 630, value: 45067 } }],
  [T.MBTI.ESTJ, { incomes: { n: 977, value: 57831 } }],
  [T.MBTI.ESTP, { incomes: { n: 482, value: 53275 } }],
  [T.MBTI.INFJ, { incomes: { n: 1946, value: 39992 } }],
  [T.MBTI.INFP, { incomes: { n: 2135, value: 33736 } }],
  [T.MBTI.INTJ, { incomes: { n: 1896, value: 46986 } }],
  [T.MBTI.INTP, { incomes: { n: 1736, value: 38411 } }],
  [T.MBTI.ISFJ, { incomes: { n: 1140, value: 41835 } }],
  [T.MBTI.ISFP, { incomes: { n: 648, value: 34595 } }],
  [T.MBTI.ISTJ, { incomes: { n: 1142, value: 49994 } }],
  [T.MBTI.ISTP, { incomes: { n: 723, value: 41229 } }],
];

// % of Each Type Earning $150k + (Age 30-59)
export const incomeAbove150k: [T.MBTI, number, number][] = [
  [T.MBTI.ENFJ, 105, 7.5],
  [T.MBTI.ENFP, 109, 7.6],
  [T.MBTI.ENTJ, 148, 14.5],
  [T.MBTI.ENTP, 110, 14.1],
  [T.MBTI.ESFJ, 44, 5.4],
  [T.MBTI.ESFP, 19, 5.1],
  [T.MBTI.ESTJ, 83, 14.0],
  [T.MBTI.ESTP, 27, 10.3],
  [T.MBTI.INFJ, 45, 4.7],
  [T.MBTI.INFP, 47, 4.6],
  [T.MBTI.INTJ, 96, 10.4],
  [T.MBTI.INTP, 53, 6.5],
  [T.MBTI.ISFJ, 33, 5.0],
  [T.MBTI.ISFP, 12, 3.3],
  [T.MBTI.ISTJ, 46, 6.8],
  [T.MBTI.ISTP, 22, 5.8],
];

// % of Each Type Earning Under $15k (Age 21+)
// Type N Percent
export const incomeUnder15k = [
  [T.MBTI.ENFJ, 2572, 27.8],
  [T.MBTI.ENFP, 2706, 31.1],
  [T.MBTI.ENTJ, 1885, 21.8],
  [T.MBTI.ENTP, 1513, 25.9],
  [T.MBTI.ESFJ, 1314, 26.2],
  [T.MBTI.ESFP, 630, 24.3],
  [T.MBTI.ESTJ, 977, 23.5],
  [T.MBTI.ESTP, 482, 23.0],
  [T.MBTI.INFJ, 1946, 32.9],
  [T.MBTI.INFP, 2135, 39.2],
  [T.MBTI.INTJ, 1869, 30.7],
  [T.MBTI.INTP, 1736, 36.2],
  [T.MBTI.ISFJ, 1140, 31.6],
  [T.MBTI.ISFP, 648, 35.2],
  [T.MBTI.ISTJ, 1142, 26.4],
  [T.MBTI.ISTP, 723, 34.0],
];

// Average Incomes by Personality Type and Age Group
//

export const averageIncomesLabels = [
  "Type",
  "Under 18",
  "18-21",
  "Twenties",
  "Thirties",
  "Forties",
  "Fifties",
  "60+",
];

export const averageIncomes: [
  T.MBTI,
  number,
  number,
  number,
  number,
  number,
  number,
  number
][] = [
  [T.MBTI.ENFJ, 7102, 11772, 32787, 52875, 61837, 65982, 57637],
  [T.MBTI.ENFP, 6628, 9887, 28860, 47868, 58447, 60520, 46824],
  [T.MBTI.ENTJ, 6208, 13029, 39403, 70632, 79845, 78579, 84114],
  [T.MBTI.ENTP, 6458, 11813, 32938, 62246, 88926, 83505, 75152],
  [T.MBTI.ESFJ, 6279, 10167, 34182, 51812, 59343, 54311, 60233],
  [T.MBTI.ESFP, 6838, 7874, 33297, 47247, 51948, 59763, 62773],
  [T.MBTI.ESTJ, 11271, 11489, 36599, 62883, 77564, 72804, 69229],
  [T.MBTI.ESTP, 13879, 14905, 37739, 60511, 66500, 74277, 59275],
  [T.MBTI.INFJ, 3427, 5679, 26514, 45898, 59805, 62252, 44425],
  [T.MBTI.INFP, 1643, 5268, 22991, 37440, 54485, 52039, 39475],
  [T.MBTI.INTJ, 8409, 10774, 29231, 57131, 73676, 74956, 54128],
  [T.MBTI.INTP, 3341, 6692, 24458, 44365, 64408, 72488, 54189],
  [T.MBTI.ISFJ, 5601, 7438, 28164, 46676, 52510, 54797, 45943],
  [T.MBTI.ISFP, 3416, 6181, 27933, 39317, 39089, 42589, 29060],
  [T.MBTI.ISTJ, 5642, 9144, 33273, 55825, 65897, 62435, 49420],
  [T.MBTI.ISTP, 6835, 5390, 26852, 45595, 60757, 61030, 67674],
  //[T.MBTI.All,6359,9128,30059,51919,64075,64034,55788]
];

// Employment Status of Respondents Age 21+
// Type Self-Employed Disability Employed SAH Parent Retired Student Unemployed
export const employmentStatus = [
  [T.MBTI.ENFJ, 11.9, 0.9, 68.3, 1.8, 1.7, 10.4, 5.1],
  [T.MBTI.ENFP, 14.4, 1.6, 62.5, 3.1, 1.5, 12.2, 4.7],
  [T.MBTI.ENTJ, 12.9, 0.5, 68.5, 1.4, 1.4, 11.2, 4],
  [T.MBTI.ENTP, 14.6, 0.7, 61.6, 1.8, 1.6, 13.7, 5.9],
  [T.MBTI.ESFJ, 7.7, 0.5, 72.4, 3.6, 2.1, 8.7, 5.1],
  [T.MBTI.ESFP, 10.9, 0.8, 67.5, 6, 1.9, 8, 4.9],
  [T.MBTI.ESTJ, 9.1, 0.2, 71.3, 2.7, 2.2, 9.3, 5.1],
  [T.MBTI.ESTP, 11.6, 0.8, 68.2, 2.6, 3.1, 9.6, 4.1],
  [T.MBTI.INFJ, 9.7, 1.8, 64.7, 3.2, 2.3, 13.5, 4.9],
  [T.MBTI.INFP, 10, 2.7, 59.4, 3.4, 1.9, 13.7, 8.9],
  [T.MBTI.INTJ, 10.8, 1, 66.1, 1.8, 1.2, 14.1, 4.9],
  [T.MBTI.INTP, 10.1, 1.4, 61.3, 1.9, 1.3, 14.9, 9.2],
  [T.MBTI.ISFJ, 6.4, 1.6, 70.7, 4.9, 3.1, 8.6, 4.8],
  [T.MBTI.ISFP, 5.6, 3.6, 66.4, 6.2, 1.9, 8.8, 7.5],
  [T.MBTI.ISTJ, 6.9, 0.8, 73.3, 2.5, 3.1, 9, 4.5],
  [T.MBTI.ISTP, 7, 1.2, 66.6, 3.2, 2.1, 11.3, 8.7],
];

// Average Income (Age 21+, US, Employed Only
// Women | Men | Women/Men Income Ratio
export const averageIncomeByGender = [
  [T.MBTI.ENFJ, 54504, 66776, 82],
  [T.MBTI.ENFP, 50371, 62432, 81],
  [T.MBTI.ENTJ, 65378, 78468, 83],
  [T.MBTI.ENTP, 56469, 75551, 75],
  [T.MBTI.ESFJ, 56027, 67702, 83],
  [T.MBTI.ESFP, 49593, 60992, 81],
  [T.MBTI.ESTJ, 61018, 83558, 73],
  [T.MBTI.ESTP, 54787, 74406, 74],
  [T.MBTI.INFJ, 50186, 63024, 80],
  [T.MBTI.INFP, 43828, 55359, 79],
  [T.MBTI.INTJ, 55959, 69552, 80],
  [T.MBTI.INTP, 49872, 59773, 83],
  [T.MBTI.ISFJ, 54053, 68747, 79],
  [T.MBTI.ISFP, 44371, 63679, 70],
  [T.MBTI.ISTJ, 55840, 75756, 74],
  [T.MBTI.ISTP, 45745, 60375, 76],
];
