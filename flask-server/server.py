from flask import Flask, request, jsonify
from flask_mail import Mail, Message
import random
import string
import os
from datetime import datetime, timedelta
from flask_cors import CORS
from routes import register_blueprints

from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from config import Config

# Initialize extensions
db = SQLAlchemy()
mail = Mail()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    
    # Initialize Flask extensions
    db.init_app(app)
    mail.init_app(app)
    
    register_blueprints(app)
    
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)