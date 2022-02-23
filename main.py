import PySimpleGUI as sg

from constants import ICON, TITLE, K
from handlers import *
from layout import layout
from utils import resource_path


def main() -> None:
    window = sg.Window(TITLE, layout.main, icon=resource_path(ICON))

    while True:
        if event_values := window.read():
            event, values = event_values
            if event == sg.WIN_CLOSED:
                break
            elif isinstance(values, dict):
                if event == K.CONVERT_BTN:
                    handle_convert_btn(values)

    window.close()


if __name__ == "__main__":
    main()
