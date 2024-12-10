from flask import Blueprint, request, jsonify
from models import db, BudgetCategory
import uuid

category_bp = Blueprint('budget_categories', __name__)