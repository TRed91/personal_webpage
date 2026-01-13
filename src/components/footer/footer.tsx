import './footer.css'
import githubIcon from '../../assets/github-142-svgrepo-com.svg';
import linkedInIcon from '../../assets/linkedin-linked-in-svgrepo-com.svg';
import emailIcon from '../../assets/email-8-svgrepo-com.svg'

function Footer () {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://github.com/TRed91">
                    <img src={githubIcon} alt="github logo" className="icon" />
                    Github
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/thomas-roth-90b91531b">
                    <img src={linkedInIcon} alt="github logo" className="icon"/>
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a href="mailto:thomas.roth@aon.at" >
                    <img src={emailIcon} alt="github logo" className="icon"/>
                    EMail
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer