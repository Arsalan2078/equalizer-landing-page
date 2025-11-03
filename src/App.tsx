import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className={`${styles.app} text-preset--body`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
