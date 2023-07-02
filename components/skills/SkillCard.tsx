import { Skill } from "@/util/interfaces";
import styles from "./SkillCard.module.scss";
import { useTheme } from "@mui/material";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const theme = useTheme();
  return (
    <div
      className={styles.skillCard}
      style={{
        color: "#000000",
        // backgroundColor: theme.palette.secondary.main,
      }}
    >
      {skill.icon} {skill.skill}
    </div>
  );
};

export default SkillCard;
