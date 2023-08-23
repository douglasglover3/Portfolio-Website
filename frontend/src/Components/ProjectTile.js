import SynesthizeTitle from '../Images/SynesthizeTitle.png';

export default function ProjectTile () {
    return (
        <div className="portfoliobutton" style={{display:"flex", paddingInline:"20px"}}>
            <div style={{display:"flex", flexDirection: "column", margin: "5px", height: "300px", width: "400px", justifyContent:"center"}}>
                <img src={SynesthizeTitle} style={{maxWidth:"100%", maxHeight: "100%"}} alt="Synesthize Logo"/>
            </div>
            <div style={{margin: "50px", width: "50%"}}>
                <h2 style={{display:"flex", marginBottom: "10px"}}> Synesthize Application and Website</h2>
                <div style={{display:"flex", marginBottom: "25px"}}>
                    <div className="regular" style={{marginRight:"5px", paddingInline: "9px", paddingBlock: "5px", borderRadius: "15px"}}><h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>University</h5></div>
                    <div className="regular" style={{marginRight:"5px", paddingInline: "9px", paddingBlock: "5px", borderRadius: "15px"}}><h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>Application</h5></div>
                    <div className="regular" style={{marginRight:"5px", paddingInline: "9px", paddingBlock: "5px", borderRadius: "15px"}}><h5 style={{margin: "0px", color:"white", fontWeight:"normal"}}>Website</h5></div>
                </div>
                <p>
                    This app is an experimental interpretation of sound into color. 
                    The app takes the user's microphone input, then detects any musical notes being played to convert them into specific colors.
                    This was made in my senior year at UCF with a team of five members.
                </p>
            </div>
        </div>
    );
}