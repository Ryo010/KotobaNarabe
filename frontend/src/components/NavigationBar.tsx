import { UserButton } from '@clerk/clerk-react';
import '../styles/home.css'

const NavigationBar = () => {
  return (
    <div>
      <div className="topBar">
        <div className="title">

          <p className="name namejp">言葉並べ</p>
          <p className="name nameEn">KotobaNarabe</p>

          <button className="menuBtn" id="dropDownBtn" onClick={() => {
              const dpm = document.getElementById("dropDownMenu") as HTMLButtonElement;
                if (dpm.style.display === "none"){
                  dpm.style.display = "block";
                } else {
                  dpm.style.display = "none";
                }
              }
            }> 
            <i className="fa fa-bars fa-3x" aria-hidden="true"></i> 
          </button>   

          <div className='profileButton'>
            <UserButton afterSwitchSessionUrl='/'/>
          </div>  
          

        </div>
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



    </div>
  )
}

export default NavigationBar
