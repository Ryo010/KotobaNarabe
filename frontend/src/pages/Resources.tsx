import { useState } from "react";
import NavigationBar from '../components/NavigationBar';
import useResources from '../hooks/useResources';
import '../styles/resources.css';

  

function Resources() {

  const kanaChart = useResources();

  const [chartType, setChartType] = useState("hiragana");
  const [selectedChar, setSelectedChar] = useState<any>(null);
  
  if (!kanaChart?.hiragana) {
  return <div>Loading...</div>;
}


  const chart = chartType === "hiragana" ? kanaChart.hiragana.seion : kanaChart.katakana.seion;

  return (
  <div>  
  <NavigationBar/>
    <div className='main'>
      <div className="containerRes">
        <div className='charText'>
          <p className="charts chartTextJP">チャート</p>
          <p className="charts chartTextEN">Charts</p>
        </div>

        <div className='selectionBox'>
          <p className="selType">Select a type :</p>       
          <button 
            className={`selectBtn ${chartType === "hiragana" ? "active" : ""}`}
            onClick={() => setChartType("hiragana")}
            >
            Hiragana
          </button>

          <button 
            className={`selectBtn ${chartType === "katakana" ? "active" : ""}`}
            onClick={() => setChartType("katakana")}
            >
            Katakana
          </button>
        </div>

        <div className='master-container'>

          <div className="aboutKanji">
            {selectedChar ? (
              <>
                <h1 className="infoKana">{selectedChar.character}</h1>
                <p className="infoRomaji">{selectedChar.romaji}</p>
              </>
            ) : (
              <p className="infoPlaceholder">Click a character</p>
            )} 
          </div>

          <div className="grid-container">         
            {chart.map((char, rowIndex) => (
            
            <div className={`item ${char.character === "" ? "empty" : char.romaji}`} key={rowIndex} onClick={() => char.character !== "" && setSelectedChar(char)}>

              {char.character !== "" && (
                <>
                  <div className="kana">{char.character}</div>
                  <div className="romaji">{char.romaji}</div>
                </>
              )}
              
            </div>          
           )
         )}

        </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Resources
