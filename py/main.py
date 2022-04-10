from argparse import ArgumentParser

from waitress import serve

from server import server


def main() -> None:
    parser = ArgumentParser()
    parser.add_argument("-p", type=int)
    args = parser.parse_args()
    port = int(args.p) if args.p else 33333
    serve(server, host="127.0.0.1", port=port, threads=8)


if __name__ == "__main__":
    main()
