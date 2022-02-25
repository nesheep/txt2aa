from io import BytesIO
from pathlib import Path

import webview
from flask import Flask, make_response, render_template, request, send_file
from flask.wrappers import Response

from txt2aa import txt2aa_img, txt2img
from utils import resource_path

if __name__ == "__main__":
    server = Flask(__name__)
    html_folder = resource_path(Path("front/build"))
    server.static_folder = html_folder / "static"
    server.template_folder = html_folder

    window = webview.create_window(
        title="txt2aa",
        url=server,
        min_size=(800, 600),  # type: ignore
    )

    @server.route("/")
    def index() -> str:
        return render_template("index.html")

    @server.route("/txt2img")
    def get_txt2img() -> Response:
        txt = request.args.get("txt", "")
        img = txt2img(txt)
        img_io = BytesIO()
        img.save(img_io, "png")
        img_io.seek(0)
        return make_response(send_file(img_io, mimetype="image/png"))

    @server.route("/txt2aa/img")
    def get_txt2aa_img() -> Response:
        txt = request.args.get("txt", "")
        img = txt2aa_img(txt)
        img_io = BytesIO()
        img.save(img_io, "png")
        img_io.seek(0)
        return make_response(send_file(img_io, mimetype="image/png"))

    webview.start()
