from sqlalchemy import Column, Integer, String, Text

from .db import Base


class Kana(Base):
    __tablename__ = "kana"

    id = Column(Integer, primary_key=True)
    character = Column(Text)
    romaji = Column(Text)
    script_type = Column(Text)
    category = Column(Text)
    kana_row = Column(Text)
    vowel_group = Column(Text)
    romaji_base = Column(Text)
