import { Project } from "@/util/interfaces";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Tool from "./Tool";
import { useInView } from "react-intersection-observer";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [cardInView, setCardInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setCardInView(true);
    }
  }, [inView]);

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
  }, []);

  return (
    <div
      className={`${styles.cardWrapper} ${
        cardInView && styles.cardWrapperVisible
      }`}
      ref={ref}
    >
      <div className={styles.projectCard} ref={cardRef}>
        <div className={styles.imgContainer} style={{ height: imgHeight }}>
          <Image
            onLoad={() => setImgLoaded(true)}
            className={`${styles.cardImg} ${imgLoaded && styles.cardImgShown}`}
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
    </div>
  );
};

export default ProjectCard;
