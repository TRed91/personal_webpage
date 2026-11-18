import type {PortfolioCardProps} from "../type_card.ts";
import "./card.css"
import githubIcon from '../../../assets/github-142-svgrepo-com.svg';

function Card({card}: PortfolioCardProps) {
    return (
        <>
            <div className="card">
                <div className="card_main" >
                    <img src={card.img} alt={`image for ${card.title} project`} className="card-img" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <ul>
                        <li>
                            <a href={card.github} target="_blank">
                                <img src={githubIcon} alt={`${card.title} github link`} className="icon" />
                                Github
                            </a>
                        </li>
                        {card.link.length > 0 ? <li>
                            <a href={card.link} target="_blank">Live link</a>
                        </li> : null}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card