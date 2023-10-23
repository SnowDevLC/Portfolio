import { Card } from "../index.js";
import style from './Projects.module.css';

export default function Projects() {
  return (
    <section className={style.projects}>
      <div className={style.container}>
          <Card />
      </div>
    </section>
  );
}