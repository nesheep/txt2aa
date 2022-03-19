type Condition = {
  txt: string;
  font: string;
  fontSize: number;
  color: string;
  aaFont: string;
  numy: number;
  exp: number;
  aaStrs: string;
  bgimg: string;
};

export const FONT_NAMES: string[] = [
  'Arial 標準', 'Arial 太字', 'Arial 太字 斜体', 'Arial 斜体', 'Arial 極太',
  'Calibri 標準', 'Calibri 太字', 'Calibri 斜体', 'Calibri 細字', 'Calibri 細字 斜体', 'Calibri 太字 斜体',
  'Cambria 標準', 'Cambria 太字', 'Cambria 斜体', 'Cambria 太字 斜体',
  'Candara 標準', 'Candara 太字', 'Candara 斜体', 'Candara 太字 斜体',
  'Comic Sans MS 標準', 'Comic Sans MS 太字', 'Comic Sans MS 斜体', 'Comic Sans MS 太字 斜体',
  'Consolas 標準', 'Consolas 太字', 'Consolas 斜体', 'Consolas 太字 斜体',
  'Constantia 標準', 'Constantia 太字', 'Constantia 斜体', 'Constantia 太字 斜体',
  'Corbel 標準', 'Corbel 太字', 'Corbel 斜体', 'Corbel 太字 斜体',
  'Courier New 標準', 'Courier New 太字', 'Courier New 斜体', 'Courier New 太字 斜体',
  'Ebrima 標準', 'Ebrima 太字', 'FixedSys 標準', 'Franklin Gothic 中', 'Franklin Gothic 中 斜体',
  'Gabriola 標準', 'Gadugi 標準', 'Gadugi 太字', 'Georgia 標準', 'Georgia 太字', 'Georgia 斜体', 'Georgia 太字 斜体',
  'Impact 標準', 'Javanese Text 標準', 'Leelawadee UI 標準', 'Leelawadee UI 太字', 'Leelawadee UI 中細',
  'Lucida Console 標準', 'Lucida Sans Unicode 標準', 'Malgun Gothic 標準', 'Malgun Gothic 太字', 'Malgun Gothic 細字',
  'メイリオ レギュラー', 'メイリオ ボールド', 'Microsoft Himalaya 標準', 'Microsoft JhengHei 標準',
  'Microsoft JhengHei 太字', 'Microsoft JhengHei 細字', 'Microsoft New Tai Lue 標準', 'Microsoft New Tai Lue 太字',
  'Microsoft PhagsPa 標準', 'Microsoft PhagsPa 太字', 'Microsoft Sans Serif 標準', 'Microsoft Tai Le 標準', 'Microsoft Tai Le 太字',
  'Microsoft YaHei 標準', 'Microsoft YaHei 太字', 'Microsoft YaHei 細字', 'Microsoft Yi Baiti 標準', 'Mongolian Baiti 標準',
  'MS ゴシック 標準', 'MS 明朝 標準', 'MV Boli 標準', 'Myanmar Text 標準', 'Myanmar Text 太字',
  'Nirmala UI 標準', 'Nirmala UI 太字', 'Nirmala UI 中細', 'SimSun 標準',
  'Palatino Linotype 標準', 'Palatino Linotype 太字', 'Palatino Linotype 斜体', 'Palatino Linotype 太字 斜体',
  'Segoe MDL2 Assets 標準', 'Segoe Print 標準', 'Segoe Print 太字', 'Segoe Script 標準', 'Segoe Script 太字',
  'Segoe UI 標準', 'Segoe UI 太字', 'Segoe UI 斜体', 'Segoe UI 細字',
  'Segoe UI 中細', 'Segoe UI 太字 斜体', 'Segoe UI 極太', 'Segoe UI 極太 斜体',
  'Segoe UI 細字 斜体', 'Segoe UI 中太', 'Segoe UI 中太 斜体', 'Segoe UI 中細 斜体',
  'Segoe UI Emoji 標準', 'Segoe UI Historic 標準', 'Segoe UI Symbol 標準', 'SimSun-ExtB 標準',
  'Sylfaen 標準', 'Symbol 標準', 'Tahoma 標準', 'Tahoma 太字',
  'Times New Roman 標準', 'Times New Roman 太字', 'Times New Roman 太字 斜体', 'Times New Roman 斜体',
  'Trebuchet MS 標準', 'Trebuchet MS 太字', 'Trebuchet MS 太字 斜体', 'Trebuchet MS 斜体',
  'Verdana 標準', 'Verdana 太字', 'Verdana 斜体', 'Verdana 太字 斜体',
  'Webdings 標準', 'Wingdings 標準',
  '游ゴシック 太字', '游ゴシック 細字', '游ゴシック 中', '游ゴシック 標準',
  '游明朝 標準', '游明朝 中太', '游明朝 細字',
];

