import Head from "next/head";
import { Source_Sans_3 } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Topbar from "@/components/common/Topbar";
import Home from "@/components/home/Home";
import { useTheme } from "@mui/material";
import { Sections } from "@/util/enums";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { InViewContext } from "@/contexts/InViewContext";

const font = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Main() {
  const theme = useTheme();
  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<Sections>(Sections.HOME);
  const [contentVisible, setContentVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const smoothScroll = (section: Sections) => {
    let element: HTMLElement | undefined;

    switch (section) {
      case Sections.HOME:
        if (!homeRef.current) return;
        element = homeRef.current;
        break;
      case Sections.PROJECTS:
        if (!projectRef.current) return;
        element = projectRef.current;
        break;
      case Sections.SKILLS:
        if (!skillsRef.current) return;
        element = skillsRef.current;
        break;
    }

    if (element) {
      const { top } = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetTop = scrollTop + top - 150;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeBox = homeRef.current?.getBoundingClientRect();
      const projectsBox = projectRef.current?.getBoundingClientRect();
      const skillsBox = skillsRef.current?.getBoundingClientRect();
      const vh = window.innerHeight;

      if (!homeBox || !projectsBox || !skillsBox) return;

      // Calculate the distance from the top of the viewport
      const homeFromTop = homeBox.top;
      const projectsFromTop = projectsBox.top;
      const skillsFromTop = skillsBox.top;

      const viewPoint = vh / 2;

      if (skillsFromTop < viewPoint) {
        setActiveView(Sections.SKILLS);
      } else if (projectsFromTop < viewPoint) {
        setActiveView(Sections.PROJECTS);
      } else {
        setActiveView(Sections.HOME);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sophie Zhang&apos;s Portfolio Website</title>
        <meta name="description" content="My portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InViewContext.Provider
        value={{ activeView: activeView, setActiveView: setActiveView }}
      >
        <main
          className={`${styles.main} ${font.className}`}
          style={{ backgroundColor: theme.palette.bgColor.main }}
        >
          <Topbar smoothScroll={smoothScroll} showNav={navVisible} />
          <div ref={homeRef}>
            <Home
              setNavVisible={setNavVisible}
              setContentVisible={setContentVisible}
            />
          </div>
          <div
            className={`${styles.content} ${
              contentVisible && styles.fadeInLeft
            }`}
          >
            <div ref={projectRef}>
              <Projects />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
          </div>
        </main>
      </InViewContext.Provider>
    </>
  );
}
