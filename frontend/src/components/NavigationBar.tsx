import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import CustomUserButton from "./UserButton";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { en: "Home", jp: "ホーム", path: "/" },
    { en: "Resources", jp: "学習リソース", path: "/Resources" },
    { en: "Quiz", jp: "クイズ", path: "/Quiz" },
    { en: "Flashcards", jp: "カード", path: "/Flashcards" },
  ];

  return (
    <div>
      <div className="topBar">
        <div className="title">

          {/* Logo */}
          <div className="name">
            <p onClick={() => navigate("/")}>
              言葉並べ KotobaNarabe
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="desktopNav">
            <div className="navButtons">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="navBtn"
                onClick={() => navigate(item.path)}
              >
                {item.jp}
              </button>
            ))}
            </div>

          

          </div>

           

          {/* Right side */}
          <div className="pfpMenu">

            {/* Mobile menu button */}
            <button
              className="menuBtn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fa fa-bars fa-3x" />
            </button>

             <div className="profileButton">
              <CustomUserButton />
            </div>

          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`dropDownMenu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              className="dpBtn"
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
            >
              <span className="englishText">{item.en}</span>
              <span className="japaneseText">{item.jp}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;