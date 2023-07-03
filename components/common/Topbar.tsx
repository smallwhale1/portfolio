import styles from "./Topbar.module.scss";
import Link from "next/link";
import { IconButton, useTheme } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { Allura } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { Sections } from "@/util/enums";
import { InViewContext } from "@/contexts/InViewContext";
import { BiX } from "react-icons/bi";

const font = Allura({ subsets: ["latin"], weight: ["400"] });

// Tailwind Zinc
const navbarColor = "#27272a";

interface TopbarProps {
  smoothScroll: (section: Sections) => void;
  showNav: boolean;
}

const Topbar = ({ smoothScroll, showNav }: TopbarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nameCollapsed, setNameCollapsed] = useState(false);
  const theme = useTheme();
  const { activeView } = useContext(InViewContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setShowNavbar(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.topbarContainer} ${
        showNavbar && showNav && styles.fadeIn
      }`}
      style={
        !scrolledDown
          ? { backgroundColor: theme.palette.bgColor.main, height: "8rem" }
          : { backgroundColor: navbarColor, height: "6rem" }
      }
    >
      <nav
        className={styles.topbar}
        style={!scrolledDown ? { height: "8rem" } : { height: "6rem" }}
      >
        <div
          className={`${styles.name} ${font.className}`}
          onClick={() => {
            smoothScroll(Sections.HOME);
          }}
          style={{
            color: scrolledDown ? "#ffffff" : theme.palette.textColor.main,
          }}
        >
          {nameCollapsed ? "SZ" : "Sophie Zhang"}
        </div>
        <ul className={`${styles.links} ${font.className}`}>
          {!collapsed && (
            <>
              {/* Navigation links within page */}
              <li
                className={`${styles.link}`}
                style={{
                  color:
                    activeView === Sections.HOME
                      ? theme.palette.primary.main
                      : scrolledDown
                      ? "#ffffff"
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
                      : scrolledDown
                      ? "#ffffff"
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
                      : scrolledDown
                      ? "#ffffff"
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
                  <AiFillGithub
                    color={
                      scrolledDown ? "#ffffff" : theme.palette.textColor.main
                    }
                  />
                </IconButton>
              </Link>
            </li>
            <Link
              href="https://www.linkedin.com/in/sophie-zhang-237428235/"
              target="_blank"
            >
              <li className={styles.link}>
                <IconButton>
                  <AiFillLinkedin
                    color={
                      scrolledDown ? "#ffffff" : theme.palette.textColor.main
                    }
                  />
                </IconButton>
              </li>
            </Link>
            {collapsed && (
              <li className={styles.link}>
                <IconButton
                  onClick={() => {
                    setMenuOpen(true);
                  }}
                >
                  <AiOutlineMenu
                    color={
                      scrolledDown ? "#ffffff" : theme.palette.textColor.main
                    }
                  />
                </IconButton>
              </li>
            )}
          </ul>
        </ul>
        {
          <div
            className={`${styles.collapsedMenu} ${
              menuOpen && styles.collapsedMenuShown
            }`}
          >
            <IconButton
              onClick={() => {
                setMenuOpen(false);
              }}
              sx={{ alignSelf: "flex-end" }}
            >
              <BiX />
            </IconButton>
            <ul className={styles.menu}>
              {/* Navigation links within page */}
              <li
                className={`${styles.menuLink}`}
                onClick={() => {
                  setMenuOpen(false);
                  smoothScroll(Sections.HOME);
                }}
              >
                <div>home</div>
              </li>
              <li
                className={`${styles.menuLink}`}
                onClick={() => {
                  setMenuOpen(false);
                  smoothScroll(Sections.PROJECTS);
                }}
              >
                <div>projects</div>
              </li>
              <li
                className={`${styles.menuLink}`}
                onClick={() => {
                  setMenuOpen(false);
                  smoothScroll(Sections.SKILLS);
                }}
              >
                <div>skills</div>
              </li>
            </ul>
          </div>
        }
      </nav>
    </div>
  );
};

export default Topbar;
