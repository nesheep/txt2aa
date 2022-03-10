type Condition = {
  txt: string;
  font: string;
  fontSize: number;
  color: string;
  aaFont: string;
  numy: number;
  exp: number;
  aaStrs: string;
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

const buildUrl = (url: string, params: { name: string, value: string }[]): string => {
  const u = new URL(url, window.origin);
  params.forEach(({ name, value }) => u.searchParams.set(name, value));
  return u.toString();
};

export const getTxt2imgUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color } = condition;
  return buildUrl('/txt2img', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'clr', value: color },
  ]);
};

export const getTxt2aaUrl = (condition: Condition): string => {
  const { txt, font, fontSize, aaFont, numy, aaStrs } = condition;
  return buildUrl('/txt2aa', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'afnt', value: fontMap(aaFont) },
    { name: 'ny', value: String(numy) },
    { name: 'astr', value: aaStrs },
  ]);
};

export const getTxt2aaimgUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color, aaFont, numy, exp, aaStrs } = condition;
  return buildUrl('/txt2aa/img', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'clr', value: color },
    { name: 'afnt', value: fontMap(aaFont) },
    { name: 'ny', value: String(numy) },
    { name: 'exp', value: String(exp) },
    { name: 'astr', value: aaStrs },
  ]);
};

export const initialCondition: Condition = {
  txt: 'aa',
  font: 'MS ゴシック 標準',
  fontSize: 200,
  color: '#000000',
  aaFont: 'MS ゴシック 標準',
  numy: 20,
  exp: 1,
  aaStrs: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'"!?#&()~^|@;:.,[]{}<>_0123456789`,
};

export default Condition;
