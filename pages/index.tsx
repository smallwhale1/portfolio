import Head from "next/head";
import { Source_Sans_3 } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Topbar from "@/components/common/Topbar";
import Home from "@/components/home/Home";
import { useTheme } from "@mui/material";

const font = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Main() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Sophie Zhang's Website</title>
        <meta name="description" content="My portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${font.className}`}
        style={{ backgroundColor: theme.palette.bgColor.main }}
      >
        <Topbar />
        <Home />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
