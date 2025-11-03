import styles from "./index.module.scss";
import type { ReactNode } from "react";

const Button = ({
  button = "dark",
  href,
  children,
}: {
  button?: "dark" | "light";
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={href}
      className={`${styles.button} ${
        button === "dark" ? styles.dark : styles.light
      } text-preset--button`}
    >
      {children}
    </a>
  );
};

export default Button;
