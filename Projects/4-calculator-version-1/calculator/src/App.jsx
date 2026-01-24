import styles from "./App.module.css";
import Display from "./Display.jsx";
import ButtonsContainer from "./ButtonsContainer.jsx";

function App() {
  
  return(
  <div className={styles.calculator}>
    <Display/>
    <ButtonsContainer/>
  </div> 
  );
}

export default App
