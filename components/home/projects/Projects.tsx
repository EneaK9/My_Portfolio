import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Live News Website",
    imgSrc: "project-imgs/Live_News_Web.png",
    code: "https://github.com/EneaK9/Live-News",
    projectLink: "https://live-news-app-alb.vercel.app",
    tech: ["React", "Tailwind", "Typescript"],
    description:
      "Stay informed with the latest news updates in real-time with our Live News Website. Our platform provides up-to-the-minute coverage of global events, breaking news, and trending stories. Built using React, Tailwind, and Typescript, our website offers a sleek and intuitive user interface for seamless navigation. Powered by Firebase, our backend ensures reliable and scalable data management, delivering a smooth and responsive experience to users. Explore diverse news categories, customize your preferences, and stay connected to the world around you with our Live News Website.",
    modalContent: (
      <>
        <p>
          Stay informed with the latest news updates in real-time with our Live
          News Website. Our platform provides up-to-the-minute coverage of
          global events, breaking news, and trending stories. Built using React,
          Tailwind, and Typescript, our website offers a sleek and intuitive
          user interface for seamless navigation. Explore diverse news
          categories, customize your preferences, and stay connected to the
          world around you with our Live News Website.
        </p>
        <p>
          Our Live News Website is designed to keep you informed and engaged,
          whether you&apos;re at home or on the go. With a simple and elegant
          design, you can easily access the latest news articles, videos, and
          updates from your favorite sources. Whether you&apos;re interested in
          politics, sports, technology, or entertainment, our platform has you
          covered.
        </p>
        <p>
          Experience the future of news delivery with our Live News Website.
          Join thousands of users worldwide who rely on our platform for
          accurate, timely, and relevant news coverage. Stay ahead of the curve
          and discover the stories that matter most to you with our Live News
          Website.
        </p>
      </>
    ),
  },
  {
    title: "LinkedIn Clone ",
    imgSrc: "project-imgs/LinkedIn_Clone.png",
    code: "https://github.com/EneaK9/Linkedin-clone-project",
    projectLink: "https://linkedin-clone-d0c1c.web.app",
    tech: ["React", "Typescript", "Tailwind", "Firebase", "Redux"],
    description:
      "Experience the power of professional networking with our LinkedIn Clone. Connect with professionals, showcase your skills, and explore career opportunities in your industry. Built using React, Typescript, Tailwind, Firebase, and Redux, our platform offers a seamless and intuitive user experience for building your professional network. Whether you're looking for job opportunities, seeking professional advice, or expanding your network, our LinkedIn Clone has you covered. Join thousands of users worldwide and take your career to the next level with our LinkedIn Clone.",
    modalContent: (
      <>
        <p>
          Experience the power of professional networking with our LinkedIn
          Clone. Connect with professionals, showcase your skills, and explore
          career opportunities in your industry.
        </p>
        <p>
          Our LinkedIn Clone is built using React, Typescript, Tailwind,
          Firebase, and Redux, providing a seamless and intuitive user
          experience for building your professional network.
        </p>
        <p>
          Whether you&apos;re a seasoned professional or just starting your
          career, our platform offers the tools and resources you need to
          succeed. Join thousands of users worldwide and take your career to the
          next level with our LinkedIn Clone.
        </p>
      </>
    ),
  },
 
];
