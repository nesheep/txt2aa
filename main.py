import webview

from server import server


def create_window() -> webview.Window:
    return webview.create_window(
        title="txt2aa",
        url=server,
        width=1000,
        height=800,
        min_size=(1000, 800),  # type: ignore
    )


if __name__ == "__main__":
    create_window()
    webview.start(debug=True, gui="cef")
