from flask import Blueprint, jsonify, request, make_response
from backend.models import User
import jwt
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies, jwt_optional, config
)
session_routes = Blueprint('session', __name__)
# Same thing as login here, except we are only setting a new cookie
# for the access token.


@session_routes.route('/refresh', methods=['POST'])
@jwt_optional
def refresh():
    email = get_jwt_identity()
    if not email:
        return {}

    access_token = create_access_token(identity=email)
    response = User.query.filter_by(email=email).first()
    user = response.to_dict()
    resp = jsonify({'refresh': True, **user})
    set_access_cookies(resp, access_token)
    return resp, 200

@session_routes.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not email or not password:
        return jsonify({'login': False}), 401
    response = User.query.filter_by(email=email).first()
    user = response.to_dict()
    if not user:
        return jsonify({'message': 'No user found!'})
    if check_password_hash(response.password, password):
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)
        resp = jsonify({'login': True, **user})
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)
        return resp, 200
    return jsonify({"message": "failed"}), 401

@session_routes.route('/logout', methods=['POST'])
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200
