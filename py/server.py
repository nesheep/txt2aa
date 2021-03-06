from io import BytesIO
from math import floor

from flask import Flask, make_response, request, send_file
from flask.wrappers import Response
from PIL import Image
from werkzeug.wrappers.response import Response as Res

from txt2aa import txt2aa, txt2aa_img, txt2img
from utils import is_valid_font, isfloat

FONT = "msgothic.ttc"
STRS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz +-*/%'\"!?#&()~^|@;:.,[]{}<>_0123456789"
EMPTY_IMG = Image.new("RGBA", (100, 100), (255, 255, 255, 0))

server = Flask(import_name=__name__)


@server.after_request
def after_request(res: Res) -> Res:
    res.headers.add("Access-Control-Allow-Origin", "*")
    res.headers.add("Access-Control-Allow-Methods", "GET,OPTIONS")
    res.headers.add("Access-Control-Allow-Headers", "Content-Type")
    return res


@server.route("/")
def index() -> str:
    return "OK"


@server.route("/txt2img")
def get_txt2img() -> Response:
    txt_arg = request.args.get("txt", "")
    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    clr_arg = request.args.get("clr", "black")
    bg_arg = request.args.get("bg", "")

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = floor(float(fs_arg)) if isfloat(fs_arg) else 200
    color = clr_arg
    bgpath = bg_arg

    try:
        img = txt2img(txt, fontpath, fontsize, color, bgpath)
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
    clr_arg = request.args.get("clr", "black")
    afnt_arg = request.args.get("afnt", "")
    ny_arg = request.args.get("ny", "")
    astr_arg = request.args.get("astr", STRS)
    bg_arg = request.args.get("bg", "")

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = floor(float(fs_arg)) if isfloat(fs_arg) else 200
    color = clr_arg
    aa_font = afnt_arg if is_valid_font(afnt_arg) else FONT
    numy = floor(float(ny_arg)) if isfloat(ny_arg) else 20
    str_list = list(astr_arg)
    bgpath = bg_arg

    try:
        return txt2aa(txt, fontpath, fontsize, color, aa_font, numy, str_list, bgpath)
    except:
        return ""


@server.route("/txt2aa/img")
def get_txt2aa_img() -> Response:
    txt_arg = request.args.get("txt", "")
    fnt_arg = request.args.get("fnt", "")
    fs_arg = request.args.get("fs", "")
    clr_arg = request.args.get("clr", "black")
    afnt_arg = request.args.get("afnt", "")
    aclr_arg = request.args.get("aclr", "black")
    ny_arg = request.args.get("ny", "")
    exp_arg = request.args.get("exp", "")
    astr_arg = request.args.get("astr", STRS)
    bg_arg = request.args.get("bg", "")

    txt = txt_arg
    fontpath = fnt_arg if is_valid_font(fnt_arg) else FONT
    fontsize = floor(float(fs_arg)) if isfloat(fs_arg) else 200
    color = clr_arg
    aa_font = afnt_arg if is_valid_font(afnt_arg) else FONT
    aa_color = aclr_arg
    numy = floor(float(ny_arg)) if isfloat(ny_arg) else 20
    exp = float(exp_arg) if isfloat(exp_arg) else 1.0
    str_list = list(astr_arg)
    bgpath = bg_arg

    try:
        img = txt2aa_img(txt, fontpath, fontsize, color, aa_font, aa_color, numy, exp, str_list, bgpath)
    except:
        img = EMPTY_IMG

    img_io = BytesIO()
    img.save(img_io, "png")
    img_io.seek(0)

    return make_response(send_file(img_io, mimetype="image/png"))
