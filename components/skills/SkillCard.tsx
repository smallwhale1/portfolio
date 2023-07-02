import { Skill } from "@/util/interfaces";
import styles from "./SkillCard.module.scss";
import { useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [cardInView, setCardInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setCardInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.skillCard} ${cardInView && styles.skillCardVisible}`}
      style={{
        color: "#000000",
      }}
    >
      {skill.icon} {skill.skill}
    </div>
  );
};

export default SkillCard;
