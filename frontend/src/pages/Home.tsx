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

    

    <div className="resourcesSec">
      <div className="resHead">
        <p className="resText" id="resTextJP">学習リソース</p>
        <p className="resText" id="resTextEN">Learning Resources</p>
        <p className="resText" id="resAboutEN">Looking for translations? Or just want to look at what you will learn?</p>
        <button className="resGo" onClick={() => {
          
          navigate("/resources");
          }}><span className="material-symbols-outlined">arrow_forward</span>Resources</button>
      </div>
    </div>
  </div>

  )
}

export default Home
