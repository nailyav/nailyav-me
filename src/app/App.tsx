import React from "react";
import styles from "./App.module.scss";
import './styles/styles.scss'

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Привет!!! Скоро тут будет контент :0</div>
    </div>
  );
};

export default App;