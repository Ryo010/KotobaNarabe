import '../styles/home.css'
import { useNavigate } from 'react-router';
import NavigationBar from '../components/NavigationBar'

function Home() {


  const navigate = useNavigate();


  return (
  <div className="container">

    <NavigationBar/> 

    <div className="welcome">
      <p className="welcomeTextJp">ようこそ！</p>
      <p className="welcomeTextEn">Welcome to KotobaNarabe!</p>
      <p className="begin">Begin practicing your Japanese vocabulary!</p>
    </div>      

    <div className="dropDownMenu" id="dropDownMenu">

      <div className="Home"><button id="dpBtn" className="dpHome" 
      onMouseOver={() => {
          const btn = document.getElementsByClassName("dpHome");
          btn[0].textContent = "ホーム";
        }
      } 
      onMouseOut={() => {
          const btn = document.getElementsByClassName("dpHome");
          btn[0].textContent = "Home";
        }
      }>Home</button>
      </div>

      <div className="Resources"><button id="dpBtn" className="dpRes" 
      onMouseOver={() => {
          const btn = document.getElementsByClassName("dpRes");
          btn[0].textContent = "リソース";
        }
      }  
      onMouseOut={() => {
          const btn = document.getElementsByClassName("dpRes");
          btn[0].textContent = "Resources";
        }
      }>Resources</button>
      </div>

      <div className="Quiz"><button id="dpBtn" className="dpQuiz" 
      onMouseOver={() => {
          const btn = document.getElementsByClassName("dpQuiz");
          btn[0].textContent = "資源";
        }
      }
      onMouseOut={() => {
          const btn = document.getElementsByClassName("dpQuiz");
          btn[0].textContent = "Quiz";
        }   
      }>Quiz</button>
      </div>

      <div className="Flashcards"><button id="dpBtn" className="dpFlash" 
      onMouseOver={() => {
          const btn = document.getElementsByClassName("dpFlash");
          btn[0].textContent = "カード";
        }
      }
      onMouseOut={() => {
          const btn = document.getElementsByClassName("dpFlash");
          btn[0].textContent = "Flashcards";
        }
      }>Flashcards</button>
      </div>

    </div>

    <div className="resourcesSec">
      <div className="resHead">
        <p className="resText" id="resTextJP">学習リソース</p>
        <p className="resText" id="resTextEN">Learning Resources</p>
        <p className="resText" id="resAboutEN">Looking for translations? Or just want to look at what you will learn?</p>
        <button className="resGo" onClick={() => navigate("/resources")}><span className="material-symbols-outlined">arrow_forward</span>Resources</button>
      </div>
    </div>
  </div>

  )
}

export default Home
