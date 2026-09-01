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
      <img src="../assets/splitter.png" alt="splitter"/>
      <p className="begin">Begin practicing your Japanese vocabulary!</p>
      <p className="beginJp">-さあ、日本語の単語の練習を始めましょう！</p>    
    </div>      

    
    <div className="resourcesContainer">
      <div className="resourcesSec">
        <div className="resImage">
          <img src="C:\Users\User\Documents\GitHub\KotobaNarabe\frontend\src\assets\bookLogo.png" alt="book logo"/>
        </div>
        <div className="resHead">
          <p className="resText" id="resTextJP">学習リソース</p>
          <p className="resText" id="resTextEN">Learning Resources</p>
          <p className="resText" id="resAboutEN">Looking for translations? Or just want to look at what you will learn?</p>
          <button className="resGo" onClick={() => {
            navigate("/resources");
            }}>Resources&nbsp;<span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
      </div>

      <div className="quizSec">
         <div className="quizImage">
          <img src="../assets/questionLogo.png" alt="question logo"/>
        </div>
        <div className="resHead">
          <p className="resText" id="resTextJP">クイズ</p>
          <p className="resText" id="resTextEN">Quiz</p>
          <p className="resText" id="resAboutEN">Feel confident? Challenge yourself.</p>
          <button className="quizGo" onClick={() => {
            navigate("/Quiz");
            }}>Quiz&nbsp;&nbsp;<span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
      </div>
    </div>    

    <div className="footer">
    
      
      
    </div>  

  </div>

  )
}

export default Home
