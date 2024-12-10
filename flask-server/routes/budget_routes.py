from flask import Blueprint, request, jsonify
from models import db, Budget
import uuid

budget_bp = Blueprint('budgets', __name__)