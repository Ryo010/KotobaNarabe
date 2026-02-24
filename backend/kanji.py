import os
import json
import random


class Kanji:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

    def random_kanji(self, total_questions: int):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'data', 'kanji-array-n5.json'), 'r') as f:
                kanji_data = json.load(f)
                return random.sample(kanji_data, total_questions)
        except FileNotFoundError:
            return "Kanji data file not found."

    def get_kanji_meaning(self, kanji):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'data', 'kanji-english-n5.json'), 'r') as f:
                kanji_info_data = json.load(f)
            return kanji_info_data.get(kanji, "Kanji not found in the configuration.")
        except FileNotFoundError:
            return "Kanji meaning file not found."

    def get_kanji_from_level(self, level):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'data', f'kanji-array-n{level}.json'), 'r') as f:
                kanji_data = json.load(f)
                return kanji_data
        except FileNotFoundError:
            return "Kanji data file not found."

    def random_kanji_meaning(self):
        try:
            with open(os.path.join(os.path.dirname(__file__), 'data', f'kanji-english-n5.json'), 'r') as f:
                kanji_info_data = json.load(f)
                return random.sample(list(kanji_info_data.values()), k=3)
        except FileNotFoundError:
            return "Kanji info file not found."
