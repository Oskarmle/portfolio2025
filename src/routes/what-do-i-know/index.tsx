import { createFileRoute } from "@tanstack/react-router";
import Button from "../../components/button/Button";

import styles from "./what-do-i-know.module.css";
import Skills from "../../components/skills/Skills";
import BackButton from "../../components/backButton/BackButton";

export const Route = createFileRoute("/what-do-i-know/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button variant="noClick" text="What do I know?"></Button>
      </div>
      <BackButton></BackButton>
      <div className={styles.whatContainer}>
        <p>
          These are the different languages and tools i have experience with
        </p>
        <div className={styles.skillContainer}>
          <Skills type="css"></Skills>
          <Skills type="docker"></Skills>
          <Skills type="git"></Skills>
          <Skills type="github"></Skills>
          <Skills type="html"></Skills>
          <Skills type="javascript"></Skills>
          <Skills type="mongodb"></Skills>
          <Skills type="nestjs"></Skills>
          <Skills type="nodejs"></Skills>
          <Skills type="react"></Skills>
          <Skills type="typescript"></Skills>
        </div>
      </div>
    </div>
  );
}
