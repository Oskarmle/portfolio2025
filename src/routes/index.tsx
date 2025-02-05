import { createFileRoute } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";

import "./index.css";

import Button from "../components/button/Button";
import Socials from "../components/socials/Socials";

export const Route = createFileRoute("/")({
  component: Frontpage,
});

export default function Frontpage() {
  const router = useRouter();

  const handleWhoAmIClick = () => {
    router.navigate({ to: "/who-am-i" });
  };

  const handleWhatDoIKnowClick = () => {
    router.navigate({ to: "/what-do-i-know" });
  };

  const handleWhatHaveIDoneClick = () => {
    router.navigate({ to: "/what-have-i-done" });
  };

  const handleHowDoIContactClick = () => {
    router.navigate({ to: "/how-do-i-contact" });
  };

  return (
    <div>
      <div className="frontpageContainer">
        <Button variant="primary" text="Who am I?" onClick={handleWhoAmIClick}></Button>
        <Button
          text="What do I know?"
          onClick={handleWhatDoIKnowClick}
        ></Button>
        <Button
          text="What have I done?"
          onClick={handleWhatHaveIDoneClick}
        ></Button>
        <Button
          text="How do I contact?"
          onClick={handleHowDoIContactClick}
        ></Button>
      </div>
      <div className="socialsContainer">
        <Socials type="instagram"></Socials>
        <Socials type="github"></Socials>
        <Socials type="linkedin"></Socials>
      </div>
    </div>
  );
}
