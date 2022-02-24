from io import BytesIO
from pathlib import Path

import webview
from flask import Flask, make_response, render_template, request, send_file

from txt2aa import txt2aa_img, txt2img
from utils import resource_path

server = Flask(__name__)
html_folder = resource_path(Path("front/build"))
server.static_folder = html_folder / "static"
server.template_folder = html_folder

window = webview.create_window("pwv-flask", server)


@server.route("/")
def index():
    return render_template("index.html")


@server.route("/txt2img")
def get_txt2img():
    txt = request.args.get("txt", "")
    img = txt2img(txt)
    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)
    return make_response(send_file(img_io, mimetype="image/png"))


@server.route("/txt2aa/img")
def get_txt2aa_img():
    txt = request.args.get("txt", "")
    img = txt2aa_img(txt)
    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)
    return make_response(send_file(img_io, mimetype="image/png"))


if __name__ == "__main__":
    webview.start(gui="edgechromium")
