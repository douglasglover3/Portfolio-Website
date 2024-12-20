"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[534],{534:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var s=a(184);function n(){return(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("p",{children:"'Ritual Night' is a multiplayer video game. It contains common multiplayer game mechanics, such as cosmetics, matchmaking, and battlepasses. I was hired to develop the game's database and API and work with the client-side team to integrate the API. The database stores information about players such as the cosmetics they have unlocked, or the xp they have earned. The API is used to communicate that data to the client application. The API was designed to run in containerized pods on a Kubernetes cluster for improved costs and performance."}),(0,s.jsx)("p",{children:"I was contracted to make this API and database in March of 2024 and worked on it for about 8 months until the game was released on Steam. I worked closely with the development team of the game's client-side to integrate and develop the functionality of the game's online mechanics."}),(0,s.jsx)("p",{children:"Some of the mechanics I developed include: A battlepass system, achievements, statistics tracking, quests, friends, matchmaking, cosmetic purchases, xp and leveling up, Steam integration, developer mail, and cosmetic customization."}),(0,s.jsx)("p",{children:"I was given the general design of how these mechanics were intended to function, but I designed and applied the technical implementations. I often communicated with my manager and the client-side development team to discuss details and improvements to refine the design throughout development. During development, we working in a testing environment that included a basic kubernetes cluster and database."}),(0,s.jsx)("h3",{style:{marginBlock:"30px",alignSelf:"center"},children:"Gameplay screenshot from Ritual Night"}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:"30px"},children:(0,s.jsx)("img",{src:a(334),alt:"The Ritual Night game.",style:{maxWidth:"800px"}})}),(0,s.jsx)("p",{children:"I won't go into many details about the exact structure and design of the database and API for security and confidentiality reasons, but I can talk about the general designs that I used."}),(0,s.jsx)("p",{children:"The API and database are hosted with Microsoft Azure services. The API uses Azure's node scaling to minimize costs and manage bursts of traffic. There are servers and databases hosted in several regions around the world. This improves latency for the api and multiplayer."}),(0,s.jsx)("p",{children:"The database is a relational database designed with PostgreSQL. It has about 90 different tables. The manager often designed and changed data using excel sheets. For easier development, I made a CI/CD system that would allow the database to be populated from excel sheet data for quick prototyping. This was later refined for stable updates to the game's database in live production."}),(0,s.jsx)("p",{children:"The API was designed with the FastAPI framework and was written in python. It is composed of over 300 API routes, and several tens of thousands of lines of code. It was designed with detailed documentation for each route's functionality and error codes, using FastAPI's interactive documentation. The API uses a Kubernetes cluster. Kubernetes clusters allow for programs to be 'containerized' into pods. The API was designed to run on containerized pods that can be created and destroyed automatically when needed. The pods are managed by a balancer that will scale the number of pods up when traffic is high, and scale down when traffic is low. This was designed to improve scalability for user traffic fluctuations. This saves on costs and improves response time in periods of high traffic."}),(0,s.jsx)("p",{children:"In addition to the API pods, there were also game server pods for multiplayer. The game server pods allow for users to have private and public games of about a eight players each. I did not design the code and functionality of the game servers, but I did contribute to the integration of the game server pods into Kubernetes."}),(0,s.jsx)("p",{children:"The API's code is rolled out in an 'image' with docker. Images allow for easy and simultaneous updates for the Kubernetes clusters in each region. Kubernetes pods allow these updates to rollout seamlessly, so there is no downtime during an update."}),(0,s.jsx)("h3",{style:{marginBlock:"30px",alignSelf:"center"},children:"Basic diagram of the API and database"}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-around",marginBottom:"30px"},children:(0,s.jsx)("img",{src:a(386),alt:"Basic diagram of the API and database.",style:{maxWidth:"800px"}})}),(0,s.jsx)("p",{children:"This was an exciting project to work on, it was great to develop a large-scale application with the Ritual Night team. I am more confident in my database and API development skills moving forward, having worked on this project."})]})}}}]);
//# sourceMappingURL=534.07efc207.chunk.js.map