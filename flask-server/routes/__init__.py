# routes/__init__.py
from routes import routes_bp
# from .budgets_routes import budgets_bp
# from .purchases_routes import purchases_bp

def register_blueprints(app):
    app.register_blueprint(routes_bp)
