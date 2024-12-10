from flask import Blueprint, request, jsonify
from models import db, InvestmentPreference
import uuid

investments_bp = Blueprint('inbvestment_preferences', __name__)