import type {PortfolioCard} from "./type_card.ts";
import Card from "./cards/card.tsx";
import {cardsGerman, cardsEnglish} from "./cards/portfolioCards.ts";
import "./portfolio.css"

interface PortfolioProps {
    lang: string;
}

function PortfolioPage({lang} : PortfolioProps ) {

    const cards: PortfolioCard[] = lang === "en" ? cardsEnglish : cardsGerman;

    return (
        <>
            <div className="portfolio-container">
                <h2 className={"highlight"}>Portfolio</h2>
                <div className="cards-container">
                    {cards.map((card: PortfolioCard) => {
                        return (
                            <Card card={card} key={card.title}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PortfolioPage