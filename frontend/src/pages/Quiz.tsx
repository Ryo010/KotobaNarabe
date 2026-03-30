import { useQuizState } from "../store/Quiz";
import QuizSetup from "../components/quiz/QuizSetup";
import NavigationBar from "../components/NavigationBar";
import QuizCard from "../components/quiz/QuizCard";
import QuizResult from "../components/quiz/QuizResult";

const Quiz = () => {

    const { currentPage } = useQuizState();

    if (currentPage === 1) {
        return (
            <div>
                <NavigationBar />
                <QuizCard />
            </div>
        );
    }

    if (currentPage === 2){
        return (
            <div>
                <NavigationBar />
                <QuizResult />
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