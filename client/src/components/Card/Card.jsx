/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import {
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypescript,
  SiJavascript,
  SiReact
} from "react-icons/si";

export default function Card({ project }) {
  const { name, description, company, position, age, skills, github, isDeploy, deploy, image, bgColor } = project;

  return (
    <article className={style.cardOutline}>
      <div className={style.topLight}></div>
      <a href={isDeploy ? deploy : github} target="blank" className={`${style.card} ${style.inBlock}`}>
        <div className={style.topLight}></div>
        <div className={style.top}>
          <div className={style.titleRow}>
            <h2 className={style.title}>{name}</h2>
            <BsArrowRight className={style.arrow} />
          </div>
          <div className={style.description}>
            <span className={style.company}>
              {company}, {age}&nbsp;
            </span>
            - {description}
          </div>
          <div className={style.description}>
            <span className={style.company}>Puesto&nbsp;</span>- {position}
          </div>
          <div className={style.skills}>
            <span className={style.company}>Tecnologias</span>-
            <div className={style.skillsContent}>
              {skills &&
                skills.map(
                  (skill, index) =>
                    (skill === "JavaScript" && (
                      <SiJavascript key={index} className={style.logo} title="JavaScript" />
                    )) ||
                    (skill === "TypeScript" && (
                      <SiTypescript key={index} className={style.logo} title="TypeScript" />
                    )) ||
                    (skill === "Next.js" && <SiNextdotjs key={index} className={style.logo} title="Next.js" />) ||
                    (skill === "React.js" && <SiReact key={index} className={style.logo} title="React" />) ||
                    (skill === "HTML" && <SiHtml5 key={index} className={style.logo} title="HTML5" />) ||
                    (skill === "CSS" && <SiCss3 key={index} className={style.logo} title="CSS3" />) ||
                    (skill === "Tailwind" && <SiTailwindcss key={index} className={style.logo} title="Tailwind" />) ||
                    (skill === "Node.js" && <SiNodedotjs key={index} className={style.logo} title="Node.js" />) ||
                    (skill === "Prisma" && <SiPrisma key={index} className={style.logo} title="Prisma" />) ||
                    (skill === "PostgreSQL" && (
                      <SiPostgresql key={index} className={style.logo} title="PostgreSQL" />
                    )) || null
                )}
            </div>
          </div>
        </div>
        <img src={image} alt="" className={style.image} />
        <div className={style.bgColor} style={{ backgroundImage: bgColor }}></div>
      </a>
    </article>
  );
}
