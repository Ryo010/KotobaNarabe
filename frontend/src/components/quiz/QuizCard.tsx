import { useNavigate } from "react-router-dom";
import type { Question } from "../../types/kana.types";

interface QuizCardProps {
  questions: Question[];
  currentQuestion: number;
  score: number;
  selected: string | null;
}

const QuizCard = ({ questions, currentQuestion, score, selected }: QuizCardProps) => {
  const navigate = useNavigate();


  const checkAnswer = (choice: string) => {
    if (choice === questions[currentQuestion].answer) {
      console.log("Correct!");
      currentQuestion++;
      score++;
      if (currentQuestion >= questions.length) {
        console.log("Quiz completed! Final score:", score);
        localStorage.setItem("quizScore", score.toString()); // Store score in localStorage
        localStorage.setItem("quizTotal", questions.length.toString()); // Store total questions in localStorage
        navigate("/quiz-results"); // Redirect to quiz results page
      }
    } else {
      console.log("Incorrect!");
      currentQuestion++;
      if (currentQuestion >= questions.length) {
        console.log("Quiz completed! Final score:", score);
      }
    }
  }


  return (
    <div>
        {questions.map((q, idx) => (
          <div key={currentQuestion}>
            <p>{q.character}</p>
            <>
              {q.options.map((choice: string, cidx: number) => (
                <button key={cidx} type="button" onClick={() => checkAnswer(choice)}>{choice}</button>
              ))}
            </>
          </div>
        ))}







    </div>
  )
}

export default QuizCard