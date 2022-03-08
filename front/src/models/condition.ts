type Condition = {
  txt: string;
  font: string;
  fontSize: number;
  color: string;
  aaFont: string;
  numy: number;
  exp: number;
};

export const FONT_NAMES: string[] = [
  'MS ゴシック 標準', 'MS 明朝 標準',
  '游ゴシック 標準', '游明朝 標準',
  'Microsoft Himalaya 標準',
];

export const FONT_FILES: string[] = [
  'msgothic.ttc', 'msmincho.ttc',
  'YuGothR.ttc', 'yumin.ttf',
  'himalaya.ttf',
];

export const fontMap = (fontName: string): string => {
  const index = FONT_NAMES.indexOf(fontName);
  if (index >= 0 && index < FONT_FILES.length) return FONT_FILES[index];
  return fontName;
};

export const getTxt2imgUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color } = condition;
  return `/txt2img?txt=${txt}&fnt=${fontMap(font)}&fs=${fontSize}&clr=${color.slice(1)}`;
};

export const getTxt2aaUrl = (condition: Condition): string => {
  const { txt, font, fontSize, numy } = condition;
  return `/txt2aa?txt=${txt}&fnt=${fontMap(font)}&fs=${fontSize}&ny=${numy}`;
};

export const getTxt2aaimgUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color, aaFont, numy, exp } = condition;
  return `/txt2aa/img?txt=${txt}&fnt=${fontMap(font)}&fs=${fontSize}&clr=${color.slice(1)}&afnt=${fontMap(aaFont)}&ny=${numy}&exp=${exp}`;
};

export const initialCondition: Condition = {
  txt: 'aa',
  font: 'MS ゴシック 標準',
  fontSize: 200,
  color: '#000000',
  aaFont: 'MS ゴシック 標準',
  numy: 20,
  exp: 1,
};

export default Condition;
