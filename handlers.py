from PIL.ImageTk import PhotoImage

from constants import K
from layout import layout
from txt2aa import aa2img, img2aa, txt2img


def handle_convert_btn(values: dict) -> None:
    txt = values.get(K.TXT_IN)
    if not (isinstance(txt, str) and txt):
        return
    img = txt2img(txt)
    aa = img2aa(img)
    aa_img = aa2img(aa)
    layout.before_img.update(data=PhotoImage(img))
    layout.after_img.update(data=PhotoImage(aa_img))
