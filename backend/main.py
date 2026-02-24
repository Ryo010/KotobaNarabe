import random

from backend.hiragana import Hiragana
from backend.katakana import Katakana
from backend.kanji import Kanji


class Main:
    def __init__(self):
        self.hiragana = Hiragana()
        self.katakana = Katakana()
        self.kanji = Kanji()

    def question_maker_kana(self, kana_choice: str, choices: list, total_questions: int) -> list:
        questions = []
        if kana_choice.casefold() == "hiragana":
            random_characters = self.hiragana.get_random_character_jp(
                choices, total_questions)
            for character in random_characters:
                answer = self.hiragana.get_jp_character_info(character)
                options = [answer]
                options.extend(self.hiragana.get_random_character_romaji())
                questions.append({
                    "character": character,
                    "answer": answer,
                    "options": random.sample(options, 4)
                })
            return questions
        elif kana_choice.casefold() == "katakana":
            random_characters = self.katakana.get_random_character_jp(
                choices, total_questions)
            for character in random_characters:
                answer = self.katakana.get_jp_character_info(character)
                options = [answer]
                options.extend(self.katakana.get_random_character_romaji())
                questions.append({
                    "character": character,
                    "answer": answer,
                    "options": random.sample(options, 4)
                })
            return questions
        elif kana_choice.casefold() == "both":
            random_characters_hiragana = self.hiragana.get_random_character_jp(
                choices, total_questions)
            random_characters_katakana = self.katakana.get_random_character_jp(
                choices, total_questions)
            list_of_possible_questions = []

            for character in random_characters_hiragana:
                answer = self.hiragana.get_jp_character_info(character)
                options = [answer]
                options.extend(self.hiragana.get_random_character_romaji())
                list_of_possible_questions.append({
                    "character": character,
                    "answer": answer,
                    "options": random.sample(options, 4)
                })

            for character in random_characters_katakana:
                answer = self.katakana.get_jp_character_info(character)
                options = [answer]
                options.extend(self.katakana.get_random_character_romaji())
                list_of_possible_questions.append({
                    "character": character,
                    "answer": answer,
                    "options": random.sample(options, 4)
                })

            questions = random.sample(
                list_of_possible_questions, total_questions)

            return questions

        else:
            print(
                "Invalid choice provided. Please select either 'Hiragana' or 'Katakana'.")
            exit(1)

        return questions

    def question_maker_kanji(self, total_questions: int) -> list:
        questions = []
        random_kanji = self.kanji.random_kanji(total_questions)
        for kanji in random_kanji:
            answer = self.kanji.get_kanji_meaning(kanji)
            options = [answer]
            options.extend(self.kanji.random_kanji_meaning())
            questions.append({
                "character": kanji,
                "answer": answer,
                "options": random.sample(options, 4)
            })
        return questions
