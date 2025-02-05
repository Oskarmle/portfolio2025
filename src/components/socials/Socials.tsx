import styles from "./socials.module.css";

type Social = {
  type: "instagram" | "linkedin" | "github";
  onClick?: () => void;
};

export default function Socials({ type, onClick }: Social) {
  const imagePath = `assets/${type}.svg`;

  return (
    <div className={styles.socials} onClick={onClick}>
      <img src={imagePath} alt="" className={styles.social} />
    </div>
  );
}
