from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
import sys


root = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
port = int(sys.argv[2] if len(sys.argv) > 2 else os.environ.get("PORT", "5173"))
host = sys.argv[3] if len(sys.argv) > 3 else os.environ.get("HOST", "127.0.0.1")


class FallbackHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        clean = path.split("?", 1)[0].split("#", 1)[0]
        target = root / clean.lstrip("/")
        if target.exists():
            return str(target)
        return str(root / "index.html")

    def log_message(self, format, *args):
        print("%s - %s" % (self.address_string(), format % args))


os.chdir(root)
server = ThreadingHTTPServer((host, port), FallbackHandler)
print(f"Serving {root} at http://{host}:{port}/he")
server.serve_forever()
