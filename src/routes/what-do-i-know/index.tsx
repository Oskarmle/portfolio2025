import { createFileRoute } from "@tanstack/react-router";
import Skills from "../../components/skills/Skills";

// import styles from "./what-do-i-know.module.css";

export const Route = createFileRoute("/what-do-i-know/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Skills type="git"></Skills>
      <Skills type="nestjs"></Skills>
    </div>
  );
}
