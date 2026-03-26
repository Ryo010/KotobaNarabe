import { useQuizState } from "../../store/Quiz";

interface QuizCardProps {
  currentQuestion: number;
  score: number;
  selected: string | null;
}

const QuizCard = ({ currentQuestion, score, selected }: QuizCardProps) => {
  const { quizData, setCurrentPage } = useQuizState();

  const checkAnswer = (choice: string) => {
    if (choice === quizData[currentQuestion].answer) {
      console.log("Correct!");
      currentQuestion++;
      score++;
      if (currentQuestion >= quizData.length) {
        console.log("Quiz completed! Final score:", score);
        localStorage.setItem("quizScore", score.toString()); // Store score in localStorage
        localStorage.setItem("quizTotal", quizData.length.toString()); // Store total questions in localStorage
        setCurrentPage(2); // Redirect to quiz results page
      }
    } else {
      console.log("Incorrect!");
      currentQuestion++;
      if (currentQuestion >= quizData.length) {
        console.log("Quiz completed! Final score:", score);
      }
    }
  }


  return (
    <div>
        {quizData.map((q, idx) => (
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