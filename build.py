#!/usr/bin/env python3
"""
Regenerate index.html (and assets.js) from source files.

Run this after editing app.js, or after adding/replacing an image in assets/
and updating the ASSET_FILES map below.

Usage:  python3 build.py
"""
import base64
import mimetypes
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

ASSET_FILES = {
    "dzSkillsCover": "assets/dz-skills-cover.jpg",
    "estinHubCover": "assets/estin-security-hub-cover.jpg",
    "itcCtf2026": "assets/itc-ctf-2026.jpg",
    "algerieTelecom": "assets/algerie-telecom.png",
    "scanevent": "assets/scanevent.png",
    "ldcFantasyLogin": "assets/ldc-fantasy-login.jpeg",
    "ldcFantasyApp": "assets/ldc-fantasy-app.jpeg",
}


def build_assets_js():
    lines = [
        "/* =========================================================================",
        "   IMAGE ASSETS — auto-generated (base64) by build.py so the site never",
        "   depends on a separate assets/ folder being uploaded correctly, and works",
        "   even opened directly as a local file. Source images live in assets/.",
        "   To change an image: replace the file in assets/ (same name) and re-run",
        "   `python3 build.py`, or add a new entry to ASSET_FILES in build.py.",
        "   ========================================================================= */",
        "const IMG = {",
    ]
    for key, rel_path in ASSET_FILES.items():
        path = os.path.join(ROOT, rel_path)
        mime = mimetypes.guess_type(path)[0]
        with open(path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("ascii")
        lines.append(f'  {key}: "data:{mime};base64,{b64}",')
    lines.append("};")

    out_path = os.path.join(ROOT, "assets.js")
    with open(out_path, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"wrote {out_path} ({os.path.getsize(out_path):,} bytes)")


def build_index_html():
    with open(os.path.join(ROOT, "app.js")) as f:
        app_js = f.read()
    with open(os.path.join(ROOT, "index.template.html")) as f:
        template = f.read()

    out = template.replace("__APP_JS__", app_js)

    out_path = os.path.join(ROOT, "index.html")
    with open(out_path, "w") as f:
        f.write(out)
    print(f"wrote {out_path} ({os.path.getsize(out_path):,} bytes)")


if __name__ == "__main__":
    build_assets_js()
    build_index_html()
