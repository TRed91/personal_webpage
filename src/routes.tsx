import App from './App';
import AboutmeCard from "./components/aboutme/AboutmeCard.tsx";
import PortfolioPage from "./components/portfolio/portfolio.tsx";

const routes = [
    {
        path: 'personal_webpage',
        element: <App/>,
        children: [
            {index: true, element: <AboutmeCard/>},
            {path: "portfolio", element: <PortfolioPage/>},
        ]
    }
]

export default routes;