import json
import os
import random


class Katakana:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    json_array_url = os.path.join(BASE_DIR, "data", "katakana-array.json")
    json_english_url = os.path.join(BASE_DIR, "data", "katakana-english.json")

    def get_random_character_jp(self, choices: list, total_questions: int) -> list:
        try:
            with open(self.json_array_url, "r") as f:
                config = json.load(f)

                total_characters = []

                for choice in choices:
                    if choice.title() in config:
                        total_characters.extend(config[choice.title()])

                return random.choices(total_characters, k=total_questions)
        except FileNotFoundError:
            print(
                "katakana-array.json not found. Please create the file with the necessary configuration.")
            exit(1)

    def get_random_character_romaji(self) -> list:
        try:
            with open(self.json_english_url, "r") as f:
                config = json.load(f)
                total_characters = []

                for key in config:
                    total_characters.append(config[key])

                return random.choices(total_characters, k=3)
        except FileNotFoundError:
            print(
                "katakana-english.json not found. Please create the file with the necessary configuration.")
            exit(1)

    def get_jp_character_info(self, character: str) -> str:
        try:
            with open(self.json_english_url, "r") as f:
                config = json.load(f)

                return config.get(character, "Character not found in the configuration.")
        except FileNotFoundError:
            print(
                "katakana-english.json not found. Please create the file with the necessary configuration.")
            exit(1)
