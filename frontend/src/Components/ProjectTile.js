import {useNavigate} from "react-router-dom";

const images = require.context('../Projects/Images', true);
export default function ProjectTile ({title, tags, description, imageName, imageAlt, projectName, githubUrl}) {
    let navigate = useNavigate();
    return (
        <button className="portfoliobutton" onClick={() => {navigate( "/projects/" + projectName, {state: {title, tags, imageName, imageAlt, projectName, githubUrl}})}}>
            {imageName != null ?
                <div style={{display:"flex"}}>
                    <div style={{display:"flex", flexDirection: "column", margin: "5px", height: "300px", width: "400px", justifyContent:"center"}}>
                        <img src={images(`./${imageName}`)} style={{maxWidth:"100%", maxHeight: "100%"}} alt="im"/>
                    </div>
                    <div style={{margin: "50px", width: "50%"}}>
                        <h2 style={{display:"flex", marginBottom: "10px"}}> {title} </h2>
                        <div style={{display:"flex", marginBottom: "25px"}}>
                            {tags.map((tag) => 
                                <div key={tag} className="tagbutton" style={{marginRight:"5px", paddingInline: "10px", paddingBlock: "5px", borderRadius: "15px"}} onClick={(e) => {e.stopPropagation(); /*Filter by tag*/}}>
                                    <h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>
                                        {tag}
                                    </h5>
                                </div>)
                            }
                        </div>
                        <p className="description">
                            {description}
                        </p>
                    </div>
                </div>
                :
                <div style={{display:"flex"}}>
                    <div style={{margin: "50px", width: "100%"}}>
                        <h2 style={{display:"flex", marginBottom: "10px"}}> {title} </h2>
                        <div style={{display:"flex", marginBottom: "25px"}}>
                            {tags.map((tag) => 
                                <button key={tag} className="tagbutton" style={{marginRight:"5px", paddingInline: "10px", paddingBlock: "5px", borderRadius: "15px"}} onClick={(e) => {e.stopPropagation(); /*Filter by tag*/}}>
                                    <h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>
                                        {tag}
                                    </h5>
                                </button>)
                            }
                        </div>
                        <p className="description">
                            {description}
                        </p>
                    </div>
                </div>
            }
        </button>
    );
}