import {
  useAuth
} from "@clerk/clerk-react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";
import SignUp from "./pages/SignUp";
import SSOCallback from "./pages/SSOCallBack";
import ContinueSignUp from "./pages/ContSignUp";

function App() {
  const {isSignedIn, isLoaded} = useAuth();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={isSignedIn ? <Home /> : <Navigate to={"/login"} replace />} />
        <Route path="/login" element={!isSignedIn ? <Login /> : <Navigate to={"/"} replace />} />
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sso-callback" element={<SSOCallback />} />
        <Route path="/ContSignUp" element={<ContinueSignUp />} />
      </Routes>
    </>
  );
}

export default App;

