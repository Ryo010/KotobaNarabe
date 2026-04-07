import { useState } from "react";
import { useQuizState } from "../../store/Quiz";
import "../../styles/quiz.css";

const QuizCard = () => {
  const {
    quizData,
    currentQuestion,
    score,
    setCurrentPage,
    setCurrentQuestion,
    setScore
  } = useQuizState();

  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  // 🛑 Safety
  if (!quizData || !quizData[currentQuestion]) {
    return <div>Loading...</div>;
  }

  const currentQ = quizData[currentQuestion];

  const handleAnswer = (choice: string) => {
    if (answered) return;

    setSelected(choice);
    setAnswered(true);

    if (choice === currentQ.correct_answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion >= quizData.length) {
      setCurrentPage(2);
    } else {
      setCurrentQuestion(nextQuestion);
    }

    // reset for next question
    setSelected(null);
    setAnswered(false);
  };

  return (
    <div className="quizCardContainer">
      <div className="quizCard">

        {/* Progress */}
        <div className="quizProgress">
          Question {currentQuestion + 1} / {quizData.length}
        </div>

        {/* Question */}
        <div className="quizQuestContainer">
          <p className="quizQuestion">{currentQ.character}</p>

          <div className="quizOptions">
            {currentQ.options.map((choice: string, idx: number) => {
              const isCorrect = choice === currentQ.correct_answer;
              const isSelected = selected === choice;

              let className = "quizOption";

              if (answered) {
                if (isCorrect) className += " correct";
                else if (isSelected) className += " wrong";
              }

              return (
                <button
                  key={idx}
                  className={className}
                  onClick={() => handleAnswer(choice)}
                  disabled={answered}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            className="nextButton"
            onClick={handleNext}
            disabled={!answered}
          >
            {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default QuizCard;