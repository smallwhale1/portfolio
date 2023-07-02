import { Project } from "@/util/interfaces";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Tool from "./Tool";

interface ProjectCardProps {
  project: Project;
}

const imgWidth = 500;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  const getImgUrl = (): string => {
    return `/assets/images/projects/${project.projectType}/${project.name
      .toLowerCase()
      .split(" ")
      .join("-")}.png`;
  };

  useEffect(() => {
    if (!cardRef.current) return;
    const handleResize = () => {
      const width = cardRef.current?.getBoundingClientRect().width;
      if (width) {
        setImgHeight(width * 0.569);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardRef.current]);
  return (
    <div className={styles.projectCard} ref={cardRef}>
      <div className={styles.imgContainer} style={{ height: imgHeight }}>
        <Image
          className={styles.cardImg}
          src={getImgUrl()}
          alt={`${project.name}`}
          fill
          priority={project.priority}
        />
      </div>
      <div className={styles.cardText}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className={styles.tools}>
          {project.tools.map((tool) => (
            <Tool key={tool} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
