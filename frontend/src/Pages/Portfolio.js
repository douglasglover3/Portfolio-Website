import ProjectTile from '../Components/ProjectTile';
import Projects from '../Projects/Projects.json';

export default function Portfolio() {
    const tiles = Projects;
    return (
        <div style={{width:"100%", marginInline: "100px", marginBlock: "60px"}}>
            <div style= {{display: "flex", padding:"20px", justifyContent: "end"}}>
                <h3 style={{marginInline:"20px"}}>Filter:</h3>
                <h3>All projects</h3>
                {/*Add filter stuff here*/}
            </div>
            {tiles.map((tile) => <ProjectTile key={tile.projectName} projectName={tile.projectName} title={tile.title} tags={tile.tags} description={tile.description} imageName={tile.imageName} markdownName={tile.projectName + ".md"}/>)}
        </div>
    );
}