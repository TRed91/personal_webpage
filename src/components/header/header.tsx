import './header.css'

interface HeaderProps {
    setPage: (page: string) => void;
    setLanguage: (language: string) => void;
    lang: string;
}

function Header( {setPage, setLanguage, lang} : HeaderProps ) {
    return (
        <>
            <div className="pageHeader">
                <a onClick={() => setPage("aboutme")}><h2 className={"highlight link"}>Thomas' Landing Page</h2></a>
                <ul className="pageHeader_links">
                    <li><a onClick={() => setPage("portfolio")} className="link">Portfolio</a></li>
                    {/*<li>Blog</li>*/}
                </ul>
                <ul className="langButtons">
                    <li>
                        <a onClick={ () => setLanguage("en")}
                           style = {lang === "en" ? {textDecoration: "underline"} : {textDecoration: "none"}}
                            className="link">
                            en
                        </a>
                    </li>
                    <li>
                        <a onClick={ () => setLanguage("de")}
                           style = {lang === "de" ? {textDecoration: "underline"} : {textDecoration: "none"}}
                        className="link">
                            de
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;