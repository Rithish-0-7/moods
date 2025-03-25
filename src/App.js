import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MoodDisplay from "./moodDisplay";
function App() {
  const [Mood,setMood]=useState("");
  return (
    <div className={`contaniner ${Mood}`}>
      <h1>How are you felling today?</h1>
      <div className="button">
        <button onClick={()=>setMood("Happy")}>😊Happy</button>
        <button onClick={()=>setMood("Sleepy")}>😴Sleepy</button>
        <button onClick={()=>setMood("Sad")}>😔Sad</button>
        <button onClick={()=>setMood("Angry")}>😡Angry</button>
      </div>
      <MoodDisplay Mood={Mood} />
    </div>
  );
}

export default App;
