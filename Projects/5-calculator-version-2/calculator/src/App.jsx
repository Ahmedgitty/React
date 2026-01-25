import styles from "./App.module.css";
import Display from "./Display.jsx";
import ButtonsContainer from "./ButtonsContainer.jsx";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
      
  }
  return(
  <div className={styles.calculator}>
    <Display displayValue = {calVal}/>
    <ButtonsContainer onButtonClick={onButtonClick}/>
  </div> 
  );
}

export default App
