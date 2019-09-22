import React, {useState} from 'react';
import './Quiz.css';
import Fields from "./Fields"

let guessedColors = [];
const Quiz = () => {
  const rainbowColors = ["red", "yellow", "blue", "indigo", "violet", "orange", "green"]


  let [inputText, setInputText] = useState("")

  let handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    setInputText(value);
    for (let i=0;i<rainbowColors.length;i++) {
      if (value === rainbowColors[i]) {
        guessedColors.push(value);
        setInputText("")
      }
    } 
  }
  
  return (
    <div className="guesser">
      <div className="title">
        <h2>Name all 7 colors of rainbow!</h2>
      </div>
      <div className="input">
        <input value={inputText} onChange={handleChange}></input>
      </div>
      <div className="fields">
        <Fields color={"red"} receivedColor={guessedColors} />
        <Fields color={"orange"} receivedColor={guessedColors} />
        <Fields color={"yellow"} receivedColor={guessedColors} />
        <Fields color={"green"} receivedColor={guessedColors} />
        <Fields color={"blue"} receivedColor={guessedColors} />
        <Fields color={"indigo"} receivedColor={guessedColors} />
        <Fields color={"violet"} receivedColor={guessedColors} />
      </div>
    </div>
  );
}

export default Quiz;
