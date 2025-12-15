import './aboutme_card.css'

function AboutmeCard(){

    return (
        <>
            <div className="aboutme_card">
                <div>
                    <h2>Hi, I'm <span className={"highlight"}>Thomas Roth</span></h2>
                    <h4>Software- and Web Developer</h4>
                    <p className={"textbox"}>I am a self taught software and web developer<br/>
                        from Austria.<br/><br/>
                        I learned software and web development from<br/>
                        various sources like the <a href="https://www.theodinproject.com" target={"_blank"}>Odin Project</a>,
                        <a href="https://www.skillfoundry.io" target={"_blank"}> Skill Foundry</a>,<br/>
                        <a href="https://neetcode.io" target={"_blank"}> NeetCode</a> and <a href="https://boot.dev" target={"_blank"}>Boot.dev</a>
                        , as well as various books.<br/><br/>
                        Coding has quickly become a passion for me and I'm always to get<br/>
                        to get a chance to work on another project.
                    </p>
                </div>
                <img src="src/assets/profile_pic.jpg" alt="a picture of the Author" className="aboutme_card_pic"/>
            </div>
        </>
    )
}

export default AboutmeCard