import os


import flask
from flask import request, jsonify
from flask_cors import CORS


from dotenv import load_dotenv

from backend.main import Main
load_dotenv()


def create_app():
    app = flask.Flask(__name__)
    CORS(app, supports_credentials=True, origins=["http://localhost:5173"])
    main = Main()

    @app.route('/')
    def index():
        return '<h1>Welcome to the Japanese Learning API!</h1>'

    @app.route('/generate-questions', methods=['POST'])
    def generate_questions():
        data = request.get_json()
        kana_choice = data.get('kana_choice', "hiragana")
        choices = data.get('choices', [])
        total_questions = data.get('total_questions', 10)

        questions = main.question_maker(kana_choice, choices, total_questions)
        return jsonify(questions)

    @app.route('/api/health')
    def health_check():
        return jsonify({"status": "ok"}), 200

    return app


if __name__ == '__main__':
    app = create_app()
    port = int(os.getenv('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)
