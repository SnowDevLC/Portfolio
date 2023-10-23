import style from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function Card() {
    return (
        <div className={style.cardOutline}>
            <a href="" className={style.card}>
                <div className={style.top}>
                    <div className={style.titleRow}>
                        <h2 className={style.title}>Descuentos Ya!</h2>
                        <BsArrowRight size={30}/>
                    </div>
                    <h4 className={style.description}>Henry, 2023 - Aplicacion de descuentos</h4>
                </div>
                <img src="" alt="" />
                <div className={style.bgColor}></div>
            </a>
        </div>
    );
}
