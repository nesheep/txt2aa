from io import BytesIO
from pathlib import Path

from flask import Flask, make_response, render_template, request, send_file
from flask.wrappers import Response
from PIL import Image

from txt2aa import txt2aa, txt2aa_img, txt2img
from utils import is_valid_font, isfloat, isint, resource_path

FONT = "msgothic.ttc"
EMPTY_IMG = Image.new("RGBA", (100, 100), (255, 255, 255, 0))

html_folder = resource_path(Path("front/build"))
server = Flask(
    import_name=__name__,
    static_folder=str(html_folder / "static"),
    template_folder=str(html_folder),
)


@server.route("/")
def index() -> str:
    return render_template("index.html")


@server.route("/txt2img")
def get_txt2img() -> Response:
    txt = request.args.get("txt", "")
    color = f"#{request.args.get('clr', '000000')}"

    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")

    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200

    try:
        img = txt2img(txt, fontpath, fontsize, color)
    except:
        img = EMPTY_IMG

    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)

    return make_response(send_file(img_io, mimetype="image/png"))


@server.route("/txt2aa")
def get_txt2aa() -> str:
    txt = request.args.get("txt", "")

    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    ny_arg = request.args.get("ny", "")

    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200
    numy = int(ny_arg) if isint(ny_arg) else 20

    try:
        aa = txt2aa(txt, fontpath, fontsize, numy)
    except:
        aa = ""

    return aa


@server.route("/txt2aa/img")
def get_txt2aa_img() -> Response:
    txt = request.args.get("txt", "")
    color = f"#{request.args.get('clr', '000000')}"

    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    afnt_arg = request.args.get("afnt", "")
    ny_arg = request.args.get("ny", "")
    exp_arg = request.args.get("exp", "")

    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200
    aa_font = afnt_arg if is_valid_font(afnt_arg) else FONT
    numy = int(ny_arg) if isint(ny_arg) else 20
    exp = float(exp_arg) if isfloat(exp_arg) else 1.0

    try:
        img = txt2aa_img(txt, fontpath, fontsize, color, aa_font, numy, exp)
    except:
        img = EMPTY_IMG

    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)

    return make_response(send_file(img_io, mimetype="image/png"))