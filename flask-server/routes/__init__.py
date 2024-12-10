from flask import Blueprint

from routes.budget_routes import budget_bp
from routes.category_routes import category_bp
from routes.employment_routes import employment_bp
from routes.investment_routes import investments_bp
from routes.link_routes import links_bp
from routes.transaction_routes import transactions_bp
from routes.user_routes import users_bp

def register_blueprints(app):
    app.register_blueprint(budget_bp)
    app.register_blueprint(category_bp)
    app.register_blueprint(employment_bp)
    app.register_blueprint(investments_bp)
    app.register_blueprint(links_bp)
    app.register_blueprint(transactions_bp)
    app.register_blueprint(users_bp)