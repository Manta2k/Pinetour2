import { WordleFunc } from "@/forfunreact/comwordle";
import styles from "@/styles/wordle.module.css";
const output = () => {
  return (
    <div className={styles.container}>
      <WordleFunc />
      <WordleFunc />
      <WordleFunc />
      <WordleFunc />
      <WordleFunc />
      <WordleFunc />
    </div>
  );
};
export default output;
