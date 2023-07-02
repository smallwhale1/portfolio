import { useTheme } from "@mui/material";
import styles from "./Tool.module.scss";

interface ToolProps {
  tool: string;
}

const Tool = ({ tool }: ToolProps) => {
  const theme = useTheme();
  return (
    <div
      className={styles.tool}
      style={{
        color: theme.palette.textColor.main,
        borderColor: theme.palette.textColor.main,
      }}
    >
      {tool}
    </div>
  );
};

export default Tool;
