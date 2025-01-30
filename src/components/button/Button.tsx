import styles from "./button.module.css";

type Button = {
  text: string;
  onClick?: () => void;
  variant: "primary" | "noClick" | "send";
  type?: "button" | "submit" | "reset";
};

export default function Button({
  text,
  variant,
  onClick,
  type = "button",
}: Button) {
  const buttonClass = styles[variant] || styles.primary;
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      <div className={styles.buttonText}>{text}</div>
    </button>
  );
}
