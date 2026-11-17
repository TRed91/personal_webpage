import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import AboutmeCard from "./components/aboutme/AboutmeCard.tsx";
import PortfolioPage from "./components/portfolio/portfolio.tsx";
import './App.css'
import {useState} from "react";

function App() {

    const [page, setPage] = useState("aboutme")

    const handlePageChange = (page: string) => {
        setPage(page);
    }

    return (
        <>
            <header>
                <Header setPage={handlePageChange} />
            </header>
            <main>
                {page === "aboutme" ? (
                    <AboutmeCard />
                ) : (
                    <PortfolioPage />
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App
