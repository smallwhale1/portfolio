import styles from "./HBarText.module.scss";

interface HBarTextProps {
  text: string;
  center?: boolean;
}

const HBarText = ({ text, center }: HBarTextProps) => {
  return (
    <div className={styles.hBarText}>
      {!center && <div className={styles.hBar}></div>}
      {text}
    </div>
  );
};

export default HBarText;
