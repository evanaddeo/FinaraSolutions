from datetime import datetime
import uuid
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    user_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    state = db.Column(db.String(2))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    employment_info = db.relationship('EmploymentInfo', backref='user', uselist=False)
    budgets = db.relationship('Budget', backref='user')
    transactions = db.relationship('Transaction', backref='user')
    saved_links = db.relationship('SavedLink', backref='user')
    investment_preferences = db.relationship('InvestmentPreference', backref='user', uselist=False)

class EmploymentInfo(db.Model):
    __tablename__ = 'employment_info'
    
    employment_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    job_title = db.Column(db.String(255))
    company = db.Column(db.String(255))
    industry = db.Column(db.String(255))
    annual_income = db.Column(db.Numeric(12, 2))
    employment_status = db.Column(db.String(50))
    looking_for_job = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)



# etc with other models