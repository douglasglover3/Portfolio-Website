export default function Soundlink() {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
           <p> 
                Soundlink is a social media app focused on sharing playlists. Users can create posts with playlists from their Spotify accounts. 
                Users can also edit, share, like, and comment on posts. There are also user profiles, email verified accounts, and a direct messaging system. 
                There was additionally a companion website meant to advertise and provide a download for the mobile app. This was made in my junior year at UCF with a team of seven members.
                The app was built using a MERN stack, except with React Native instead of React.
            </p>
            <p>
                My role in the project was mostly the frontend of the mobile application. I designed and implemented many of the different "screens" where user interactions took place. Our team used
                Figma to design mockups for these screens before constructing them in React Native. I designed the logo and several icons for the app using Adobe Illustrator.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Demonstration of login and home feed</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/DemoLogin.gif")} alt="A demo of the app's login functions." style={{maxWidth:"250px"}}/>
                <img src={require("./Images/DemoHome.gif")} alt="A demo of the app's home feed." style={{maxWidth:"250px"}}/>
            </div>
            <p>
                The app's login and registration system included a password recovery system with the account's attached email,
                as well as an email verification system for new accounts. Once verified, users would be entered into our database. Users could then construct profiles and 
                search for users to follow.
            </p>
            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Demonstration of search and profile systems</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/DemoSearch.gif")} alt="A demo of the app's search function." style={{maxWidth:"250px"}}/>
                <img src={require("./Images/DemoProfile.gif")} alt="A demo of the app's profile page functions." style={{maxWidth:"250px"}}/>
            </div>
            <p>
                Users could create posts, attaching a caption to a playlist shared from their Spotify. A user's followers could then see this post and listen to it on their own Spotify. The app had a notification system to notify a user when someone followed, liked a playlist, or shared a playlist. 
                Additionally, I partnered with my teammate working on the backend to construct a direct messaging system, which used web sockets instead of API. 
                This allowed users to send and recieve messages in real time.
            </p>

            <h3 style={{marginBlock:"30px", alignSelf: "center"}}>Demonstration of posts, notifications and chat systems</h3>
            <div style={{display: "flex", justifyContent: "space-around", marginBottom:"30px"}}>
                <img src={require("./Images/DemoCreate.gif")} alt="A demo of the app's search function." style={{maxWidth:"250px"}}/>
                <img src={require("./Images/DemoNotifications.gif")} alt="A demo of the app's search function." style={{maxWidth:"250px"}}/>
            </div>
            <p>
                This project was a lot of fun. A lot of work was put in to make the app aesthically pleasing,
                and it came out great. I had a great team and it is one the projects I am most proud of.
            </p>
        </div>
    );
}