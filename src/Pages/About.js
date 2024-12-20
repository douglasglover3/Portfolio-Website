import portrait from '../Images/aboutphoto.jpg';
export default function About() {

    return (
        <div style={{width:"100%"}}>
            <div style= {{display: "flex", padding:"20px"}}>
                
                <div class="dark" style={{padding:"50px", margin: "10px", display: "flex"}}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <h1 style={{marginBottom:"0px", fontSize: "40px"}}>Hi, my name is Douglas Glover.</h1> 
                        <h3 class="dark">I am a software developer interested in full-stack development.</h3>
                        <div style={{marginRight:"10vh", marginTop: "30px"}}>
                            <p>
                                 I have been programming since high school when I created a flash game with my friends. I have always enjoyed
                                programming, and I am especially excited by new and unique problems. I graduated from the University of Central Florida in 2023
                                with a Bachelor's degree in Computer Science. I am currently pursuing a Master's degree in Computer Science, set to graduate in late 2025.
                            </p>
                            <p>
                                My work in software has mostly revolved around JavaScript, Python and PostgreSQL. I also have experience in C++, C#, and MySQL. I am comfortable 
                                with MERN and MEAN stacks.
                            </p>
                            <p>
                                In addition to programming knowledge, I took a two-year college program during high school, the Multimedia Design program, that taught me how to use 
                                various Adobe software such as Photoshop, Illustrator, Premiere, and InDesign. I learned Graphic Design fundamentals which I consistently use in
                                front end development today.
                            </p>
                        </div>
                        
                    </div>
                    <img src={portrait} style={{maxWidth:"40%", alignSelf:"center"}} alt="Portrait of Douglas Glover"/>
                </div>
            </div>
           
        </div>
    );
}