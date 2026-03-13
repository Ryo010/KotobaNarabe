import {
  useAuth
} from "@clerk/clerk-react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import QuizSetup from "./components/quiz/QuizSetup";
import QuizResult from "./components/quiz/QuizResult";
import Resources from "./pages/Resources";
import SignUp from "./pages/SignUp";

function App() {
  const {isSignedIn, isLoaded} = useAuth();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={isSignedIn ? <Home /> : <Navigate to={"/login"} replace />} />
        <Route path="/login" element={!isSignedIn ? <Login /> : <Navigate to={"/"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/quiz" element={<QuizSetup />} />
        <Route path="/quiz-results" element={<QuizResult />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;