export const FONT_FILES: string[] = [
  'arial.ttf', 'arialbd.ttf', 'arialbi.ttf', 'ariali.ttf', 'ariblk.ttf',
  'calibri.ttf', 'calibrib.ttf', 'calibrii.ttf', 'calibril.ttf', 'calibrili.ttf', 'calibriz.ttf',
  'cambria.ttc', 'cambriab.ttf', 'cambriai.ttf', 'cambriaz.ttf',
  'Candara.ttf', 'Candarab.ttf', 'Candarai.ttf', 'Candaraz.ttf',
  'comic.ttf', 'comicbd.ttf', 'comici.ttf', 'comicz.ttf',
  'consola.ttf', 'consolab.ttf', 'consolai.ttf', 'consolaz.ttf',
  'constan.ttf', 'constanb.ttf', 'constani.ttf', 'constanz.ttf',
  'corbel.ttf', 'corbelb.ttf', 'corbeli.ttf', 'corbelz.ttf',
  'cour.ttf', 'courbd.ttf', 'couri.ttf', 'courbi.ttf',
  'ebrima.ttf', 'ebrimabd.ttf', 'jvgafix.fon', 'framd.ttf', 'framdit.ttf',
  'Gabriola.ttf', 'gadugi.ttf', 'gadugib.ttf', 'georgia.ttf', 'georgiab.ttf', 'georgiai.ttf', 'georgiaz.ttf',
  'impact.ttf', 'javatext.ttf', 'LeelawUI.ttf', 'LeelaUIb.ttf', 'LeelUIsl.ttf',
  'lucon.ttf', 'l_10646.ttf', 'malgun.ttf', 'malgunbd.ttf', 'malgunsl.ttf',
  'meiryo.ttc', 'meiryob.ttc', 'himalaya.ttf', 'msjh.ttc',
  'msjhbd.ttc', 'msjhl.ttc', 'ntailu.ttf', 'ntailub.ttf',
  'phagspa.ttf', 'phagspab.ttf', 'micross.ttf', 'taile.ttf', 'taileb.ttf',
  'msyh.ttc', 'msyhbd.ttc', 'msyhl.ttc', 'msyi.ttf', 'monbaiti.ttf',
  'msgothic.ttc', 'msmincho.ttc', 'mvboli.ttf', 'mmrtext.ttf', 'mmrtextb.ttf',
  'Nirmala.ttf', 'NirmalaB.ttf', 'NirmalaS.ttf', 'simsun.ttc',
  'pala.ttf', 'palab.ttf', 'palai.ttf', 'palabi.ttf',
  'segmdl2.ttf', 'segoepr.ttf', 'segoeprb.ttf', 'segoesc.ttf', 'segoescb.ttf',
  'segoeui.ttf', 'segoeuib.ttf', 'segoeuii.ttf', 'segoeuil.ttf',
  'segoeuisl.ttf', 'segoeuiz.ttf', 'seguibl.ttf', 'seguibli.ttf',
  'seguili.ttf', 'seguisb.ttf', 'seguisbi.ttf', 'seguisli.ttf',
  'seguiemj.ttf', 'seguihis.ttf', 'seguisym.ttf', 'simsunb.ttf',
  'sylfaen.ttf', 'symbol.ttf', 'tahoma.ttf', 'tahomabd.ttf',
  'times.ttf', 'timesbd.ttf', 'timesbi.ttf', 'timesi.ttf',
  'trebuc.ttf', 'trebucbd.ttf', 'trebucbi.ttf', 'trebucit.ttf',
  'verdana.ttf', 'verdanab.ttf', 'verdanai.ttf', 'verdanaz.ttf',
  'webdings.ttf', 'wingding.ttf',
  'YuGothB.ttc', 'YuGothL.ttc', 'YuGothM.ttc', 'YuGothR.ttc',
  'yumin.ttf', 'yumindb.ttf', 'yuminl.ttf',
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
  const { txt, font, fontSize, color, bgimg } = condition;
  return buildUrl('/txt2img', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'clr', value: color },
    { name: 'bg', value: bgimg },
  ]);
};

export const getTxt2aaUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color, aaFont, numy, aaStrs, bgimg } = condition;
  return buildUrl('/txt2aa', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'clr', value: color },
    { name: 'afnt', value: fontMap(aaFont) },
    { name: 'ny', value: String(numy) },
    { name: 'astr', value: aaStrs },
    { name: 'bg', value: bgimg },
  ]);
};

export const getTxt2aaimgUrl = (condition: Condition): string => {
  const { txt, font, fontSize, color, aaFont, numy, exp, aaStrs, bgimg } = condition;
  return buildUrl('/txt2aa/img', [
    { name: 'txt', value: txt },
    { name: 'fnt', value: fontMap(font) },
    { name: 'fs', value: String(fontSize) },
    { name: 'clr', value: color },
    { name: 'afnt', value: fontMap(aaFont) },
    { name: 'ny', value: String(numy) },
    { name: 'exp', value: String(exp) },
    { name: 'astr', value: aaStrs },
    { name: 'bg', value: bgimg },
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
  bgimg: '',
};

export default Condition;
