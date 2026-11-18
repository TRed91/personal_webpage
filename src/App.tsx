import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import AboutmeCard from "./components/aboutme/AboutmeCard.tsx";
import PortfolioPage from "./components/portfolio/portfolio.tsx";
import './App.css'
import {useState} from "react";

function App() {

    const [page, setPage] = useState("aboutme")
    const [language, setLanguage] = useState("en");

    const handlePageChange = (page: string) => {
        setPage(page);
    }

    const handleLanguageChange = (language: string) => {
        setLanguage(language);
    }

    return (
        <>
            <header>
                <Header setPage={handlePageChange} setLanguage={handleLanguageChange} lang={language} />
            </header>
            <main>
                {page === "aboutme" ? (
                    <AboutmeCard lang={language} />
                ) : (
                    <PortfolioPage lang={language} />
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App
