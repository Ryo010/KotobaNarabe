import {
  useAuth
} from "@clerk/clerk-react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizSetup from "./components/quiz/QuizSetup";
import QuizResult from "./components/quiz/QuizResult";

function App() {
  const {isSignedIn, isLoaded} = useAuth();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={isSignedIn ? <Home /> : <Navigate to={"/login"} replace />} />
        <Route path="/login" element={!isSignedIn ? <Login /> : <Navigate to={"/"} replace />} />
        <Route path="/quiz" element={<QuizSetup />} />
        <Route path="/quiz-results" element={<QuizResult />} />
      </Routes>
    </>
  );
}

export default App;

