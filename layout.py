import PySimpleGUI as sg

from constants import THEME, D, K


class Layout:
    def __init__(self) -> None:
        sg.theme(THEME)

        self.txt_in = sg.In(k=K.TXT_IN)
        self.convert_btn = sg.Button("変換", k=K.CONVERT_BTN)

        img_args = {"size": D.IMG_SIZE, "background_color": "white"}
        self.before_img = sg.Image(**img_args)
        self.after_img = sg.Image(**img_args)

    @property
    def main(self) -> list[list]:
        return [
            [self.txt_in, self.convert_btn],
            [self.before_img, self.after_img],
        ]


layout = Layout()
