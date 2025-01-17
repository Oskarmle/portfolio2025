import styles from "./socials.module.css";

type Social = {
  type: "instagram" | "linkedin" | "github";
};

export default function Socials({ type }: Social) {
  const imagePath = `assets/${type}.svg`;

  return (
    <div className={styles.socials}>
      <img src={imagePath} alt="" className={styles.social}/>
    </div>
  );
}
