import { ProjectType } from "./enums";
import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    name: "Inspofolio",
    description:
      "A web application for organizing the references and various media used to inspire a creative work or process. Supports image uploads and interactions, embedded links, and Spotify integration.",
    tools: ["NextJS", "ReactJS", "Typescript", "Firebase"],
    projectType: ProjectType.WEB,
    priority: true,
  },
  {
    name: "Dash",
    description:
      "A collaborative, browser-based, multimedia application for organizing and presenting documents on a freeform canvas.",
    tools: ["MongoDB", "ReactJS", "Typescript", "Express", "NodeJS"],
    projectType: ProjectType.WEB,
    priority: true,
  },
  {
    name: "AI Image Editor",
    description:
      "A web application exploring the capabilities of selective, fine-tuned editing of images with prompt-guided generative AI.",
    tools: ["HTML Canvas", "ReactJS", "Typescript"],
    projectType: ProjectType.WEB,
  },
  {
    name: "HeaterHive Web Console",
    description:
      "A web console for managing water heating systems and visualizing metrics such as temperature and carbon emissions over time.",
    tools: ["NextJS", "AWS DynamoDB", "AWS API Gateway", "AWS Lambda"],
    projectType: ProjectType.WEB,
  },
  {
    name: "Spotify Explore",
    description:
      "Web application for exploring song recommendations with interactive, animated nodes.",
    tools: ["NodeJS", "Express", "ReactJS", "Web Scraping", "Firebase"],
    projectType: ProjectType.WEB,
  },
  {
    name: "Featr. Website",
    description: "Website for the music start-up Featr.",
    tools: ["NextJS", "ReactJS", "Typescript", "Firebase"],
    projectType: ProjectType.WEB,
  },
  {
    name: "Yoga Bot",
    description:
      "An application that instantaneously classifies 9 different yoga poses from a real-time video feed using a CNN architecture and overlays MoveNet embeddings over the body.",
    tools: ["Python", "Tensorflow", "Numpy", "CNN"],
    projectType: ProjectType.AI,
  },
  {
    name: "Othello Bot",
    description:
      "An application that allows users to play Othello against 3 different levels of AI of increasing intelligence.",
    tools: ["Java", "JavaFX", "Minimax"],
    projectType: ProjectType.AI,
  },
  {
    name: "Search",
    description:
      "A search engine that produces the most relevent search results for a query using the PageRank algorithm and TF/IDF scores. Results are parsed from a large corpus of XML documents.",
    tools: ["Python", "PageRank"],
    projectType: ProjectType.ALGORITHMS,
  },
  {
    name: "SeamCarve",
    description:
      "An application that resizes images by removing visual paths of least importance along an image.",
    tools: ["Python", "Dynamic Programming"],
    projectType: ProjectType.ALGORITHMS,
  },
  {
    name: "Featr Mobile",
    description:
      "A mobile application that matches artists and musicians to potential collaborators and allows them to connect within the app.",
    tools: ["React Native", "Typescript"],
    projectType: ProjectType.MOBILE,
  },
  {
    name: "HeaterHive Mobile",
    description:
      "An mobile app for visualizing water heating time-series data and interacting with controllers via IoT communication.",
    tools: ["React Native", "AWS IoT", "AWS DynamoDB", "AWS Cognito"],
    projectType: ProjectType.MOBILE,
  },
  {
    name: "Shell",
    description:
      "A Bash-like shell for executing programs and spawning and managing multiple processes.",
    tools: ["C", "Linux"],
    projectType: ProjectType.SYSTEMS,
  },
];