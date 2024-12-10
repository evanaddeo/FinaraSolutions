from flask import Blueprint, request, jsonify
from models import db, User
import uuid

users_bp = Blueprint('users', __name__)

# Create a new user
@users_bp.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    # Validate required fields
    if not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Email and password are required'}), 400

    # Check if email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already registered'}), 400

    # Create new user instance
    user = User(
        email=data['email'],
        password_hash=data['password'],  # In a real app, hash this password
        first_name=data.get('first_name', ''),
        last_name=data.get('last_name', ''),
        state=data.get('state', ''),
    )
    
    db.session.add(user)
    db.session.commit()

    return jsonify({
        'message': 'User created successfully',
        'user_id': str(user.user_id)
    }), 201

# Get a user by ID
@users_bp.route('/api/users/<uuid:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    
    return jsonify({
        'user_id': str(user.user_id),
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'state': user.state,
        'created_at': user.created_at,
        'updated_at': user.updated_at
    })

# Update an existing user's information
@users_bp.route('/api/users/<uuid:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()

    # Optional fields, update only those that are provided
    user.first_name = data.get('first_name', user.first_name)
    user.last_name = data.get('last_name', user.last_name)
    user.state = data.get('state', user.state)
    
    # Here you should also handle password updates, but it's not recommended to store plain text passwords.
    if 'password' in data:
        user.password_hash = data['password']  # Remember to hash the password in production

    db.session.commit()

    return jsonify({'message': 'User updated successfully'})

# Delete a user
@users_bp.route('/api/users/<uuid:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    
    db.session.delete(user)
    db.session.commit()
    
    return jsonify({'message': 'User deleted successfully'}), 200

# Get all users (optional endpoint, for testing or admin use)
@users_bp.route('/api/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    users_data = [
        {
            'user_id': str(user.user_id),
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'state': user.state,
            'created_at': user.created_at,
            'updated_at': user.updated_at
        }
        for user in users
    ]
    return jsonify(users_data)

# Route to check if a user exists by email (optional)
@users_bp.route('/api/users/check-email', methods=['POST'])
def check_email():
    data = request.get_json()
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required'}), 400

    user = User.query.filter_by(email=email).first()

    if user:
        return jsonify({'message': 'Email already registered'}), 400
    return jsonify({'message': 'Email is available'}), 200
