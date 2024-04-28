import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Enea<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>Junior Software Engineer</h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            With 1 year of hands-on experience in software engineer, I&apos;ve
            honed my skills in crafting robust and scalable solutions. From
            backend development with languages like Python and Java to frontend
            technologies like React and Javascript, I&apos;m adept at navigating the full
            stack. I thrive on solving complex problems and collaborating with
            talented teams to deliver innovative software products. Let&apos;s
            connect and bring your ideas to life!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>

      <DotGrid />
    </section>
  );
};
