import styles from "./index.module.scss";
import Button from "../Button";
import Icon from "../Icon";

const Subscription = () => {
  return (
    <div className={`${styles.subscription}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.info}`}>
          <h2 className="text-preset--sub-title">Premium EQ</h2>
          <p>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
        </div>

        <div className={`${styles.price}`}>
          <span className="text-preset--sub-price">$4</span> / month
        </div>
      </div>

      <div className={`${styles.buttons}`}>
        <Button href="#">
          <Icon icon="apple" /> iOS Download
        </Button>

        <Button href="#" button="light">
          <Icon icon="android" /> Android Download
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
