import { createFileRoute } from "@tanstack/react-router";

import styles from "./who-am-i.module.css";
import BackButton from "../../components/backButton/BackButton";
import Button from "../../components/button/Button";

export const Route = createFileRoute("/who-am-i/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button variant="noClick" text="Who am I?"></Button>
      </div>
      <BackButton></BackButton>
      <div className={styles.WhoContainer}>
        <h1>I'm a web developer student</h1>
        <p>
          Hi there, my name is Oskar Eriksen. I'm a multimediadesigner and a web
          developer student.
        </p>
        <p>
          I enjoy learning and exploring code and design, and trying to learn as
          much as possible.
        </p>
        <p>
          For more casual stuff, I'm a big fan of trying different kinds of
          photography and i'm playing a lot of table tennis in Gladsaxe
          Bordtennisklub
        </p>
      </div>
    </div>
  );
}
