import { UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigator = useNavigate();


  const handleGoToQuiz = () => {
    navigator("/quiz");
  }

  // const handleGoToResources = () => {
  //   navigator("/resources");
  // }

  // const handleGoToFlashcards = () => {
  //   navigator("/flashcards");
  // }

  return (
    <div>
        <div style={{ display: "flex", justifyContent: "flex-end", padding: 16 }}>
            <UserButton afterSwitchSessionUrl="/" />
        </div>

        <div >
          <button onClick={handleGoToQuiz}>Go to Quiz</button>
            {/* <LearningResources />
            <Flashcards /> */}
        </div>
    </div>

  )
}

export default Home;