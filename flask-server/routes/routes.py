# routes.py
from flask import Blueprint, jsonify, request
from models import db, User, EmploymentInfo
from werkzeug.security import generate_password_hash, check_password_hash

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/')  # Root route
def home():
    return "Hello, Flask is running!"

@routes_bp.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    # Check if user already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already registered'}), 400
    
    # Create new user
    user = User(
        email=data['email'],
        password_hash=generate_password_hash(data['password']),
        first_name=data.get('first_name'),
        last_name=data.get('last_name'),
        state=data.get('state')
    )
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({
        'message': 'User created successfully',
        'user_id': str(user.user_id)
    }), 201

@routes_bp.route('/api/users/<uuid:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({
        'user_id': str(user.user_id),
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'state': user.state
    })

@routes_bp.route('/api/users/<uuid:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    
    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)
    user.state = data.get('state', user.state)
    
    db.session.commit()
    
    return jsonify({'message': 'User updated successfully'})

@routes_bp.route('/api/users/<uuid:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({'message': 'User deleted successfully'})

@routes_bp.route('/api/users/<uuid:user_id>/employment', methods=['POST'])
def create_employment_info(user_id):
    data = request.get_json()
    
    employment_info = EmploymentInfo(
        user_id=user_id,
        job_title=data.get('job_title'),
        company=data.get('company'),
        industry=data.get('industry'),
        annual_income=data.get('annual_income'),
        employment_status=data.get('employment_status'),
        looking_for_job=data.get('looking_for_job', False)
    )
    
    db.session.add(employment_info)
    db.session.commit()
    
    return jsonify({'message': 'Employment info created successfully'}), 201