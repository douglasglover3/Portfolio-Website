const images = require.context('../../public/Images', true);

export default function ProjectTile ({title, tags, description, imageName}) {
    return (
        <button className="portfoliobutton" onClick={(e) => {e.stopPropagation(); /*go to project page*/}}>
            <div style={{display:"flex", flexDirection: "column", margin: "5px", height: "300px", width: "400px", justifyContent:"center"}}>
                <img src={images(`./${imageName}`)} style={{maxWidth:"100%", maxHeight: "100%"}} alt="Synesthize Logo"/>
            </div>
            <div style={{margin: "50px", width: "50%"}}>
                <h2 style={{display:"flex", marginBottom: "10px"}}> {title} </h2>
                <div style={{display:"flex", marginBottom: "25px"}}>
                    {tags.map((tag) => 
                        <button key={tag} className="tagbutton" style={{marginRight:"5px", paddingInline: "10px", paddingBlock: "5px", borderRadius: "15px"}} onClick={() => {/*Filter by tag*/}}>
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
        </button>
    );
}