import { createFileRoute } from "@tanstack/react-router";

import styles from "./who-am-i.module.css";

export const Route = createFileRoute("/who-am-i/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/who-am-i/"!</div>;
}
