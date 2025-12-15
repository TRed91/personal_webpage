import AboutmeCard from "./components/aboutme/AboutmeCard.tsx";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/Header.tsx";
import './App.css'

function App() {

  return (
    <>
        <Header />
        <main>
            <AboutmeCard />
        </main>
        <Footer />
    </>
  )
}

export default App
