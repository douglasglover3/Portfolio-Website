import Portrait from '../Images/Portrait-Small.png';
import {GithubLogo, LinkedinLogo} from "phosphor-react";

export default function Home() {
    return (
        <div style={{width:"100%"}}>
            <div className="white" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", height: "100vh"}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", marginInline:"100px", maxWidth:"40%",  height: "100%"}}>
                    
                    <h1>Douglas Glover</h1>
                    <h3>Software Engineer &#x2022; UI/UX Design &#x2022; Website Development</h3>
                    <p> 
                        Hi, I am a full stack developer with skills in web design. I am experienced and educated
                        in multimedia design and software development. I create websites and applications
                        that are both practical and aesthetically pleasing.
                    </p>
                    <div style={{display: "flex", flexDirection: "row", marginBlock:"60px", marginInline: "0px"}}>
                        <button className="white simplebutton" style={{display: "flex", justifyContent: "center"}} onClick={() => {}}>
                            <LinkedinLogo size={25} weight="light" className= "color" style={{alignSelf:"center", justifySelf:"center"}}/>
                            <h3 style={{alignSelf:"center", justifySelf:"center", fontSize: "12pt", margin: "5px"}}>LinkedIn</h3>
                        </button>
                        <button className="white simplebutton" style={{display: "flex", justifyContent: "center"}} onClick={() => {}}>
                            <GithubLogo size={25} weight="light" className= "color" style={{alignSelf:"center", justifySelf:"center"}}/>
                            <h3 style={{alignSelf:"center", justifySelf:"center", fontSize: "12pt", margin: "5px"}}>Github</h3>
                        </button>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                    <img src={Portrait} style={{alignSelf: 'flex-end', maxHeight: "100vh", marginRight: "20px"}} alt="Portrait of Douglas Glover"/>
                </div>
            </div>
        </div>
    );
}