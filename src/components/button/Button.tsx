import styles from "./button.module.css";

type Button = {
  text: string;
};

export default function Button({ text }: Button) {
  return (
    <div className={styles.button}>
      <div className={styles.buttonText}>{text}</div>
    </div>
  );
}
