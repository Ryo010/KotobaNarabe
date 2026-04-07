import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hover, setHover] = useState<boolean>(false);

  if (!isLoaded) return null;

  const handleEmailLogin = async () => {
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="login-title">Sign in</h1>

        <button className="google-button" onClick={handleGoogleLogin}>
          <svg xmlns="http://www.w3.org/2000/svg" className="goon" viewBox="0 0 640 640">
            <path fill="rgb(255,255,255)" d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
          </svg>
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailLogin();
          }}
          className="login-form"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? "サインイン" : "Sign in"}
          </button>

          <div className="divider2">
            <span>Don't have an account?</span>
          </div>

          <div className="createAccount">
            <Link to="/SignUp">Create Account</Link>
          </div>
        </form>

      </div>
    </div>
  );
}