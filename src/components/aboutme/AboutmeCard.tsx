import './aboutme_card.css'
import profilePic from '../../assets/profile_pic.jpg';

interface AboutmeCardProps {
    lang: string;
}

function AboutmeCard({lang} :AboutmeCardProps){

    if (lang == "en") {
        return (
            <>
                <div className="aboutme_card">
                    <div>
                        <h2>Hi, I'm <span className={"highlight"}>Thomas Roth</span></h2>
                        <h4>Software- and Web Developer</h4>
                        <p className={"textbox"}>
                            I learned software and web development from
                            various sources like the <a href="https://www.theodinproject.com" target={"_blank"}>Odin
                            Project</a>,
                            <a href="https://www.skillfoundry.io" target={"_blank"}> Skill Foundry</a>,
                            <a href="https://neetcode.io" target={"_blank"}>
                                NeetCode
                            </a> and <a href="https://boot.dev" target={"_blank"}>
                            Boot.dev
                        </a>, as well as various books.
                        </p>
                        <p className={"textbox"}>
                            Coding has quickly become a passion for me and I'm always glad
                            to get to work on another project.
                        </p>
                        <p className={"textbox"}>
                            Since September 2026 I'm also visiting Corders.Bay in Vienna to get my diploma as a
                            Fullstack Developer.
                        </p>
                    </div>
                    <img src={profilePic} alt="a picture of the Author" className="aboutme_card_pic"/>
                </div>
            </>
        )
    } else return (
        <>
            <div className="aboutme_card">
                <div>
                    <h2>Hallo, Ich bin <span className={"highlight"}>Thomas Roth</span></h2>
                    <h4>Software- und Web Developer</h4>
                    <p className={"textbox"}>
                        Ich habe Software- und Web Development von verschieden Quellen gelernt, wie
                        <a href="https://www.theodinproject.com" target={"_blank"}> Odin Project</a>,
                        <a href="https://www.skillfoundry.io" target={"_blank"}> Skill Foundry</a>,
                        <a href="https://neetcode.io" target={"_blank"}> NeetCode</a> und
                        <a href="https://boot.dev" target={"_blank"}> Boot.dev</a>, sowie verschiedenen Büchern.
                    </p>
                    <p className={"textbox"}>
                        Mittlerweile ist programmieren eine Leidenschaft von mir. Ich code auch in meiner
                        Freizeit an privaten Projekten und freue mich immer über die Gelegenheit an etwas neuem
                        zu arbeiten.
                    </p>
                    <p className={"textbox"}>
                        Seit September 2026 besuche ich Coders.Bay Vienna um mein Diplom als Fullstack Developer
                        nachzuholen.
                    </p>
                </div>
                <img src={profilePic} alt="a picture of the Author" className="aboutme_card_pic"/>
            </div>
        </>
    )
}

export default AboutmeCard