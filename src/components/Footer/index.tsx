import styles from "./index.module.scss";
import Icon from "../Icon";
import Logo from "../Logo";
import SocMed from "../SocMed";

const Footer = () => {
  return (
    <footer className={`${styles.footer} text-preset--footer`}>
      <div className={`${styles.grid} container`}>
        <div>
          <Logo />
        </div>

        <p>
          All rights reserved © Equalizer 2021
          <br />
          Have any problems? Contact us via social media or email us at
          <br />
          <a
            href="mailto:equalizer@example.com"
            className="text-preset--footer-bold"
          >
            equalizer@example.com
          </a>
        </p>

        <ul className={styles.socmeds}>
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
      </div>
    </footer>
  );
};

export default Footer;
