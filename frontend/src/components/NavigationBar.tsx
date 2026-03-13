import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import CustomUserButton from "./UserButton";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { en: "Home", jp: "ホーム", path: "/" },
    { en: "Resources", jp: "リソース", path: "/Resources" },
    { en: "Quiz", jp: "クイズ", path: "/Quiz" },
    { en: "Flashcards", jp: "カード", path: "/Flashcards" },
  ];

  return (
    <div>

      <div className="topBar">
        <div className="title">

          <p className="name namejp" onClick={() => navigate("/")}>
            言葉並べ
          </p>

          <p className="name nameEn" onClick={() => navigate("/")}>
            KotobaNarabe
          </p>

          <div className="pfpMenu">

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

      <div className={`dropDownMenu ${menuOpen ? "open" : ""}`}>

        {menuItems.map((item, index) => {
          const [hover, setHover] = useState(false);

          return (
            <div key={index}>
              <button
                id="dpBtn"
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {hover ? item.jp : item.en}
              </button>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default NavigationBar;