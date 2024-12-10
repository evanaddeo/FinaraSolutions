from flask import Blueprint, request, jsonify
from models import db, SavedLink
import uuid

links_bp = Blueprint('saved_links', __name__)