import styles from "./index.module.scss";
import type { ReactNode } from "react";

const SocMed = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a href={href} className={`${styles.socmed}`}>
      {children}
    </a>
  );
};

export default SocMed;
