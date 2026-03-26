import { fetchQuiz } from "../../services/quizApi";
import type { KanaSet } from "../../types/kana.types";
import QuizCard from "./QuizCard";
import { useQuizState } from "../../store/Quiz";

const QuizSetup = () => {
  const { quizData , setCurrentPage, setQuizData } = useQuizState();
  
  const handleStartQuiz = async () => {
    const kana_choice = document.forms[0].elements.namedItem("kana_choice") as HTMLSelectElement;
    const total_questions = document.getElementById("total_questions") as HTMLInputElement;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Map their values to an array
    const values = Array.from(checkboxes).map(cb => (cb as HTMLInputElement).value);

    // Display the result
    console.log("Selected choices:", values);
    console.log("Kana choice:", kana_choice.value);
    console.log("Total questions:", total_questions.value);

    const quiz = await fetchQuiz({
      kana_choice: kana_choice.value as "hiragana" | "katakana" | "both",
      choices: values as KanaSet[],
      total_questions: parseInt(total_questions.value),
    });
    setQuizData(quiz);
    console.log("Quiz data:", quizData);
    setCurrentPage(1);
  }

  return (
    <div>
      <h1>Quiz Setup</h1>

      <form onSubmit={(e) => { e.preventDefault(); handleStartQuiz(); }}>
        <div>
          <label htmlFor="kana_choice">Kana Type:</label>
          <select id="kana_choice" name="kana_choice">
            <option value="hiragana">Hiragana</option>
            <option value="katakana">Katakana</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div>
          <label>Choices:</label>
          <div>
            <input type="checkbox" id="seion" value="seion" defaultChecked />
            <label htmlFor="seion">Seion</label>
          </div>
          <div>
            <input type="checkbox" id="dakuon" value="dakuon" />
            <label htmlFor="dakuon">Dakuon</label>
          </div>
          <div>
            <input type="checkbox" id="handakuon" value="handakuon" />
            <label htmlFor="handakuon">Handakuon</label>
          </div>
          <div>
            <input type="checkbox" id="yoon" value="yoon" />
            <label htmlFor="yoon">Yoon</label>
          </div>
        </div>

        <div>
          <label htmlFor="total_questions">Total Questions:</label>
          <input type="number" defaultValue={10} min={5} max={25} id="total_questions" />
        </div>

        <button type="submit">Start Quiz</button>
      </form>






    </div>
  )
}

export default QuizSetup;