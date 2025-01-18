import styles from "./button.module.css";

type Button = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "noClick";
};

export default function Button({ text, onClick, variant }: Button) {
  const buttonClass = styles[variant] || "button";
  return (
    <div className={buttonClass} onClick={onClick}>
      <div className={styles.buttonText}>{text}</div>
    </div>
  );
}
