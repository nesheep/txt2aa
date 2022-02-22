import PySimpleGUI as sg

from constants import TITLE, ICON
from layout import init_layout
from utils import resource_path


def main() -> None:
    sg.theme("Green")
    layout = init_layout()
    window = sg.Window(TITLE, layout, icon=resource_path(ICON))

    while True:
        if event_values := window.read():
            event, _ = event_values
            if event == sg.WIN_CLOSED:
                break

    window.close()


if __name__ == "__main__":
    main()
