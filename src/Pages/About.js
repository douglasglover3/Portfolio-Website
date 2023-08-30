import {GithubButton, LinkedinButton} from "../Components/LinkButton";

export default function About() {

    return (
        <div style={{width:"100%", marginInline: "100px", marginBlock: "60px"}}>
            <div style= {{display: "flex", padding:"20px"}}>
                <div>
                    <h2>Hi, my name is Douglas Glover.</h2>
                    <p>
                        I am a software developer interested in frontend and full-stack development. I have been programming since high school when I created a flash game with my friends. I have always enjoyed
                        programming, and I am especially excited by new and unique problems. I graduated from the University of Central Florida in 2023
                        with a bachelor's degree in Computer Science.
                    </p>
                    <p>
                        My work in software has mostly revolved around JavaScript and MySQL, but I also have experience in C++, C#, Java, PHP, and Python. I am comfortable 
                        with MERN and MEAN stacks, with some experience in LAMP stacks.
                    </p>
                    <p>
                        In addition to programming knowledge, I took a two-year college program during high school, the Multimedia Design program, that taught me how to use 
                        various Adobe software such as Photoshop, Illustrator, Premiere, and InDesign. I also learned Graphic Design fundamentals which I consistently use in
                        front end development today.
                    </p>
                    <div style={{display: "flex", flexDirection: "row", marginBlock:"60px", marginInline: "0px"}}>
                        <LinkedinButton/>
                        <GithubButton/>
                    </div>
                </div>
                <img src={require("../Images/Portrait-Small.png")} alt="Photo of Douglas Glover" style={{maxHeight:"70vh"}}/>
            </div>
           
        </div>
    );
}