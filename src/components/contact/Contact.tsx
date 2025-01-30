import styles from "./contact.module.css";

type Contact = {
  type: "phone" | "email";
  method: "+45 42 76 29 49" | "omle.eriksen@gmail.com";
};

export default function Contact({ method, type }: Contact) {
  const contactPath = `assets/contact/${type}.svg`;
  return (
    <div className={styles.contactContainer}>
      <img src={contactPath} alt="" />
      <p>{method}</p>
    </div>
  );
}
