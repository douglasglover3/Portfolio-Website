import {GithubLogo, LinkedinLogo} from "phosphor-react";
export function GithubButton () {
    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <button className="white simplebutton" style={{display: "flex", justifyContent: "center", maxWidth: "120px"}} onClick={() => {openLink("https://github.com/douglasglover3")}}>
            <GithubLogo size={25} weight="light" className= "color" style={{alignSelf:"center", justifySelf:"center"}}/>
            <h3 style={{alignSelf:"center", justifySelf:"center", fontSize: "12pt", margin: "5px"}}>Github</h3>
        </button>
    );
}

export function ProjectButton({url}) {
    return (
        <button className="white simplebutton" style={{display: "flex", justifyContent: "center", maxWidth: "200px"}} onClick={() => {window.open(url, "_blank", "noreferrer")}}>
            <GithubLogo size={25} weight="light" className= "color" style={{alignSelf:"center", justifySelf:"center"}}/>
            <h3 style={{alignSelf:"center", justifySelf:"center", fontSize: "12pt", margin: "5px"}}>Project's Github</h3>
        </button>
    );
}

export function LinkedinButton () {
    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return (
        <button className="white simplebutton" style={{display: "flex", justifyContent: "center", maxWidth: "120px"}} onClick={() => {openLink("https://www.linkedin.com/in/douglas-glover/")}}>
            <LinkedinLogo size={25} weight="light" className= "color" style={{alignSelf:"center", justifySelf:"center"}}/>
            <h3 style={{alignSelf:"center", justifySelf:"center", fontSize: "12pt", margin: "5px"}}>LinkedIn</h3>
        </button>
    );
}