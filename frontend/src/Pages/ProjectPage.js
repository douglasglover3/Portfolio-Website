
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


import {useLocation} from "react-router-dom";

const images = require.context('../Images', true);
const markdowns = require.context('../Projects', true);

export default function ProjectPage() {
    const [content, setContent] = useState('');
    const project = useLocation().state;
    console.log(project)

    useEffect(() => {
		fetch(markdowns(`./${project.markdownName}`))
            .then(res => res.text())
            .then(text => setContent(text))
	})

    return (
        <div style={{width:"100%", marginInline: "100px", marginBlock: "60px"}}>
            
            <div style= {{display: "flex", flexDirection: "column", padding:"20px"}}>
                
                <img src={images(`./${project.imageName}`)} style={{maxWidth:"60%", maxHeight: "30%", alignSelf: "center", marginBlock: "50px"}} alt={project.imageAlt}/>
                <h2>{project.title}</h2>
                <div style={{display:"flex", marginBottom: "25px"}}>
                    {project.tags.map((tag) => 
                        <button key={tag} className="tagbutton" style={{marginRight:"5px", paddingInline: "10px", paddingBlock: "5px", borderRadius: "15px"}} onClick={() => {/*Filter by tag*/}}>
                            <h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>
                                {tag}
                            </h5>
                        </button>)
                    }
                </div>
                <ReactMarkdown children={content} />
            </div>
        </div>
    );
}