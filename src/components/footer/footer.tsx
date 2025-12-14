import './footer.css'

function Footer () {
    return (
        <footer>
            <h4>Contact Me</h4>
            <ul>
                <li>
                    <a href="https://github.com/TRed91">
                    <img src="src/assets/github-142-svgrepo-com.svg" alt="github logo" className="icon" />
                    Github
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/thomas-roth-90b91531b">
                    <img src="src/assets/linkedin-linked-in-svgrepo-com.svg" alt="github logo" className="icon"/>
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a href="mailto:thomas.roth@aon.at" >
                    <img src="src/assets/email-8-svgrepo-com.svg" alt="github logo" className="icon"/>
                    EMail
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer