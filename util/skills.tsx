import { Skill } from "./interfaces";
import { DiSass, DiReact, DiCss3, DiNodejs, DiAws } from "react-icons/di";
import { SiMui, SiFirebase, SiExpress, SiNumpy, SiFigma } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandHtml5,
  TbBrandReactNative,
} from "react-icons/tb";
import {
  BiLogoJavascript,
  BiLogoJava,
  BiLogoPython,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";

const primaryBlue = "#44aeff";
const secondaryBlue = "#4586ff";
const primaryPink = "#ff4489";
const primaryOrange = "#ffa353";
const primaryYellow = "#ffc444";
const primaryGreen = "#2ee78b";
const black = "#000000";

const size = 30;

export const skills: Skill[] = [
  {
    skill: "ReactJS",
    icon: <DiReact color={primaryBlue} size={size} />,
  },
  {
    skill: "NextJS",
    icon: <TbBrandNextjs color={black} size={size} />,
  },
  {
    skill: "HTML",
    icon: <TbBrandHtml5 color={primaryPink} size={size} />,
  },
  {
    skill: "CSS",
    icon: <DiCss3 color={primaryBlue} size={size} />,
  },
  {
    skill: "JavaScript",
    icon: <BiLogoJavascript color={primaryYellow} size={size} />,
  },
  {
    skill: "Typescript",
    icon: <BiLogoTypescript color={secondaryBlue} size={size} />,
  },
  {
    skill: "Sass",
    icon: <DiSass color={primaryPink} size={size} />,
  },
  {
    skill: "MUI",
    icon: <SiMui color={secondaryBlue} size={size} />,
  },
  {
    skill: "NodeJS",
    icon: <DiNodejs color={primaryGreen} size={size} />,
  },
  {
    skill: "Express",
    icon: <SiExpress color={black} size={size} />,
  },
  {
    skill: "Python",
    icon: <BiLogoPython color={primaryBlue} size={size} />,
  },
  {
    skill: "Numpy",
    icon: <SiNumpy color={secondaryBlue} size={size} />,
  },
  {
    skill: "Java",
    icon: <BiLogoJava color={primaryPink} size={size} />,
  },
  {
    skill: "Firebase",
    icon: <SiFirebase color={primaryOrange} size={size} />,
  },
  {
    skill: "MongoDB",
    icon: <BiLogoMongodb color={primaryGreen} size={size} />,
  },
  {
    skill: "AWS",
    icon: <DiAws color={black} size={size} />,
  },
  {
    skill: "Figma",
    icon: <SiFigma color={primaryPink} size={size} />,
  },
  {
    skill: "React Native",
    icon: <TbBrandReactNative color={primaryBlue} size={size} />,
  },
];
