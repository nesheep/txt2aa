type Condition = {
  txt: string;
  font: string;
  fontSize: number;
  color: string;
  aaFont: string;
  numy: number;
  exp: number;
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

export default Condition;

