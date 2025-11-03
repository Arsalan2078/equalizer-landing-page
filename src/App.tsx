import styles from "./App.module.scss";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
import SocMed from "./components/SocMed";

const App = () => {
  return (
    <div className={`${styles.app} text-preset--body`}>
      <header>
        <nav>
          <Logo />
        </nav>

        <div>
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
      </header>

      <main>
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
      </main>

      <footer className="text-preset--footer">
        <Logo />

        <div>
          <div>All rights reserved © Equalizer 2021</div>
          <div>
            Have any problems? Contact us via social media or email us at{" "}
            <a
              href="mailto:equalizer@example.com"
              className="text-preset--footer-bold"
            >
              equalizer@example.com
            </a>
          </div>
        </div>

        <ul>
          <li>
            <SocMed href="#">
              <Icon icon="facebook" />
            </SocMed>
          </li>
          <li>
            <SocMed href="#">
              <Icon icon="instagram" />
            </SocMed>
          </li>
          <li>
            <SocMed href="#">
              <Icon icon="twitter" />
            </SocMed>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
