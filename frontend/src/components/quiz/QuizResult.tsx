import { useNavigate } from "react-router-dom";


const QuizResult = () => {
    const navigate = useNavigate();
    const score = parseInt(localStorage.getItem("quizScore") || "0", 10);
    const total = parseInt(localStorage.getItem("quizTotal") || "0", 10);

    const handleReset = () => {
        localStorage.removeItem("quizScore");
        localStorage.removeItem("quizTotal");
    }

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Score: {score} out of {total}</p>




      <button onClick={() => { handleReset(); navigate("/quiz"); }}>Retake Quiz</button>
      <button onClick={() => { handleReset(); navigate("/"); }}>Go Home</button>
    </div>
  )
}

export default QuizResult