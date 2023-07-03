import { skills } from "@/util/skills";
import styles from "./Skills.module.scss";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h3 className="section-heading">Skills</h3>
      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <SkillCard key={skill.skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
