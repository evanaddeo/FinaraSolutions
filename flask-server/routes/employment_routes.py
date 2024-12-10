from flask import Blueprint, request, jsonify
from models import db, EmploymentInfo
import uuid

employment_bp = Blueprint('employment_info', __name__)