import style from "./About.module.css";

export default function About() {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.cardOutline}>
                    <div className={style.topLight}></div>
                    <div className={`${style.card} ${style.inBlock}`}>
                        <div className={style.topLight}></div>
                        <div className={style.title}>
                          <h1>Fullstack Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
