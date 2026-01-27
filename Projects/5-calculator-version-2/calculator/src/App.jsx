import styles from "./App.module.css";
import Display from "./Display.jsx";
import ButtonsContainer from "./ButtonsContainer.jsx";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log("Clicked", buttonText);
      if (buttonText === "C"){
        setCalVal("");
      } else if (buttonText=== "="){
        const result = eval(calVal).toString();
        setCalVal(result);
      }else {
        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
      }
  };
  return(
  <div className={styles.calculator}>
    <Display displayValue = {calVal}/>
    <ButtonsContainer onButtonClick={onButtonClick}/>
  </div> 
  );
}

export default App
