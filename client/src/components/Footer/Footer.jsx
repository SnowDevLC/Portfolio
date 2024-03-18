import { BsArrowUpRight, BsFileCodeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <div className={style.footerTop}>
                    <BsFileCodeFill className={style.logo} />
                    <div className={style.containerLinks}>
                        <div className={style.links}>
                            <label>MENU</label>
                            <div className={style.linksColumn}>
                                <Link to="/" preventScrollReset={true} className={style.social}>Sobre Mí</Link>
                                <Link to="/projects" preventScrollReset={true} className={style.social}>Projectos</Link>
                            </div>
                        </div>
                        <div className={style.links}>
                            <label>CONTACTO</label>
                            <div className={style.linksColumn}>
                                <a
                                    className={style.social}
                                    href="https://www.linkedin.com/in/canalesluis9/"
                                    target="blank"
                                >
                                    LinkedIn
                                    <BsArrowUpRight />
                                </a>
                                <a className={style.social} href="https://github.com/SnowDevLC" target="__blank">
                                    GitHub
                                    <BsArrowUpRight />
                                </a>
                                <a
                                    className={style.social}
                                    href="https://drive.google.com/file/d/1HI6tna5YOVspn_lPmQGycFrLtUzFVNDr/view?usp=share_link"
                                    target="___blank"
                                >
                                    CV
                                    <BsArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.footerBottom}>
                    <span>© 2023 Luis Canales. Todos los Derechos Reservados.</span>
                    <span className={style.update}>Última actualización por Luis Canales en Marzo de 2024.</span>
                </div>
            </div>
        </footer>
    );
}
