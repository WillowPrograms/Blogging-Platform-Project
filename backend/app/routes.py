from flask import Blueprint, jsonify
import os
import platform
import time
from datetime import datetime, timezone

main = Blueprint("main", __name__)

_PROCESS_START_TS = time.time()

@main.route("/health", methods=["GET"])
def health_check():
    payload = {
        "status": "ok",
        "message": "This API is running smoothly :)",
    }
    return jsonify(payload), 200
