
export type ScriptType = "hiragana" | "katakana" | "both";
export type KanaSet = "seion" | "dakuon" | "handakuon" | "yoon";

export type SetType = KanaSet[];

export type Question = {
  character: string;
  answer: string;
  options: string[];
};

export type QuizRequest = {
  kana_choice: ScriptType;
  choices: KanaSet[];
  total_questions: number;
};

export type QuizProgress = {
  questions: Question[];
  currentIndex: number;
  score: number;
  selected: string | null;
};

export type kana = {
  character: string;
  romaji: string;
};

export type kanaChart = 
  {
    hiragana: {
      dakuon: kana[];
      handakuon: kana[];
      seion: kana[];
      yoon: kana[];
    };
    katakana: {
      dakuon: kana[];
      handakuon: kana[];
      seion: kana[];
      yoon: kana[];
    };
  }
