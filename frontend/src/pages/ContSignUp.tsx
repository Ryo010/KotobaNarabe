import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function ContinueSignUp() {

  const { signUp, setActive, isLoaded } = useSignUp();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  if (!isLoaded) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const result = await signUp.update({
        username
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="login-title">Choose a Username</h1>

        <form onSubmit={handleSubmit} className="login-form">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className="login-button">
            Continue
          </button>

        </form>

      </div>

    </div>
  );
}