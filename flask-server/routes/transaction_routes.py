from flask import Blueprint, request, jsonify
from models import db, Transaction
import uuid

transactions_bp = Blueprint('transactions', __name__)