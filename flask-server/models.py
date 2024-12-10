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

class BudgetCategory(db.Model):
    __tablename__ = 'budget_categories'
    
    category_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    is_system_category = db.Column(db.Boolean, default=False)
    
    # Relationships
    budgets = db.relationship('Budget', backref='category')
    transactions = db.relationship('Transaction', backref='category')

class Budget(db.Model):
    __tablename__ = 'budgets'
    
    budget_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    category_id = db.Column(UUID(as_uuid=True), db.ForeignKey('budget_categories.category_id'), nullable=False)
    amount = db.Column(db.Numeric(12, 2), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Transaction(db.Model):
    __tablename__ = 'transactions'
    
    transaction_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    category_id = db.Column(UUID(as_uuid=True), db.ForeignKey('budget_categories.category_id'), nullable=False)
    amount = db.Column(db.Numeric(12, 2), nullable=False)
    transaction_type = db.Column(db.String(50), nullable=False)  # 'expense', 'income', 'investment', 'savings'
    description = db.Column(db.Text)
    transaction_date = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class SavedLink(db.Model):
    __tablename__ = 'saved_links'
    
    link_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    url = db.Column(db.Text, nullable=False)
    title = db.Column(db.String(255))
    description = db.Column(db.Text)
    category = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class InvestmentPreference(db.Model):
    __tablename__ = 'investment_preferences'
    
    preference_id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    risk_tolerance = db.Column(db.String(50))  # 'Conservative', 'Moderate', 'Aggressive'
    preferred_sectors = db.Column(db.ARRAY(db.String), nullable=True)
    investment_goals = db.Column(db.Text)
    target_retirement_year = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
