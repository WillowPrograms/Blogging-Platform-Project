from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Config
    app.config.from_object("app.config.Config")

    # Register routes
    from app.routes import main
    app.register_blueprint(main)

    return app
