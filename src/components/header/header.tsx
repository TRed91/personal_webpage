import './header.css'

interface pageSetter {
    setPage: (page: string) => void;
}

function Header( {setPage}: pageSetter ) {
    return (
        <>
            <div className="pageHeader">
                <a onClick={() => setPage("aboutme")}><h2 className="highlight">Thomas' Landing Page</h2></a>
                <ul className="pageHeader_links">
                    <li><a onClick={() => setPage("portfolio")}>Portfolio</a></li>
                    {/*<li>Blog</li>*/}
                </ul>
            </div>
        </>
    )
}

export default Header;