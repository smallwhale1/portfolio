import Image from "next/image";
import styles from "./Home.module.scss";
import HBarText from "./HBarText";
import { useContext, useEffect, useState } from "react";

const Home = () => {
  const [centered, setCentered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setCentered(true);
      } else {
        setCentered(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imgLoaded) return;
    setTimeout(() => {
      setTextVisible(true);
    }, 1000);
  }, [imgLoaded]);

  // useEffect(() => {
  //   if (inView) {
  //     setActiveView(Sections.HOME);
  //   }
  // }, [inView]);

  return (
    <div className={styles.home}>
      <div className={styles.bg}>
        <Image
          onLoad={() => setImgLoaded(true)}
          className={`${styles.bgImg} ${imgLoaded && styles.bgImgLoaded}`}
          src="/assets/images/bg.jpg"
          alt="wall with bike and flowers"
          priority
          fill
        />
        <div
          className={`${styles.overlay} ${imgLoaded && styles.bgOverlayLoaded}`}
        ></div>
        <div className={`${styles.text} ${textVisible && styles.textVisible}`}>
          <HBarText text="hi there!" center={centered} />
          <h1>I'm Sophie.</h1>
          <h2>
            I'm a junior at Brown University {!centered && <br />} studying
            computer science.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;