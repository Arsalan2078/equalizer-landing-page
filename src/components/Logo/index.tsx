import styles from "./index.module.scss";
import logo from "/images/logo.svg";

const Logo = () => {
  return (
    <a href="/" className={`${styles.logo}`}>
      <img src={logo} alt="equalizer logo" />
    </a>
  );
};

export default Logo;
