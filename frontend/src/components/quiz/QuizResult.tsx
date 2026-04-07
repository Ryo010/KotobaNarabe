import { useNavigate } from "react-router-dom";
import { useQuizState } from "../../store/Quiz";
import "../../styles/quiz.css";


const QuizResult = () => {
    const navigate = useNavigate();
    const { score, currentQuestion, setCurrentPage, setScore, setCurrentQuestion } = useQuizState();

    const handleReset = () => {
        setScore(0);
        setCurrentPage(0);
        setCurrentQuestion(0);
    }

  return (
    <div className="resultPage">
      <div className="resultContainer">
        <h2 className="resultTxt">Quiz Results</h2>
        <p className="score">Score: {score} out of {currentQuestion + 1}</p>
        <button className="retake" onClick={() => { handleReset(); navigate("/quiz"); }}>Retake Quiz</button>
        <button className="home" onClick={() => { handleReset(); navigate("/"); }}>Go Home</button>
      </div>
    </div>
  )
}

export default QuizResult