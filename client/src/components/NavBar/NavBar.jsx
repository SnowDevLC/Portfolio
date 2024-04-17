import { BsArrowUpRight, BsFileCodeFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import style from "./NavBar.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState({ about: true, project: false });
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setIsActive({about: true, project: false});
        }
        else if (location.pathname === "/projects"){
            setIsActive({about: false, project: true});
        }
      }, [location.pathname]);

    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav>
            <div className={style.sectionNav}>
                <div className={style.navBar}>
                    <div className={style.navLeft}>
                        <Link to="/" className={style.logoBlock}>
                            <BsFileCodeFill className={style.logo} />
                            <div className={style.logoText}>
                                <h2 className={style.textLogo}>Luis Canales</h2>
                                <h3 className={style.underTextLogo}>FullStack Developer</h3>
                            </div>
                        </Link>
                    </div>
                    <div className={style.navMiddle}>
                        <div className={style.navButtons}>
                            <Link className={`${style.navToggle} ${isActive.about ? style.active : style.navToggleAbout}`} to="/" onClick={handleScrollTop} >
                                Sobre Mí
                            </Link>
                            <Link className={`${style.navToggle} ${isActive.project ? style.active : style.navToggleProject}`} to="/projects" onClick={handleScrollTop} >
                                Proyectos
                            </Link>
                        </div>
                    </div>
                    <div className={style.navRight}>
                        <div className={style.socialsNav}>
                            <a className={style.social} href="https://www.linkedin.com/in/canalesluis9/" target="blank">
                                LinkedIn
                                <BsArrowUpRight />
                            </a>
                            <a className={style.social} href="https://github.com/SnowDevLC" target="__blank">
                                GitHub
                                <BsArrowUpRight />
                            </a>
                            <a
                                className={style.social}
                                href="https://drive.google.com/file/d/1GR6j6Xlmg9XYjInKLJ30fLf0EoMA3WZE/view?usp=drive_link"
                                target="___blank"
                            >
                                CV
                                <BsArrowUpRight />
                            </a>
                        </div>
                        <button
                            className={`${style.menuSocial} ${isOpen && style.open}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <FiLink size={28} className={`${style.popupOpen} ${isOpen && style.open}`} />
                            <VscChromeClose size={30} className={`${style.popupClose} ${isOpen && style.open}`} />
                        </button>
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
