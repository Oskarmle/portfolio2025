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

  // const handleHowDoIContactClick = () => {
  //   router.navigate({ to: "/how-do-i-contact" });
  // };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/photography_by_oskar/", "_blank");
  }
  const handleGithubClick = () => {
    window.open("https://github.com/Oskarmle", "_blank");
  }
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/oskar-morris-ledskov-eriksen-1b537424b/", "_blank");
  }

  return (
    <div>
      <div className="frontpageContainer">
        <Button variant="primary" text="Who am I?" onClick={handleWhoAmIClick}></Button>
        <Button variant="primary"
          text="What do I know?"
          onClick={handleWhatDoIKnowClick}
        ></Button>
        <Button variant="primary"
          text="What have I done?"
          onClick={handleWhatHaveIDoneClick}
        ></Button>
        {/* <Button variant="primary"
          text="How do I contact?"
          onClick={handleHowDoIContactClick}
        ></Button> */}
      </div>
      <div className="socialsContainer">
        <Socials type="instagram" onClick={handleInstagramClick}></Socials>
        <Socials type="github" onClick={handleGithubClick}></Socials>
        <Socials type="linkedin" onClick={handleLinkedinClick}></Socials>
      </div>
    </div>
  );
}
