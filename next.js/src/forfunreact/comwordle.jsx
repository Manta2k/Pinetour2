import styles from "@/styles/wordle.module.css";
export const WordleFunc = () => {
  const wordleDiv = (
    <div className={styles.line}>
      <div className={styles.oneBlock}></div>
      <div className={styles.oneBlock}></div>
      <div className={styles.oneBlock}></div>
      <div className={styles.oneBlock}></div>
      <div className={styles.oneBlock}></div>
    </div>
  );
  return wordleDiv;
};
