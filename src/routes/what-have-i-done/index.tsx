import { createFileRoute } from "@tanstack/react-router";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./what-have-i-done.module.css";
import Project from "../../components/projects/Project";
import Button from "../../components/button/Button";
import BackButton from "../../components/backButton/BackButton";
import { SkillsProps } from "../../components/skills/Skills";

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

  const projects: {
    title: string;
    text: string[];
    techStack: SkillsProps[];
    githubLink: string;
  }[] = [
    {
      title: "GBTK Webpage",
      text: [
        "Final exam project for Multimediedesigner at CPH Business Academy. Developed by myself.",
        "The project uses React as the frontend, and has a Supabase backend, which is being utilized for news and events.",
        "I Built this over the course of 6 weeks, and made the design and layout myself, also including posters and other marketing material.",
        "I chose to built in React as i had the elective Frontend Development on the third semester, and wanted to learn more about React.",
        "The solution was purpose built for the table tennis club in Gladsaxe, but sadly the project was never implemented.",
      ],
      techStack: [
        { type: "css" },
        { type: "react" },
        // { type: "figma" },
        { type: "github" },
        { type: "javascript" },
      ],
      githubLink: "https://github.com/Oskarmle/gbtk",
    },
    {
      title: "DAOS website (Frontend)",
      text: [
        "Frontend part of the first semester exam for web development at CPH Business Academy. Develop by myself.",
        "The project uses React with TypeScript, and has an accompanying backend built in Nest.js.",
        "The project include functionality for creating content for the website, as well as creating a user.",
        "The functions of the webpage changes depending if the user is logged in or not.",
        "The design were made available by the teacher, and the project was built over the course of 2 weeks.",
      ],
      techStack: [
        { type: "react" },
        { type: "css" },
        { type: "git" },
        { type: "github" },
        { type: "typescript" },
      ],
      githubLink: "https://github.com/Oskarmle/Daos_frontend",
    },
    {
      title: "DAOS website (Backend)",
      text: [
        "Backend part of the first semester exam for web development at CPH Business Academy. Develop by myself.",
        "The project uses Nest.js with TypeScript, and has an accompanying  Frontend built in React.",
        "The project include functionality for creating content for the website, as well as creating a user.",
        "The backend os connected to a MongoDB database, and uses Jwt for authentication.",
        "The design were made available by the teacher, and the project was built over the course of 2 weeks.",
      ],
      techStack: [
        { type: "nestjs" },
        { type: "git" },
        { type: "github" },
        { type: "typescript" },
        { type: "mongodb" },
      ],
      githubLink: "https://github.com/Oskarmle/daos_backend",
    },
    {
      title: "Player data collection",
      text: [
        "Hobby project for collecting and showcasing stats for my clubs table tennis players.",
        "The project uses basic html, css and javascript for the frontend, but will be moved to react later",
        "The project uses express.js for the backend, and has a MongoDB database for storing the data.",
        "The project also contains a webpage scraper built in python, which collects data from bordtennisportalen.dk",
        "The project was designed to be a hobby project, and is still in development.",
      ],
      techStack: [
        { type: "html" },
        { type: "git" },
        { type: "github" },
        { type: "javascript" },
        { type: "mongodb" },
      ],
      githubLink: "https://github.com/Oskarmle/daos_backend",
    },
    {
      title: "Player data collection",
      text: [
        "Purpose built website for a small client, where people can read about his guide business",
        "The project is built in React with Vite, and has a larger focus on SEO than my other projects",
        "The future plans for the project is contact solution by mail, and a way for the owner to turn of the page when he is unavailable",
      ],
      techStack: [
        { type: "react" },
        { type: "git" },
        { type: "github" },
        { type: "typescript" },
      ],
      githubLink: "https://github.com/Oskarmle/fredensborg_palace_guide",
    },
  ];

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button variant="noClick" text="Who am I?"></Button>
      </div>
      <BackButton></BackButton>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Project
            key={index}
            techStack={project.techStack}
            githubLink={project.githubLink}
            text={project.text}
            title={project.title}
          />
        ))}
      </Slider>
    </div>
  );
}
