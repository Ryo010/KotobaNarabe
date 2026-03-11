import os
import flask
from flask import request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

from . import models
from backend.api.db import engine, Base, SessionLocal
from backend.api.main import Main
load_dotenv()


def create_app():
    app = flask.Flask(__name__)
    CORS(app, supports_credentials=True, origins=["http://localhost:5173"])
    main = Main()
    db = SessionLocal()

    @app.route('/')
    def index():
        return '<h1>Welcome to the Japanese Learning API!</h1>'

    @app.route('/generate-questions-kana', methods=['POST'])
    def generate_questions():
        data = request.get_json()
        kana_choice = data.get('kana_choice', "hiragana")
        choices = data.get('choices', [])
        total_questions = data.get('total_questions', 10)

        questions = main.generate_kana_quiz(
            db, kana_choice, choices, total_questions)
        return jsonify(questions)

    @app.route('/kana-chart', methods=['GET'])
    def kana_chart():
        resources = main.get_all_kana_resources(db)
        return jsonify(resources)

    @app.route('/api/health')
    def health_check():
        return jsonify({"status": "ok"}), 200

    try:
        Base.metadata.create_all(bind=engine)
        print("Database tables created successfully.")
    except Exception as e:
        print(f"Error creating database tables: {e}")

    return app


if __name__ == '__main__':
    app = create_app()
    port = int(os.getenv('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
