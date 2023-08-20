import {Section} from '../Components/Section';
import Portrait from '../Images/Profile.JPG';

export default function Home() {
    return (
        <div style={{width:"100%"}}>
            <Section color="white">
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%"}}>
                        
                        <h1>Douglas Glover</h1>
                        <h2>Software Developer</h2>
                        <p>Full stack developer with skills in web design.</p>
                    </div>
                    <img src={Portrait} style={{height: "900px", position: "fixed", right:"60px"}} alt="Portrait of Douglas Glover"/>
                </div>
            </Section>
        </div>
    );
}