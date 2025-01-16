import { createFileRoute } from "@tanstack/react-router";

import styles from "./what-do-i-know.module.css";

export const Route = createFileRoute("/what-do-i-know/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/what-do-i-know/"!</div>;
}
