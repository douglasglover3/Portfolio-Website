export default function CollegeEventWebsite() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <p> 
                This website is for sharing and viewing upcoming events at local colleges. 
                University and registered student organizations can announce events, and students can login to view and comment on these events.
            </p>
            <p> 
                I created this web application as part of my Databases class in my senior year at UCF. This application was built using a modified MERN stack using MySQL instead of MongoDB. 
                It uses JavaScript with react to create the user interface. It uses a relational database that contains data for users, Registered Student Organizations (RSOs) and Universities.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Website Event Feed</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/Event_list.png")} alt="Website Event List" style={{maxWidth:"800px"}}/>
            </div>
            <p> 
                The project was required to cover certain constraints, the main ones including:
                <ul>
                    <li>Users can be students, admins or superadmins</li>
                    <li>Events can be rso events, public events or private events</li>
                    <li>Events have appropriate attributes and can have ratings and comments specific to users.</li>
                    <li>University profiles are included.</li>
                    <li>User relationships with RSOs are included.</li>
                </ul>
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Entity-Relationship Diagram</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/ProjectER.png")} alt="Entity-Relationship Diagram" style={{maxWidth:"800px"}}/>
            </div>
            <p> 
                Events could be posted by RSOs, University Admins, or Users approved by a University Admin. RSOs could be created on the application, if at least five users decided to create one.
                The oldest member of an RSO automatically became RSO admin, enforced by a trigger in the database.
            </p>
            <p> 
                Events had data for time and date, location and contact info. Users could rate and comment on these events, which could then be viewed by other users.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Event Page</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/Event_page.png")} alt="Event Page" style={{maxWidth:"800px"}}/>
            </div>
            <p>
                This was my first time doing a full-stack application on my own, so I learned a lot while building this app. 
                It was also my first time diving into MySQL and I thought it was a great learning experience. After this project,
                I was much more comfortable working as a full-stack developer.
            </p>
        </div>
    );
}