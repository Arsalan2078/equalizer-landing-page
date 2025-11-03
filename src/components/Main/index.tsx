import Subscription from "../Subscription";
import styles from "./index.module.scss";

const Main = () => {
  return (
    <main className={`${styles.main}`}>
      <div className={`container`}>
        <Subscription />
      </div>
    </main>
  );
};

export default Main;
