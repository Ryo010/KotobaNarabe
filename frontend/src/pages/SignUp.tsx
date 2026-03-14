import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function SignUp() {

  const { signUp, setActive, isLoaded } = useSignUp();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  

  if (!isLoaded) return null;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      await signUp.create({
        username,
        emailAddress: email,
        password
      });

      // send verification code
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code"
      });

      setVerifying(true);

    } catch (err) {
      console.error(err);
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const result = await signUp.attemptEmailAddressVerification({
        code
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }

    } catch (err) {
      console.error(err);
    }
  };

   const handleGoogleLogin = async () => {
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (verifying) {
    return (
      <div className="login-page">

        <div className="login-card">

          <h1 className="login-title">Verify Email</h1>

          <p>Enter the verification code sent to your email</p>

          <form onSubmit={handleVerification} className="login-form">

            <input
              type="text"
              placeholder="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button className="login-button">
              Verify
            </button>

          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="login-page">

       <div className="welcomeLogin">
        <p className="logGreet">Welcome to KotobaNarabe!</p>
        <p className="logStart">Start your journey learning japanese today!</p>
       </div>

      <div className="login-card">

        <h1 className="login-title">Create Account</h1>

          <button className="google-button" onClick={handleGoogleLogin}>
          <svg xmlns="http://www.w3.org/2000/svg" className="goon" viewBox="0 0 640 640">
            <path fill="rgb(255,255,255)" d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
          </svg>
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <form onSubmit={handleSignup} className="login-form">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          {/* Clerk CAPTCHA */}
          <div id="clerk-captcha"></div>

          <button className="login-button">
            Create Account
          </button>

          <div className="divider2">
            <span>Already have an account?</span>
          </div>

          <div className="createAccount">
            <Link to="/login">Sign in</Link>
          </div>

        </form>

      </div>

    </div>
  );
}