import { useQuizState } from "../store/Quiz";
import QuizSetup from "../components/quiz/QuizSetup";
import NavigationBar from "../components/NavigationBar";

const Quiz = () => {

    const { currentPage } = useQuizState();

    if (currentPage === 1) {
        return (
            <div>
                Quiz
            </div>
        );
    }

    if (currentPage === 2){
        return (
            <div>
                QuizResult
            </div>
        );
    }

  return (
    <div>
        <NavigationBar />
        <QuizSetup />
    </div>
  )
}

export default Quiz