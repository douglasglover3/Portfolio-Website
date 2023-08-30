import ProjectTile from '../Components/ProjectTile';
import Projects from '../Projects/Projects.json';

export default function Portfolio() {
    const tiles = Projects;
    return (
        <div style={{width:"100%", marginInline: "100px", marginBlock: "60px"}}>
            {/*Add filter stuff here
            <div style= {{display: "flex", padding:"20px", justifyContent: "end"}}>
                <h3 style={{marginInline:"20px"}}>Filter:</h3>
                <h3>All projects</h3>
            </div>
            */}
            {tiles.map((tile) => <ProjectTile key={tile.projectName} title={tile.title} tags={tile.tags} description={tile.description} imageName={tile.imageName} projectName={tile.projectName} githubUrl={tile.githubUrl}/>)}
        </div>
    );
}