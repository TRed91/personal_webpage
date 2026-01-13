import type {PortfolioCard} from "../type_card.ts";
import odinBookPic from "../../../assets/OdinBook_SC_small.jpg";
import assetTrackerPic from "../../../assets/AssetTracker_small.jpg";
import phaseTrackerPic from "../../../assets/PT_sc.png"

export const cards: PortfolioCard[] = [
    {
        title: "Odin Book Frontend",
        description: "The frontend for my mini social media site made in vite+react and javascript",
        img: odinBookPic,
        github: "https://github.com/TRed91/OdinBook_React",
        link: "https://odinbook-react.pages.dev"
    },
    {
        title: "Odin Book API",
        description: "The Rest API for my Odin Book Project made with Node.js, express.js and javascript using a postgres database.",
        img: odinBookPic,
        github: "https://github.com/TRed91/OdinBook_API",
        link: "https://odinbook-react.pages.dev"
    },
    {
        title: "IT Asset Tracker",
        description: "Web Application and Rest API to manage inventory assets made in C# ASP.Net and SqlServer",
        img: assetTrackerPic,
        github: "https://github.com/TRed91/ITAssetTracking",
        link: ""
    },
    {
        title: "Phase Tracker",
        description: "A very simple app to keep track of phases and points for a popular card game. Made in Godot and C#",
        img: phaseTrackerPic,
        github: "https://github.com/TRed91/phase10_tracker_godot",
        link: "https://apps.apple.com/at/app/phase-x-tracker/id6756629771"
    }
]