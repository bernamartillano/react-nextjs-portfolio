import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import navidoImg from "@/public/navido.png";
import wingenioImg from "@/public/wingenio.jpg";
import geniusesImg from "@/public/geniuses.jpg";
import superhypeImg from "@/public/superhype.jpg";
import uhImg from "@/public/uh.png";
import divineImg from "@/public/divine.png";

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
    title: "Web Developer",
    location: "ASIA Select",
    description:
      "Worked as an Intern, developed and designed their own website in WordPress.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Software Engineer",
    location: "SNAAAP",
    description:
      "Developed web applications with Angular, deployed projects in AWS, and built e-commerce websites using WooCommerce.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Software Engineer",
    location: "InGeNio",
    description:
      "Designed and optimized React web interfaces with a focus on user experience, developed a proprietary productivity platform for agile project management, built e-commerce platforms with OpenCart and Shopify, including custom extensions and database integration, and managed deployments on AWS.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Frontend Developer",
    location: "Peter Dohle Schiffahrts KG",
    description:
      "Developed and maintained Angular 16+ web applications with RxJS and REST APIs, created unit tests with Jest, collaborated with QA and UI/UX teams using Figma, and applied Agile methods with code reviews via Git.",
    icon: React.createElement(FaReact),
    date: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Navido",
    description:
      "A modern ERP system designed for shipping companies, integrating core business functions such as accounting, chartering, technical purchasing, reports, and more.",
    tags: ["Angular18", "TypeScript", "Jest", "Git", "Figma", "Jira"],
    imageUrl: navidoImg,
  },
  {
    title: "WinGeNio",
    description:
      "Developed and utilized a productivity platform for agile project management. Used to monitor tasks status and its development time, with calendar view to see tasks and schedule meetings",
    tags: ["React", "MongoDB", "Material UI"],
    imageUrl: wingenioImg,
  },
  {
    title: "Geniuses",
    description:
      "A multimedia platform to connect with others, similar to Facebook. Includes creating posts (comments and likes), sending private messages, friend requests/suggestions, and notifications.",
    tags: ["React", "MongoDB", "Ant Design"],
    imageUrl: geniusesImg,
  },
  {
    title: "SuperHype.SG",
    description:
      "An e-commerce website for selling toy collectibles. Integrated cart and payment integration.  Developed in Shopify. ",
    tags: ["Shopify"],
    imageUrl: superhypeImg,
  },
  {
    title: "Untold Horizons",
    description:
      "An e-commerce website for selling school uniforms. Besides the design, I developed a custom extension for exporting report and order sales. Integrated payment and shipping integration. ",
    tags: ["Shopify"],
    imageUrl: uhImg,
  },
  {
    title: "Divine Jewelry",
    description:
      "An e-commerce website from WordPress that sells jewelries. Integrated an auctin bidding function. ",
    tags: ["WordPress", "WooCommerce", "AWS"],
    imageUrl: divineImg,
  },
] as const;

export const skillsData = [
  "Angular18",
  "HTML",
  "CSS/LESS/SASS",
  "JavaScript",
  "TypeScript",
  "RxJs",
  "RestAPI",
  "React",
  "Bootstrap",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Python",
  "WordPress",
  "Shopify",
] as const;
