import { createFileRoute } from "@tanstack/react-router";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./what-have-i-done.module.css";
import Project from "../../components/projects/Project";
import Button from "../../components/button/Button";
import BackButton from "../../components/backButton/BackButton";

export const Route = createFileRoute("/what-have-i-done/")({
  component: RouteComponent,
});

function RouteComponent() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    adaptiveHeight: true,
  };

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button variant="noClick" text="Who am I?"></Button>
      </div>
      <BackButton></BackButton>
      <Slider {...settings}>
        <Project />
        <Project />
        <Project />
      </Slider>
    </div>
  );
}
