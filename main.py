import webview

from server import server

if __name__ == "__main__":
    window = webview.create_window(
        title="txt2aa",
        url=server,
        width=1000,
        height=800,
        min_size=(1000, 800),  # type: ignore
    )

    webview.start()
