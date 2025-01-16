import { createFileRoute } from "@tanstack/react-router";

import styles from "./how-do-i-contact.module.css";

export const Route = createFileRoute("/how-do-i-contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/how-do-i-contact/"!</div>;
}
