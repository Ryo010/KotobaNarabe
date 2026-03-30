import { useNavigate } from "react-router-dom";
import { useQuizState } from "../../store/Quiz";


const QuizResult = () => {
    const navigate = useNavigate();
    const { score, currentQuestion, setCurrentPage, setScore } = useQuizState();

    const handleReset = () => {
        setScore(0);
        setCurrentPage(0);
    }

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Score: {score} out of {currentQuestion}</p>




      <button onClick={() => { handleReset(); navigate("/quiz"); }}>Retake Quiz</button>
      <button onClick={() => { handleReset(); navigate("/"); }}>Go Home</button>
    </div>
  )
}

export default QuizResult