export type PortfolioCard = {
    title: string,
    description: string,
    img: string,
    github: string,
    link: string,
};

export type PortfolioCardProps = {
    card: PortfolioCard;
}