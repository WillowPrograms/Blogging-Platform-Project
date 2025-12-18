from flask import Blueprint, jsonify

main = Blueprint("main", __name__)

@main.route("/health", methods=["GET"])
def health_check():
    payload = {
        "status": "ok",
        "message": "This API is running smoothly :)",
    }
    return jsonify(payload), 200
