import './header.css'

function Header() {
    return (
        <>
            <header className="pageHeader">
                <h2 className={"highlight"}>Thomas' Landing Page</h2>
                <ul className="pageHeader_links">
                    <li>Portfolio</li>
                    <li>Blog</li>
                </ul>
            </header>
        </>
    )
}

export default Header;