export default function Synesthize() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <p> 
                This app is an experimental interpretation of sound into color. The app takes the user's microphone input, 
                then detects any musical notes being played to convert them into specific colors. This was made in my senior year at UCF with a team of five members.
            </p>
            <p> 
                There was both a desktop app and web app created for this project. The app was a built with a MERN stack and built as a desktop app using Electron.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Synesthize Website</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/SynesthizeWebsite.png")} alt="The Synesthize web app." style={{maxWidth:"800px"}}/>
            </div>
            <p>
                My role in the project was mostly constructing the methods used to determine the notes played in the microphone input. This consisted of taking the sound data
                and performing a signal processing technique known as the Fourier Transform. A Fourier Transform deconstructs a signal into it's base frequencies. This is visualized in the form of spikes in data.
                This allows the app to find prominent frequencies which could then be identified as particular musical notes.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Fourier Transform data</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/TransformData.png")} alt="Example of Fourier Transform data." style={{maxWidth:"800px"}}/>
            </div>
            <p>
                I was able to learn a lot about signal processing in this project. I think this was an interesting problem to solve. I may revisit this app in the future to improve
                the frontend and further explore the concept of turning sound into color.
            </p>
        </div>
    );
}