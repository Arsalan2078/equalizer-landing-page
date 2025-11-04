import styles from "./index.module.scss";
import Logo from "../Logo";
import bgPattern from "/images/bg-pattern-1.svg";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.bg}`}>
        <img src={bgPattern} alt="" />
      </div>

      <div className={`${styles.grid} container`}>
        <nav>
          <Logo />
        </nav>

        <div className={`${styles.content}`}>
          <h1 className="text-preset--heading">
            We make your music sound extraordinary.
          </h1>

          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
