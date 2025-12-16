import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import {Outlet} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default App
