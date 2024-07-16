/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./buttons.module.css";
import { Link } from "react-router-dom";

export const RegularButton = ({ title, className, url }: any) => {
  return (
    <Link to={url || "/login"} target="__blank">
      <button
        className={`${styles.regularButton} ${className}`}
      >
        {title}
      </button>
    </Link>
  );
};