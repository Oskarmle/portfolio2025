import styles from "./skills.module.css";

export type SkillsProps = {
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
    | "typescript"
    | "react native";
};

export default function Skills({ type }: SkillsProps) {
  const iconPath = `assets/skills/${type}.svg`;

  return (
    <div className={styles.skill}>
      <img src={iconPath} alt="" />
      <p>{type}</p>
    </div>
  );
}
