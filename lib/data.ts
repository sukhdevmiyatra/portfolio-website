import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import animetaku from "@/public/Animetaku-img.png";
import SQLquery from "@/public/SQLquery.png";
import beatblitz from "@/public/beatblitz.png";
import pythonwebapp from "@/public/PythonWebApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Content Writer",
    Company: "Company: Inspire2rise",
    location: "Location: Remote",
    description:
      `● As a Feature Editor at Inspire2Rise, I focused on optimizing the
      website's content for search engines. Through research and
      implementing best practices.
      ● Written News articles, product releases, press releases, evergreen
      content, and how-to guides`,
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Dec 2023",
  },

] as const;

export const projectsData = [
  {
    title: "Animetaku",
    description:
      `Built an anime web app and database with
      popular, airing, and upcoming titles,
      searches, trailers, character profiles,
      rankings, and API integrations.`,
    tags: ["React", "Jikan API"],
    imageUrl: animetaku,
    url: "https://animetaku-six.vercel.app/",    
  },
  {
    title: "Smartphone Data Analysis Python Web App",
    description: "Developed a data analysis app using Python and Streamlit.",
    tags: ["Python", "Pandas","Plotly","Seaborn","Steamlit"],
    imageUrl: pythonwebapp,
    url: "https://huggingface.co/spaces/SukhdevMiyatra/streamlit-smartphone-eda",
  },
  {
    title: "SQL AI Query Generator",
    description:
      `Built a natural language to SQL query code
      generator web application.`,
    tags: ["React", "Tailwind", "Express", "Google PaLM API"],
    imageUrl: SQLquery,
    url: "https://sql-generator-gamma.vercel.app/"
  },
  {
    title: "Beatblitz",
    description:
      `Developed front-end web application for
      BeatBlitz audio products using React
      framework And Tailwind.`,
    tags: ["React", "Tailwind"],
    imageUrl: beatblitz,
    url: "https://beat-blitz.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",  
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  "Python",
  "Flask", 
  "Data Analytics",
  "Data Visulization",
  "Power BI",
  "PostgreSQL",
   
] as const;
