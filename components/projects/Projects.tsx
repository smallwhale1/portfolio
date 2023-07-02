import { projects } from "@/util/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { ProjectType } from "@/util/enums";

type Props = {};

const Projects = (props: Props) => {
  const [projectType, setProjectType] = useState(ProjectType.WEB);
  return (
    <div className={styles.projects}>
      <h3 className="section-heading">projects</h3>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={projectType}
        onChange={(e, val) => {
          setProjectType(val as ProjectType);
        }}
      >
        <Tab value={ProjectType.WEB} label="Web" />
        <Tab value={ProjectType.AI} label="AI" />
        <Tab value={ProjectType.SYSTEMS} label="Systems" />
        <Tab value={ProjectType.ALGORITHMS} label="Algorithms" />
        <Tab value={ProjectType.MOBILE} label="Mobile" />
      </Tabs>

      <div className={styles.projectGrid}>
        {projects.filter((p) => projectType === p.projectType).length === 1 ? (
          <>
            {projects
              .filter((project) => projectType === project.projectType)
              .map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            {/* Placeholder */}
            <div></div>
          </>
        ) : (
          projects
            .filter((project) => projectType === project.projectType)
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))
        )}
      </div>
    </div>
  );
};

export default Projects;
