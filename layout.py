import PySimpleGUI as sg

from constants import THEME, D, K


class Layout:
    txt_in: sg.I
    convert_btn: sg.B
    before_img: sg.Im
    after_img: sg.Im

    def __init__(self, theme: str) -> None:
        sg.theme(theme)

        self.txt_in = sg.I(k=K.TXT_IN)
        self.convert_btn = sg.B("変換", k=K.CONVERT_BTN)

        img_args = {"size": D.IMG_SIZE, "background_color": "white"}
        self.before_img = sg.Im(**img_args)
        self.after_img = sg.Im(**img_args)

    @property
    def main(self) -> list[list]:
        return [
            [self.txt_in, self.convert_btn],
            [self.before_img, self.after_img],
        ]


layout = Layout(THEME)
