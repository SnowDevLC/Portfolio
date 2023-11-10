import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs, SiRedux, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiNodedotjs, SiPostgresql, SiMongodb } from "react-icons/si";
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
                                        Desarrollo aplicaciones en JavaScript y React, utilizando bibliotecas de
                                        interfaz de usuario y Node.js para BackEnd.
                                    </h1>
                                </div>
                                <div className={style.description}>
                                    <h3>Formado en Henry & UNL.</h3>
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
                                Desarrollo aplicaciones en JavaScript y React, utilizando bibliotecas de interfaz de
                                usuario y Node.js para BackEnd.
                            </h1>
                        </div>
                    </div>
                    <div className={style.bottomMobile}>
                        <div className={style.description}>
                            <h3>Formado en Henry & UTN.</h3>
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
                        <RiJavascriptFill className={style.logo}/>
                        <SiNextdotjs className={style.logo}/>
                        <RiReactjsFill className={style.logo}/>
                        <SiRedux className={style.logo}/>
                        <SiHtml5 className={style.logo}/>
                        <SiCss3 className={style.logo}/>
                        <SiTailwindcss className={style.logo}/>
                        <SiNodedotjs className={style.logo}/>
                        <SiPostgresql className={style.logo}/>
                        <SiMongodb className={style.logo}/>
                        <SiGit className={style.logo}/>
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
                        <div className={style.columns}>
                            <h2>Henry</h2>
                            <div className={style.descriptionBlock}>
                                <div className={style.position}>
                                    <h4>Desarrollador FullStack</h4>
                                    <label>2023</label>
                                </div>
                                <p>Dominar todas las fases del desarrollo web.</p>
                            </div>
                        </div>
                        <div className={style.columns}>
                            <h2>UTN</h2>
                            <div className={style.descriptionBlock}>
                                <div className={style.position}>
                                    <h4>Progamación Web Inicial</h4>
                                    <label>2023</label>
                                </div>
                                <p>Aprender los fundamentos tecnológicos centrales para llevar a cabo la producción de sitios web.</p>
                            </div>
                        </div>
                        <div className={style.columns}>
                            <h2>UADER</h2>
                            <div className={style.descriptionBlock}>
                                <div className={style.position}>
                                    <h4>Licenciatura en Sistemas de Información</h4>
                                    <label>2015 - 2019</label>
                                </div>
                                <p>Diseñar, gestionar y asegurar sistemas de software y redes de comunicaciones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
