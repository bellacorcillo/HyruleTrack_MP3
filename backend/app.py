from flask import Flask, jsonify, request
from pymongo import MongoClient
from pymongo.errors import PyMongoError
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Grab database URI from environment variables
DATABASE_URI = os.getenv("MONGO_DB_URI")

# Connect to MongoDB
client = MongoClient(DATABASE_URI)
db = client['my_database']

# Define the user model
class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    @staticmethod
    def find_by_email(email):
        user = db.users.find_one({'email': email})
        if user:
            return User(user['name'], user['email'], user['password'])
        else:
            return None

    def check_password(self, password):
        return self.password == password

# Define the user registration API route
@app.route('/users', methods=['POST'])
def register_user():
    # Get the user data from the request body
    user_data = request.get_json()

    # Create a new user in the database
    user = User(user_data['name'], user_data['email'], user_data['password'])
    db.users.insert_one(user.__dict__)

    # Return a success response
    return jsonify({
        'message': 'User successfully registered!'
    })

# Define the user login API route
@app.route('/login', methods=['POST'])
def login_user():
    # Get the user data from the request body
    user_data = request.get_json()

    # Authenticate the user
    user = User.find_by_email(user_data['email'])
    if user and user.check_password(user_data['password']):
        # User successfully logged in!
        return jsonify({
            'message': 'User successfully logged in!'
        })
    else:
        # Handle invalid login credentials
        return jsonify({
            'message': 'Invalid login credentials'
        }), 401

if __name__ == '__main__':
    app.run(debug=True)