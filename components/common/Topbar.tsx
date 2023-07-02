import { IconButton, useTheme } from "@mui/material";
import styles from "./Topbar.module.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { Allura } from "next/font/google";
import { useEffect, useState } from "react";

const font = Allura({ subsets: ["latin"], weight: ["400"] });

const Topbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [nameCollapsed, setNameCollapsed] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
      if (window.innerWidth < 400) {
        setNameCollapsed(true);
      } else {
        setNameCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.topbarContainer}
      style={{ backgroundColor: theme.palette.bgColor.main }}
    >
      <nav className={styles.topbar}>
        <div className={`${styles.name} ${font.className}`}>
          {nameCollapsed ? "SZ" : "Sophie Zhang"}
        </div>
        <ul className={styles.links}>
          {!collapsed && (
            <>
              {/* Navigation links within page */}
              <li className={styles.link}>
                <div>home</div>
              </li>
              <li className={styles.link}>
                <div>projects</div>
              </li>
              <li className={styles.link}>
                <div>skills</div>
              </li>
            </>
          )}
          {/* Link icons */}
          <ul className={styles.externalLinks}>
            <li className={styles.link}>
              <IconButton>
                <AiFillGithub color={theme.palette.textColor.main} />
              </IconButton>
            </li>
            <li className={styles.link}>
              <IconButton>
                <AiFillLinkedin color={theme.palette.textColor.main} />
              </IconButton>
            </li>
            {collapsed && (
              <li className={styles.link}>
                <IconButton>
                  <AiOutlineMenu color={theme.palette.textColor.main} />
                </IconButton>
              </li>
            )}
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
