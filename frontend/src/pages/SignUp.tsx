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

      <div className="login-card">

        <h1 className="login-title">Create Account</h1>

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