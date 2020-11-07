import React, {useState} from 'react';

export const MainPage = ({map}) => {
  const [score, setScore] = useState(0);
  const [peakScore, setPeakScore] = useState(1);
  const [mode, setMode] = useState("Traning");
  const [peaks, setPeaks] = useState([]);
  const [winning, setWinning] = useState(true);

  const toggleMode = () => {
    if (mode === "Traning") setMode("Playing"); setWinning(true)
    if (mode === "Playing") setMode("Traning"); setScore(0)
   }

   const getDecision = async (score) => {
     return (await fetch(`api?seed=${map}&score=${score}`)).text();
   }

   const addNewPeak = async () => {
      setPeaks(peaks.concat([(peakScore + " : " + await getDecision(peakScore))]));
      setPeakScore(peakScore + 1);
   }

   const checkGuess = async (guess) => {
     if ((await getDecision(score+1)) === guess) {
       setScore(score + 1);
     } else {
        setWinning(false)
      }

     }

  return ( 
      <div>
        <p>Map: {map}</p>
        <p>Mode: {mode}</p>
        <button onClick={() => toggleMode()}>Toggle mode</button>
        <p>-----------------------------</p>
        {(mode === "Traning")
          ? <div>
              {peaks.map((peak, i) => {return <div key={i}>{peak}</div>})}
              <button onClick={() => addNewPeak()}>New peak</button>
          </div>
          : <div><h2>Score: {score}</h2>
            { winning
              ? <div> 
                  <button onClick={() => checkGuess("Cat")}>Cat</button>
                  <button onClick={() => checkGuess("Dog")}>Dog</button>
                 </div>
              : <h3> YOU LOST</h3>
          }</div>
        }
      </div>
  )
}
