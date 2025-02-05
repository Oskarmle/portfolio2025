import Skills from "../skills/Skills";
import styles from "./project.module.css";

import { SkillsProps } from "../skills/Skills";

type ProjectProps = {
  title: string;
  text: string[];
  techStack: SkillsProps[];
  githubLink: string;
};

export default function Project({
  title,
  text,
  techStack,
  githubLink,
}: ProjectProps) {
  function handleGithubClick() {
    // console.log({ githubLink });
    window.open(githubLink, "_blank");
  }

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.textContainer}>
        {text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <p className={(styles.text1, styles.text)}></p>
      </div>
      <div className={styles.techStack}>
        <p className={styles.techHeader}>Technologies used</p>
        <div className={styles.skills}>
          <div className={styles.github} onClick={handleGithubClick}>
            <img src="/assets/skills/github.svg" alt="" />
            <p className={styles.githubLink}>Github</p>
          </div>
          <div className={styles.line}></div>
          {techStack.map((tech, index) => (
            <Skills key={index} type={tech.type} />
          ))}
        </div>
      </div>
    </div>
  );
}
