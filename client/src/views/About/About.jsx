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
  SiReact,
  SiPhp,
} from "react-icons/si";
import { studies } from "../../assets/db.js";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.mainContainer}>
      <section className={style.about}>
        <div className={style.container}>
          <div className={style.cardOutline}>
            <div className={style.topLight}></div>
            <div className={style.card}>
              <div className={style.topLight}></div>
              <div className={style.textContent}>
                <div className={style.title}>
                  <h1>
                    Creo aplicaciones web completas, desde el diseño de interfaces hasta el desarrollo de backends,
                    asegurando soluciones funcionales y escalables para diversas necesidades.
                  </h1>
                </div>
                <div className={style.description}>
                  <h3>Formado en UADER & UTN.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.aboutMobile}>
        <div className={style.containerMobile}>
          <div className={style.topMobile}>
            <div className={style.name}>
              <div className={style.point}></div>
              <h3>Luis Canales &lt;FullStack Developer/&gt;</h3>
            </div>
            <div className={style.title}>
              <h1>
                Creo aplicaciones web completas, desde el diseño de interfaces hasta el desarrollo de backends,
                asegurando soluciones funcionales y escalables para diversas necesidades.
              </h1>
            </div>
          </div>
          <div className={style.bottomMobile}>
            <div className={style.description}>
              <h3>Formado en UADER & UTN.</h3>
            </div>
          </div>
        </div>
        <div className={style.divider}></div>
      </section>
      <section className={style.studies}>
        <div className={style.studiesContainer}>
          <div className={style.name}>
            <div className={style.point}></div>
            <h3>HABILIDADES</h3>
          </div>
          <div className={style.skillsContent}>
            <SiJavascript className={style.logo} title="JavaScript" />
            <SiTypescript className={style.logo} title="TypeScript" />
            <SiNextdotjs className={style.logo} title="Next.js" />
            <SiReact className={style.logo} title="React" />
            <SiRedux className={style.logo} title="Redux" />
            <SiHtml5 className={style.logo} title="HTML5" />
            <SiCss3 className={style.logo} title="CSS3" />
            <SiTailwindcss className={style.logo} title="Tailwind" />
            <SiNodedotjs className={style.logo} title="Node.js" />
            <SiPhp className={style.logo} title="PHP" />
            <SiPostgresql className={style.logo} title="PostgreSQL" />
            <SiPrisma className={style.logo} title="Prisma" />
            <SiMongodb className={style.logo} title="MongoDB" />
            <SiGit className={style.logo} title="Git" />
          </div>
        </div>
      </section>
      <section className={style.studies}>
        <div className={style.studiesContainer}>
          <div className={style.divider}></div>
          <div className={style.name}>
            <div className={style.point}></div>
            <h3>ESTUDIOS</h3>
          </div>
          <div className={style.studiesContent}>
            {studies?.map((study, index) => (
              <div className={style.columns} key={index}>
                <h2>{study.institution}</h2>
                <div className={style.descriptionBlock}>
                  <div className={style.position}>
                    <h4>{study.carrer}</h4>
                    <label>{study.age}</label>
                  </div>
                  <p>{study.skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
