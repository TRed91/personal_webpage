import type {PortfolioCardProps} from "../type_card.ts";
import "./card.css"

function Card({card}: PortfolioCardProps) {
    return (
        <>
            <div className="card">
                <img src={card.img} alt={`image for ${card.title} project`} className="card-img" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                    <li>
                        <a href={card.github} target="_blank">
                            <img src="src/assets/github-142-svgrepo-com.svg" alt={`${card.title} github link`} className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Card