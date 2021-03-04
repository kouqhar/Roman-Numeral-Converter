import Layout from "./hoc/Layout/Layout";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.Container}>
      <Layout />
    </div>
  );
};

export default App;
