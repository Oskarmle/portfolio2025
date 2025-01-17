import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/button/Button";

import "./index.css";
import Socials from "../components/socials/Socials";

export const Route = createFileRoute("/")({
  component: Frontpage,
});

function Frontpage() {
  return (
    <div>
      <div className="frontpageContainer">
        <Button text="Who am I?"></Button>
        <Button text="What do I know?"></Button>
        <Button text="What have I done?"></Button>
        <Button text="How do I contact?"></Button>
      </div>
      <div className="socialsContainer">
        <Socials type="instagram"></Socials>
        <Socials type="github"></Socials>
        <Socials type="linkedin"></Socials>
      </div>
    </div>
  );
}
