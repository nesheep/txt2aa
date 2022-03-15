from io import BytesIO
from pathlib import Path

from flask import Flask, abort, jsonify, make_response, render_template, request, send_file
from flask.wrappers import Response
from PIL import Image
from webview import OPEN_DIALOG, Window, windows

from txt2aa import txt2aa, txt2aa_img, txt2img
from utils import is_valid_font, isfloat, isint, resource_path

FONT = "msgothic.ttc"
STRS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'\"!?#&()~^|@;:.,[]{}<>_0123456789"
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
    txt_arg = request.args.get("txt", "")
    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    clr_arg = request.args.get("clr", "black")

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200
    color = clr_arg

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
    txt_arg = request.args.get("txt", "")
    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    afnt_arg = request.args.get("afnt", "")
    ny_arg = request.args.get("ny", "")
    astr_arg = request.args.get("astr", STRS)

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200
    aa_font = afnt_arg if is_valid_font(afnt_arg) else FONT
    numy = int(ny_arg) if isint(ny_arg) else 20
    str_list = list(astr_arg)

    try:
        return txt2aa(txt, fontpath, fontsize, aa_font, numy, str_list)
    except:
        return ""


@server.route("/txt2aa/img")
def get_txt2aa_img() -> Response:
    txt_arg = request.args.get("txt", "")
    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    clr_arg = request.args.get("clr", "black")
    afnt_arg = request.args.get("afnt", "")
    ny_arg = request.args.get("ny", "")
    exp_arg = request.args.get("exp", "")
    astr_arg = request.args.get("astr", STRS)

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = int(fs_arg) if isint(fs_arg) else 200
    color = clr_arg
    aa_font = afnt_arg if is_valid_font(afnt_arg) else FONT
    numy = int(ny_arg) if isint(ny_arg) else 20
    exp = float(exp_arg) if isfloat(exp_arg) else 1.0
    str_list = list(astr_arg)

    try:
        img = txt2aa_img(txt, fontpath, fontsize, color, aa_font, numy, exp, str_list)
    except:
        img = EMPTY_IMG

    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)

    return make_response(send_file(img_io, mimetype="image/png"))


@server.route("/open/font")
def open_font() -> Response:
    window = windows[0]
    if isinstance(window, Window):
        file_types = "Font files (*.ttf;*.ttc;*.otf;*.otc)",
        files = window.create_file_dialog(OPEN_DIALOG, file_types=file_types)
        if isinstance(files, tuple):
            return jsonify({"font": files[0]})
    abort(400)
