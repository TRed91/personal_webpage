import './header.css'

function Header() {
    return (
        <>
            <div className="pageHeader">
                <a href="/"><h2 className={"highlight"}>Thomas' Landing Page</h2></a>
                <ul className="pageHeader_links">
                    <li><a href="portfolio">Portfolio</a></li>
                    <li>Blog</li>
                </ul>
            </div>
        </>
    )
}

export default Header;