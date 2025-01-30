import styles from "./skills.module.css";

type Skills = {
  type:
    | "css"
    | "docker"
    | "git"
    | "github"
    | "html"
    | "javascript"
    | "mongodb"
    | "nestjs"
    | "nodejs"
    | "react"
    | "typescript";
};

export default function Skills({ type }: Skills) {
  const iconPath = `assets/skills/${type}.svg`;

  return (
    <div className={styles.skill}>
      <img src={iconPath} alt="" className="" />
      <p>{type}</p>
    </div>
  );
}
