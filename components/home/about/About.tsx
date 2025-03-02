import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Enea, a budding software developer with a passion for
              crafting code. Originally hailing from Tirana, Albania, I&apos;m
              diving deep into the world of software development. I have a knack
              for backend technologies, especially diving into the intricacies
              of Node.js and Python, but I&apos;m always eager to explore new
              tools and frameworks.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently, I&apos;m honing my skills as a software developer
              at a dynamic startup, where I&apos;m getting hands-on experience
              with cutting-edge technologies and contributing to exciting
              projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Beyond the realm of coding, I&apos;m an avid learner and a
              creative soul. In my free time, you&apos;ll often find me
              experimenting with new programming languages or diving into art
              projects. I believe that the blend of creativity and logic is what
              sets great engineers apart.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always on the lookout for opportunities to grow both
              personally and professionally. If you have an exciting project or
              position where I can contribute my skills and creativity, I&apos;d
              love to connect and explore possibilities together.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
