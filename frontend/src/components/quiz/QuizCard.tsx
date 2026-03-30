import { useQuizState } from "../../store/Quiz";

const QuizCard = () => {
  const { quizData, currentQuestion, score, setCurrentPage, setCurrentQuestion, setScore } = useQuizState();

  const checkAnswer = (choice: string) => {
    if (choice === quizData[currentQuestion].correct_answer) {
      console.log("Correct!");
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);
      if (currentQuestion >= quizData.length - 1) {
        console.log("Quiz completed! Final score:", score);
        setCurrentPage(2);
      }
    } else {
      console.log("Incorrect!");
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion >= quizData.length) {
        console.log("Quiz completed! Final score:", score);
      }
    }
  }


  return (
    <div>
        {quizData.map((q, idx) => (
          <div key={idx}>
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