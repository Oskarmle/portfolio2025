import Skills from "../skills/Skills";
import styles from "./project.module.css";

export default function Project() {
  function handleGithubClick() {
    console.log("Github clicked");
  }
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.title}>GBTK Webpage</h1>
      <div className={styles.textContainer}>
        <p className={(styles.text1, styles.text)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className={(styles.text2, styles.text)}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={(styles.text3, styles.text)}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.{" "}
        </p>
        <p className={(styles.text4, styles.text)}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p className={(styles.text5, styles.text)}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={styles.techStack}>
        <p className={styles.techHeader}>Technologies used</p>
        <div className={styles.skills}>
          <div className={styles.github} onClick={handleGithubClick}>
            <img src="/assets/skills/github.svg" alt="" />
            <p className={styles.githubLink}>Github</p>
          </div>
          <div className={styles.line}></div>
          <Skills type="css"></Skills>
          <Skills type="react"></Skills>
          <Skills type="html"></Skills>
          <Skills type="git"></Skills>
          <Skills type="github"></Skills>
          <Skills type="javascript"></Skills>
        </div>
      </div>
    </div>
  );
}
