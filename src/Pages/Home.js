import Portrait from '../Images/Portrait-Small.png';
import {GithubButton, LinkedinButton} from "../Components/LinkButton";

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
                        <LinkedinButton/>
                        <GithubButton/>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                    <img src={Portrait} style={{alignSelf: 'flex-end', maxHeight: "100vh", marginRight: "20px"}} alt="Portrait of Douglas Glover"/>
                </div>
            </div>
        </div>
    );
}