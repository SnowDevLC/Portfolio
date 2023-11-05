import style from "./About.module.css";

export default function About() {
    return (
        <>
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
                            <h3>Formado en Henry & UNL.</h3>
                        </div>
                    </div>
                </div>
                <div className={style.divider}></div>
            </section>
        </>
    );
}
