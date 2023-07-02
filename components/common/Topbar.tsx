import { IconButton, useTheme } from "@mui/material";
import styles from "./Topbar.module.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { Allura } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Sections } from "@/util/enums";
import { InViewContext } from "@/contexts/InViewContext";

const font = Allura({ subsets: ["latin"], weight: ["400"] });

interface TopbarProps {
  smoothScroll: (section: Sections) => void;
}

const Topbar = ({ smoothScroll }: TopbarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [nameCollapsed, setNameCollapsed] = useState(false);
  const theme = useTheme();
  const { activeView } = useContext(InViewContext);

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
        <div
          className={`${styles.name} ${font.className}`}
          onClick={() => {
            smoothScroll(Sections.HOME);
          }}
        >
          {nameCollapsed ? "SZ" : "Sophie Zhang"}
        </div>
        <ul className={styles.links}>
          {!collapsed && (
            <>
              {/* Navigation links within page */}
              <li
                className={`${styles.link}`}
                style={{
                  color:
                    activeView === Sections.HOME
                      ? theme.palette.primary.main
                      : theme.palette.textColor.main,
                }}
                onClick={() => smoothScroll(Sections.HOME)}
              >
                <div>home</div>
              </li>
              <li
                className={`${styles.link}`}
                style={{
                  color:
                    activeView === Sections.PROJECTS
                      ? theme.palette.primary.main
                      : theme.palette.textColor.main,
                }}
                onClick={() => smoothScroll(Sections.PROJECTS)}
              >
                <div>projects</div>
              </li>
              <li
                className={`${styles.link}`}
                style={{
                  color:
                    activeView === Sections.SKILLS
                      ? theme.palette.primary.main
                      : theme.palette.textColor.main,
                }}
                onClick={() => smoothScroll(Sections.SKILLS)}
              >
                <div>skills</div>
              </li>
            </>
          )}
          {/* Link icons */}
          <ul className={styles.externalLinks}>
            <li className={styles.link}>
              <Link href="https://github.com/smallwhale1" target="_blank">
                <IconButton>
                  <AiFillGithub color={theme.palette.textColor.main} />
                </IconButton>
              </Link>
            </li>
            <Link
              href="https://www.linkedin.com/in/sophie-zhang-237428235/"
              target="_blank"
            >
              <li className={styles.link}>
                <IconButton>
                  <AiFillLinkedin color={theme.palette.textColor.main} />
                </IconButton>
              </li>
            </Link>
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
