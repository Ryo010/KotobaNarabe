import random
from sqlalchemy import func
from collections import defaultdict

from .models import Kana


class Main:
    def generate_kana_quiz(self, db, category: str, script_choice: list, num_questions: int):

        query = db.query(Kana)

        # Filter by script type
        if category != "both":
            query = query.filter(Kana.category == category)

        # Filter by category
        if script_choice:
            query = query.filter(Kana.script_type.in_(script_choice))

        # Pick random questions
        questions = (
            query.order_by(func.random())
            .limit(num_questions)
            .all()
        )

        quiz = []

        for q in questions:

            distractors = (
                db.query(Kana.romaji)
                .filter(
                    Kana.id != q.id,
                    Kana.category == q.category
                )
                .order_by(
                    (Kana.romaji_base == q.romaji_base).desc(),
                    (Kana.kana_row == q.kana_row).desc(),
                    (Kana.vowel_group == q.vowel_group).desc(),
                    func.random()
                )
                .limit(3)
                .all()
            )

            options = [d[0] for d in distractors]
            options.append(q.romaji)

            random.shuffle(options)

            quiz.append({
                "character": q.character,
                "correct_answer": q.romaji,
                "options": options
            })

        return quiz

    def get_all_kana_resources(self, db):

        results = db.query(
            Kana.character,
            Kana.romaji,
            Kana.script_type,
            Kana.category
        ).order_by(
            Kana.id
        ).all()

        resources = defaultdict(lambda: defaultdict(list))

        for r in results:
            resources[r.category][r.script_type].append({
                "character": r.character,
                "romaji": r.romaji
            })

        return resources
