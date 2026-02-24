import React from "react";

const useQuiz = () => {
  const [kanaChoice, setKanaChoice] = React.useState<"hiragana" | "katakana" | "both">("hiragana");
  const [choices, setChoices] = React.useState<string[]>([]);
  const [totalQuestions, setTotalQuestions] = React.useState<number>(10);
  const [quizData, setQuizData] = React.useState<any>(null);



  return {    
    kanaChoice,
    setKanaChoice,
    choices,
    setChoices,
    totalQuestions,
    setTotalQuestions,
    quizData,
    setQuizData,
  };
}

export default useQuiz;