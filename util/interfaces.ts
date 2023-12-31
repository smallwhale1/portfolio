import { ReactElement } from "react";
import { ProjectType } from "./enums";

export interface Project {
  name: string;
  description: string;
  tools: string[];
  projectType: ProjectType;
  priority?: boolean;
  link?: string;
}

export interface Skill {
  skill: string;
  icon: ReactElement;
}
