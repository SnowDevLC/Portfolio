import { Card } from "../../components/index.js";
import style from './Projects.module.css';

import { projects } from "../../assets/db.js";

export default function Projects() {
  return (
    <section className={style.projects}>
      <div className={style.container}>
        {projects?.map((project, index) => {
          return <Card key={index} project={project} />
        })}
      </div>
    </section>
  );
}
