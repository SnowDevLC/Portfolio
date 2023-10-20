import { BsArrowUpRight } from 'react-icons/bs';
import style from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={style.container}>
            <div className={style.logoText}>
                <h2 className={style.textLogo}>Luis Canales</h2>
                <h3 className={style.underTextLogo}>FullStack Developer</h3>
            </div>
            <div className={style.nav}>
              <a className={style.navToggle} href="/">Work</a>
              <a className={style.navToggle} href="/info">Info</a>
            </div>
            <div className={style.social}>
              <a className={style.socialNav} href="https://www.linkedin.com/in/canalesluis9/">LinkedIn<BsArrowUpRight /></a>
              <a className={style.socialNav} href="https://github.com/SnowDevLC">GitHub<BsArrowUpRight /></a>
              <a className={style.socialNav} href="https://drive.google.com/file/d/1HI6tna5YOVspn_lPmQGycFrLtUzFVNDr/view?usp=share_link" target='blank'>CV<BsArrowUpRight /></a>
            </div>
        </div>
    );
}
