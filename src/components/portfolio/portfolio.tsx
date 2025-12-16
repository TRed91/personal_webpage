import type {PortfolioCard} from "./type_card.ts";
import Card from "./cards/card.tsx";
import {cards} from "./cards/cards.ts";
import "./portfolio.css"

function PortfolioPage() {
    return (
        <>
            <div className="portfolio-container">
                <h2 className={"highlight"}>Portfolio</h2>
                <div className="cards-container">
                    {cards.map((card: PortfolioCard) => {
                        return (
                            <Card card={card}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PortfolioPage