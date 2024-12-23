import {useLocation} from "react-router-dom";
import { lazy, Suspense } from 'react';
import {ProjectButton} from "../Components/LinkButton";
import About from './About.js';

const images = require.context('../Projects/Images', true);


export default function ProjectPage() {
    const project = useLocation().state;
    const Content = lazy(() => import(`../Projects/${project.projectName}`));

    return (
        <div style={{maxWidth:"100%", marginInline: "100px", marginBlock: "60px"}}>
            
            <div style= {{display: "flex", flexDirection: "column", padding:"20px"}}>
                {project.imageName ? 
                    <img src={images(`./${project.imageName}`)} style={{maxWidth:"60%", maxHeight: "30%", alignSelf: "center", marginBlock: "60px"}} alt={project.imageAlt}/>
                :
                    <></>
                }
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1 style={{marginBlock: "10px"}}>{project.title}</h1>
                    {project.githubUrl != null ? <ProjectButton url={project.githubUrl}/> : <></>}
                </div>
                
                <div style={{display:"flex", marginBottom: "25px"}}>
                    {project.tags.map((tag) => 
                        <button key={tag} className="tagbutton" style={{marginRight:"5px", paddingInline: "10px", paddingBlock: "5px", borderRadius: "15px"}} onClick={() => {/*Filter by tag*/}}>
                            <h5 style={{margin: "0px", color:"white", fontWeight:"normal", whiteSpace:"nowrap"}}>
                                {tag}
                            </h5>
                        </button>)
                    }
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Content />
                </Suspense>
            </div>
            <About/>
        </div>
    );
}