import { BsArrowUpRight, BsFileCodeFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import style from "./NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className={style.sectionNav}>
                <div className={style.navBar}>
                    <div className={style.navLeft}>
                        <div className={style.logoBlock}>
                            <BsFileCodeFill className={style.logo} />
                            <div className={style.logoText}>
                                <h2 className={style.textLogo}>Luis Canales</h2>
                                <h3 className={style.underTextLogo}>FullStack Developer</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.navMiddle}>
                        <div className={style.navButtons}>
                            <a className={style.navToggle} href="/">
                                Sobre Mí
                            </a>
                            <a className={style.navToggle} href="/projects">
                                Proyectos
                            </a>
                        </div>
                    </div>
                    <div className={style.navRight}>
                        <div className={style.socialsNav}>
                            <a className={style.social} href="https://www.linkedin.com/in/canalesluis9/" target="blank">
                                LinkedIn
                                <BsArrowUpRight />
                            </a>
                            <a className={style.social} href="https://github.com/SnowDevLC" target="blank">
                                GitHub
                                <BsArrowUpRight />
                            </a>
                            <a
                                className={style.social}
                                href="https://drive.google.com/file/d/1HI6tna5YOVspn_lPmQGycFrLtUzFVNDr/view?usp=share_link"
                                target="blank"
                            >
                                CV
                                <BsArrowUpRight />
                            </a>
                        </div>
                        <a
                            href="#"
                            className={`${style.menuSocial} ${isOpen && style.open}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FiLink size={28} className={`${style.popupOpen} ${isOpen && style.open}`} />
                            <VscChromeClose size={30} className={`${style.popupClose} ${isOpen && style.open}`} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${style.popupMenu} ${isOpen && style.open}`}>
                <a className={style.socialMenu} href="https://www.linkedin.com/in/canalesluis9/" target="blank">
                    LinkedIn
                    <BsArrowUpRight />
                </a>
                <a className={style.socialMenu} href="https://github.com/SnowDevLC" target="blank">
                    GitHub
                    <BsArrowUpRight />
                </a>
                <a
                    className={style.socialMenu}
                    href="https://drive.google.com/file/d/1HI6tna5YOVspn_lPmQGycFrLtUzFVNDr/view?usp=share_link"
                    target="blank"
                >
                    CV
                    <BsArrowUpRight />
                </a>
            </div>
        </nav>
    );
}
