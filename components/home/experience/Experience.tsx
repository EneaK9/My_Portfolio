import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
  title: "Funnels-App",
  position: "Front-End Developer",
  time: "2023 - Present",
  location: "Albania",
  description: "As a Front-End Developer, I play a key role in designing and developing the website for our innovative platform. Funnels-App is a comprehensive sales funnel management tool that helps businesses streamline their sales processes and maximize conversions. My responsibilities include implementing user interface designs, optimizing website performance, and ensuring seamless user experiences across various devices and browsers.",
  tech: [
    "React",
    "Typescript",
    "Tailwind CSS",
    "Next.js"
  ],
},
  
];
