import Button from "../Button";
import Icon from "../Icon";
import styles from "./index.module.scss";

const Main = () => {
  return (
    <main>
      <div className={`container`}>
        <h2 className="text-preset--sub-title">Premium EQ</h2>

        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>

        <div>
          <span className="text-preset--sub-price">$4</span> / month
        </div>

        <Button href="#">
          <Icon icon="apple" /> iOS Download
        </Button>

        <Button href="#" button="light">
          <Icon icon="android" /> Android Download
        </Button>
      </div>
    </main>
  );
};

export default Main;
