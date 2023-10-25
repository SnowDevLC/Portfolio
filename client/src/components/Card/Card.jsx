/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function Card({project}) {
    
    const {name, description, company, age, link, image} = project;
    
    return (
        <div className={style.cardOutline}>
            <div className={style.topLight}></div>
            <a href={link} target="blank" className={`${style.card} ${style.inBlock}`}>
                <div className={style.topLight}></div>
                <div className={style.top}>
                    <div className={style.titleRow}>
                        <h2 className={style.title}>{name}</h2>
                        <BsArrowRight className={style.arrow}/>
                    </div>
                    <div className={style.description}>
                        <span className={style.company}>{company}, {age}&nbsp;</span>- {description}
                    </div>
                </div>
                <img src={image} alt="" className={style.image} />
                <div className={style.bgColor}></div>
            </a>
        </div>
    );
}
