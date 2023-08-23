
import Section from '../Components/Section';
import ProjectTile from '../Components/ProjectTile';

export default function Portfolio({errorType}) {
    return (
        <div style={{width:"100%", marginInline: "100px"}}>
            <Section color="white">
                <h2>Portfolio</h2>
            </Section>
            <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/>
            <ProjectTile/>
        </div>
    );
}